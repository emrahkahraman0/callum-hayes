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
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p>{project.description}</p>
      <Image
        className="img_fluid"
        src={project.image} // örn: "/projects/project1.jpg"
        width={300}
        height={300}
        priority
        alt={project.title}
      />
    </>
  );
}

export default ProjectsDetails;
