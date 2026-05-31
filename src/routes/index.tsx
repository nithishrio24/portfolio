import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Education } from "@/components/portfolio/Education";
import { Certificates } from "@/components/Certificates";
import { Resume, Contact, Footer } from "@/components/portfolio/Resume";
import { Nav } from "@/components/portfolio/Nav";
import { CursorGlow, ScrollProgress, Loader } from "@/components/portfolio/Effects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nithish S — AI Engineer & Data Analyst" },
      {
        name: "description",
        content:
          "Portfolio of Nithish S — AI/ML Engineer and Data Analyst (2026 Graduate). Generative AI, deep learning, FastAPI, and analytics that ship.",
      },
      { property: "og:title", content: "Nithish S — AI Engineer & Data Analyst" },
      {
        property: "og:description",
        content:
          "Building intelligent AI systems and data-driven solutions that solve real-world problems.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <CursorGlow />
      <ScrollProgress />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Certificates />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
