import Image from "next/image";
import projects from "@/templates/Projects";
import { notFound } from "next/navigation";

function ProjectsDetails({ params }) {
  const { slug } = params;

  const project = projects.find((proj) => proj.slug === slug);

  if (!project) {
    return notFound(); // 404 sayfası
  }
  return (
    <>
      <div id="projects_details">
        <div className="container">
          <div className="projects_details">
            <h6 className="text-lg font-semibold">{project.title}</h6>
            <p>{project.description}</p>
            <Image
              className="img_fluid"
              src={project.image_large} // örn: "/projects/project1.jpg"
              width={800}
              height={563}
              priority
              alt={project.title}
            />
          </div>
          {/*projects_details*/}
        </div>
        {/*container*/}
      </div>
      {/*projects_details#*/}
    </>
  );
}

export default ProjectsDetails;
