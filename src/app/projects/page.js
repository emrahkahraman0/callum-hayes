import İnfo from "@/templates/İnfo";
import projects from "@/templates/Projects";
import HomeProjects from "@/templates/HomeProjects";

function Projects() {
  return (
    <>
      <div>Projects</div>
      <HomeProjects projects={projects} />
      <İnfo />
    </>
  );
}

export default Projects;
