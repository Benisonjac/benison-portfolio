export const PROJECTS = [
  {
    id: "chatbot-for-farmers",
    number: "01",
    title: "Chatbot for Farmers",
    tag: "RAG \u00B7 FAISS \u00B7 LangChain \u00B7 ARIMA / SARIMA",
    summary:
      "A RAG pipeline built from scratch on unstructured government PDFs, paired with ARIMA and SARIMA forecasting for seasonal crop prices.",
    built: "A RAG pipeline built from scratch that chunked and embedded unstructured government PDFs, indexed them with FAISS, and used LangChain to connect retrieval to an LLM, plus ARIMA and SARIMA forecasting for seasonal crop prices.",
    surprised:
      "How messy real government documents were. Formatting changed from page to page, and tables rarely sat where they should.",
    learned:
      "How retrieval quality limits what the chatbot can say. If the right passage isn't retrieved, the model can't fix the answer.",
    result: "A working pipeline that combines document retrieval with crop price forecasting.",
    stack: ["RAG", "LangChain", "FAISS", "ARIMA / SARIMA", "Embeddings"],
    story: [
      ["The problem", "Government agriculture documents hold a lot of what farmers need, but they sit in unstructured PDFs \u2014 and crop prices move in seasons that a simple lookup can't capture."],
      ["What I did", "I built the retrieval side from scratch: chunking each document, embedding the chunks, indexing them in FAISS, and wiring LangChain to connect what was retrieved to an LLM. Alongside it, I fitted ARIMA and SARIMA models to seasonal crop prices."],
      ["Where it got hard", "Cleaning the documents was most of the work. And retrieval set the ceiling: when the right passage came back, the answer was useful; when it didn't, nothing downstream could save it."],
    ],
  },
  {
    id: "cochain-ai",
    number: "02",
    title: "CoChain.ai",
    tag: "Vector search \u00B7 A/B testing",
    summary:
      "A platform that helps developers and idea people find collaborators with similar goals \u2014 with an A/B testing framework built in.",
    built: "A platform that helps developers and idea people find collaborators with similar goals, so they can team up instead of working alone. A bit like LinkedIn and GitHub combined, with an A/B testing framework that uses significance testing and automatic winner detection.",
    surprised:
      "It was the first project where I started from my own idea and built it end to end. I wasn't sure whether anything like it existed, and finding that out along the way was part of the learning.",
    learned:
      "The more I grow, the more I can help others. Building CoChain.ai pushed me to learn new tools like vector search, and I realized that improving myself is the best way I know to make things better for the people I build for.",
    result: "SQL and FAISS vector search queries optimized to return in under 5 seconds.",
    stack: ["Vector search", "FAISS", "SQL", "A/B testing", "Significance testing"],
    link: { label: "Try it live", url: "https://cochain-ai.onrender.com" },
    story: [
      ["The problem", "People with ideas often stall because they can't find the right person to build with \u2014 matching by goals, not just by job titles."],
      ["What I did", "I designed the matching around vector search over what people are working on, and added an A/B testing framework that uses significance testing with automatic winner detection, so product decisions didn't run on vibes."],
      ["Where it got hard", "Everything was mine to decide: the idea, the schema, the queries, the dead ends. Learning vector search was half the build; learning to ship despite uncertainty was the other half."],
    ],
  },
  {
    id: "codexoho-digital",
    number: "03",
    title: "Face AI",
    tag: "Computer vision backend \u00B7 FastAPI \u00B7 PostgreSQL \u00B7 Docker",
    summary:
      "A computer vision project on attendance management for an enterprise client, built on FastAPI and PostgreSQL.",
    built: "A computer vision project on attendance management for an enterprise client: FastAPI and PostgreSQL services built around face recognition, with every service containerized using Docker.",
    surprised:
      "The requirements weren't fully defined at the start and kept shifting, so a lot of the work was deciding what to build and what to leave out.",
    learned:
      "How to make sensible trade-offs when things change, and to ask what the business actually needs, not only what a benchmark shows.",
    result: "REST APIs that the frontend and reporting tools both relied on.",
    stack: ["FastAPI", "PostgreSQL", "Docker", "Face recognition"],
    story: [
      ["The problem", "An enterprise client needed attendance management built on face recognition \u2014 and the definition of 'done' moved as the work went on."],
      ["What I did", "I built the FastAPI and PostgreSQL services around face recognition, kept the APIs clean enough that the frontend and reporting tools could both rely on them, and containerized everything with Docker so it behaved the same everywhere."],
      ["Where it got hard", "Not the models \u2014 the moving requirements. A good part of the job was deciding what to build and what to leave out, and asking what the business actually needed."],
    ],
  },
];
