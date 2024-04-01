import AboutMe from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <SectionDivider />
      <AboutMe />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Contact />
      <Footer />
    </main>
  );
}
