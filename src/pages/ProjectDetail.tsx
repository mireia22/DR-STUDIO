import { useParams } from "react-router-dom";
import { PROJECTS } from "../constants";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = PROJECTS.find((project) => project.id === parseInt(id, 10));

  if (!project) {
    return <div>No project found for ID: {id}</div>;
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {project.images && project.images.length > 0 && (
        <div>
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={project.title + ` - Image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
