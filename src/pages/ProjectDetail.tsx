import { useParams } from "react-router-dom";
import { PROJECTS } from "../constants";
import Carousel from "../components/Carousel";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = PROJECTS.find((proj) => proj.id === id);

  if (!project) {
    return <div>No project found for ID: {id}</div>;
  }

  return (
    <section className="mt-[125px] flex flex-col gap-6 items-center px-10 py-4 justify-center">
      <article className="flex flex-col gap-4 items-center justify-center w-[80vw]">
        <h2 className=" text-3xl">{project.title.toUpperCase()}</h2>
        <div className="w-full sm:w-[40rem]">
          <img src={project.mainImage} alt={project.title} className="w-full" />
        </div>
        <p className="text-sm leading-8 text-center sm:w-[40rem]">
          {project.description}
        </p>
      </article>

      {project.images && project.images.length > 0 && (
        <Carousel project={project} />
      )}
    </section>
  );
};

export default ProjectDetail;
