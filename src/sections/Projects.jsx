// Project files
import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projectData.json";

export default function Projects() {
  const ProjectList = projectData.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="container">
        <div className="description">
          <p>
            Here are the projects I will be running during the Frontend course
            at Novare Potential.
          </p>
        </div>
        <div className="wrapper">{ProjectList}</div>
      </div>
    </section>
  );
}
