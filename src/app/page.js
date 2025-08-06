import İnfo from "@/templates/İnfo";
import Feedback from "@/templates/Feedback";
import Graduation from "@/templates/Graduation";
import Hero from "@/templates/Hero";
import projects from "@/templates/Projects";
import HomeProjects from "@/templates/HomeProjects";

function Home() {
  const homeProjects = projects.slice(0, 2); // Sadece ilk 2 projeyi göster
  return (
    <>
      <Hero />
      <HomeProjects projects={homeProjects} />
      <Graduation />
      <Feedback />
      <İnfo />
    </>
  );
}

export default Home;
