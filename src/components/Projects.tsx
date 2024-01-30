import { PROJECTS } from "../constants";
import Project from "./Project";

const Projects = () => {
  return (
    <ul className="projects-container">
      {PROJECTS.map((project) => (
        <Project project={project} key={project.title} />
      ))}
    </ul>
  );
};

export default Projects;
