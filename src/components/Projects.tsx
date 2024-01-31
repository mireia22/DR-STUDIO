import { PROJECTS } from "../constants";
import Project from "./Project";

const Projects = () => {
  return (
    <article>
      <ul className="flex flex-wrap items-center justify-center gap-12">
        {PROJECTS.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </ul>
    </article>
  );
};

export default Projects;
