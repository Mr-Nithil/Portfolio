import About from "../components/About";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LeadershipVolunteering from "../components/LeadershipVolunteering";
import Publications from "../components/Publications";
import ProjectsSection from "../components/ProjectsSection";
import ScrollProgress from "../components/ScrollProgress";
import Skills from "../components/Skills";

function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectsSection />
        <Experience />
        <Education />
        <Publications />
        <Certifications />
        <LeadershipVolunteering />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
