import AboutMe from "../components/About-Me/AboutMe";
import ClientReviews from "../components/Client-Review/ClientReviews";
import Footer from "../components/Footer/Footer";
import GetInTouch from "../components/Get-In-Touch/GetInTouch";
import Hero from "../components/Hero/Hero";
import ProjectsShowcase from "../components/My-Projects/ProjectsShowcase";
import SkillsComponent from "../components/My-Skills/SkillsComponent";
import Navbar from "../components/Nevbar/Navbar";
import WorkExperienceCard from "../components/Work-experience/WorkExperienceCard";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <SkillsComponent />
      <WorkExperienceCard />
      <ProjectsShowcase />
      <ClientReviews />
      <GetInTouch />
      <Footer />
    </div>
  );
}
