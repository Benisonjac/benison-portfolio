import Projects from "../components/Projects";
import { Page, usePageMeta } from "../components/Layout";

export default function ProjectsPage() {
  usePageMeta(
    "Projects \u2014 Benison Jacob Benny",
    "Three case studies: a RAG chatbot for farmers, CoChain.ai, and Face AI \u2014 a computer vision attendance system.",
  );

  return (
    <Page>
      <div className="h-16 sm:h-20" />
      <Projects />
    </Page>
  );
}
