"use client";
import Link from "next/link";
import Image from "next/image";

function HomeProjects({ projects }) {
  return (
    <>
      <div id="home_projects">
        <div className="container">
          <div className="home_projects">
            <div className="home_projects_heading">
              <h6>Selected projects</h6>
              <p>
                Explore my selected projects, showcasing my dedication to
                innovative and heartfelt design.
              </p>
            </div>
            {/*home_projects_heading*/}
            <div className="home_projects_items row row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-2">
              {projects.map((project) => (
                <div key={project.id} className="home_projects_items_box">
                  <Image
                    className="img_fluid"
                    src={project.image}
                    width={300}
                    height={300}
                    priority
                    alt={project.title}
                  />
                  <h6>
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h6>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
            {/*home_projects_items*/}
          </div>
          {/*home_projects*/}
        </div>
        {/*container*/}
      </div>
      {/*home_projects#*/}
    </>
  );
}

export default HomeProjects;
