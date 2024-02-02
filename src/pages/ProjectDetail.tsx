import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PROJECTS } from "../constants";
import Carousel from "../components/Carousel";
import { ProjectType } from "../types/Types";
import InputPDF from "../components/InputPDF";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<ProjectType | null>(null);

  useEffect(() => {
    if (id) {
      const fetchedProject = PROJECTS.find((proj) => proj.id === id);
      console.log("Fetched Project:", fetchedProject);

      if (fetchedProject) {
        setProject(fetchedProject);
      } else {
        console.error(`No project found for ID: ${id}`);
        setProject(null);
      }
    }
  }, [id]);

  return (
    <section className="mt-[125px] flex flex-col gap-10 items-center text-center px-10 py-4 justify-center sm:w-[65vw]">
      <article className="flex flex-col gap-4 items-center justify-center w-[80vw]">
        <h2 className="text-3xl">{project?.title.toUpperCase()}</h2>
        <div className="w-full sm:w-[40rem]">
          <img
            src={project?.mainImage}
            alt={project?.title}
            className="w-full "
            loading="lazy"
          />
        </div>
        <p className="text-sm leading-8 text-center sm:w-[40rem]">
          {project?.description}
        </p>
      </article>
      <article>
        <InputPDF routePDF={project?.pdf} />
      </article>
      <article className="flex flex-col items-center">
        {project?.tecnicImages && project.tecnicImages.length > 0 && (
          <>
            <h3 className="font-semibold text-2xl">Planos:</h3>
            <Carousel images={project.tecnicImages} />
          </>
        )}
      </article>
      <article className="flex flex-col items-center">
        {project?.virtualImages && project.virtualImages.length > 0 && (
          <>
            <h3 className="font-semibold text-2xl">Imagenes Virtuales:</h3>
            <Carousel images={project.virtualImages} />
          </>
        )}
      </article>
      <article className="flex flex-col items-center">
        {project?.realImages && project.realImages.length > 0 && (
          <>
            <h3 className="font-semibold text-2xl">Imagenes Reales:</h3>
            <Carousel images={project.realImages} />
          </>
        )}
      </article>
    </section>
  );
};

export default ProjectDetail;
