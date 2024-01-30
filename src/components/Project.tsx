import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <li className="project-card">
      <Link to={`/project/${project.id}`}>
        <div className="card-image">
          <img src={project.mainImage} alt={project.title} />
        </div>
        <p>{project.title}</p>
      </Link>
    </li>
  );
};

export default Project;
