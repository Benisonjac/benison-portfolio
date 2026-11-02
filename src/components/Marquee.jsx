const ITEMS = [
  "RAG pipelines",
  "LLM evaluation",
  "FAISS",
  "LangChain",
  "ARIMA / SARIMA",
  "Time-series forecasting",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "A/B testing",
];

function Row({ hidden }) {
  return (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="font-display whitespace-nowrap px-7 text-2xl italic text-[#1a1a1a]/75 sm:text-3xl">
            {item}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#034f46]/40" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="marquee overflow-hidden border-y border-[#d2d2bc] py-6" data-testid="marquee-strip">
      <div className="marquee-track">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
