import { Link } from "react-router-dom";
import { ProjectType } from "../types/Types";

const Project = ({ project }: { project: ProjectType }) => {
  return (
    <li className="flex flex-col items-center text-center justify-center cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105">
      <Link to={`/project/${project.id}`}>
        <div className="w-[15rem] h-[15rem] flex justify-center align-center bg-[#d7d9d8] overflow-hidden">
          <img
            src={project.mainImage}
            alt={project.title}
            className="max-w-full max-h-full object-cover filter grayscale hover:filter-none transition-filter duration-00 ease-in-out"
          />
        </div>
        <p className="opacity-70 mt-4 transition-opacity duration-200 ease-in-out hover:opacity-100">
          {project.title}
        </p>
      </Link>
    </li>
  );
};

export default Project;
