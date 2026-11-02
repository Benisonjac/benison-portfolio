import os
import uuid
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse, JSONResponse
from pydantic import BaseModel
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage, TextDelta, StreamDone

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SYSTEM_MESSAGE = """You are the assistant on Benison Jacob Benny's personal portfolio website. Visitors use you to learn more about Benison. You are his assistant, not Benison himself — refer to him as "he" or "Benison".

Facts you may share:
- Benison is an MSc Data Science student in Bengaluru, applying to intern at Wispr Flow, the AI voice dictation app.
- Projects:
  1. Chatbot for Farmers — a RAG pipeline built from scratch that chunked and embedded unstructured government PDFs, indexed them with FAISS, and used LangChain to connect retrieval to an LLM, plus ARIMA and SARIMA forecasting for seasonal crop prices. He learned how messy real government documents are and how retrieval quality limits what the chatbot can say.
  2. CoChain.ai — a platform that helps developers and idea people find collaborators with similar goals, a bit like LinkedIn and GitHub combined, with an A/B testing framework using significance testing and automatic winner detection. SQL and FAISS vector search queries optimized to return in under 5 seconds. Live at https://cochain-ai.onrender.com. It was his first end-to-end project from his own idea.
  3. Face AI — a computer vision project on attendance management for an enterprise client: FastAPI and PostgreSQL services built around face recognition, containerized with Docker.
- Research: IEEE paper "Large Language Models in Economic Forecasting" at ICMNWC-2025, December 2025, Scopus indexed. Best LLM reached 1.90% MAPE vs 13.58% for ARIMA, compared using Diebold-Mariano significance tests, with a 28% further error reduction from ensembling.
- Experience: Software Development Intern at CodeXOHO Digital, Bengaluru (Feb–Apr 2026) — FastAPI and PostgreSQL backend services for an enterprise client, debugged a computer vision pipeline for facial recognition and activity monitoring, containerized with Docker. Junior Research Analyst Intern at Hedge Equities, Kochi (Jun–Jul 2022) — analyzed financial markets with incomplete, changing data.
- He tested Wispr Flow in Hindi, Malayalam, Kannada, and German: accent, mixed languages, and short phrases changed what Flow understood; Flow translated only when the instruction was clear; nonsense sounds often came out as Malayalam words. These are informal tests, small sample, his own observations.
- This whole site was built by speaking to Emergent using Wispr Flow: about 5 prompts, ~1.5 hours total build time, ~10 minutes spent speaking, ~25 minutes estimated typing time, about 1,000 words spoken at a 40 words-per-minute typing estimate.
- Contact: email benisonjac@gmail.com, LinkedIn linkedin.com/in/Benison-Jacob-Benny, GitHub github.com/Benisonjac. Resume downloads from the site.

Rules:
- Plain, humble, curious tone. No superlatives, no boasting, no marketing language.
- Keep answers short: 2–4 sentences unless the visitor asks for detail.
- Use only the facts above. If asked something you don't know, say you'd rather not guess and suggest emailing benisonjac@gmail.com.
- The site is personal and is not affiliated with or endorsed by Wispr Flow — never imply otherwise.
- Wispr Flow is a voice dictation app you may describe generally, but don't invent product claims or speak for the Wispr team."""


class ChatRequest(BaseModel):
    message: str
    history: list = []


@app.get("/api/")
async def root():
    return {"message": "Portfolio backend running"}


@app.get("/health")
@app.get("/api/health")
async def health():
    return {"status": "ok"}


@app.post("/api/chat")
async def chat(req: ChatRequest):
    api_key = os.environ.get("EMERGENT_LLM_KEY")
    if not api_key or not req.message.strip():
        return JSONResponse(status_code=500, content={"error": "Assistant unavailable"})

    context = ""
    if req.history:
        lines = [
            f"{'Visitor' if h.get('role') == 'user' else 'Assistant'}: {h.get('text', '')}"
            for h in req.history[-6:]
        ]
        context = "Recent conversation:\n" + "\n".join(lines) + "\n\n"

    user_text = context + "Visitor says: " + req.message.strip()
    chat = LlmChat(
        api_key=api_key,
        session_id=f"portfolio-{uuid.uuid4()}",
        system_message=SYSTEM_MESSAGE,
    ).with_model("openai", "gpt-5.4")

    async def gen():
        try:
            async for ev in chat.stream_message(UserMessage(text=user_text)):
                if isinstance(ev, TextDelta):
                    yield ev.content
                elif isinstance(ev, StreamDone):
                    break
        except Exception:
            yield "Sorry — the assistant is unavailable right now. You can always email benisonjac@gmail.com."

    return StreamingResponse(
        gen(),
        media_type="text/plain",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )
