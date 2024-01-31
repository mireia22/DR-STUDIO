import { ProjectType } from "../types/Types";

const Carousel = ({ project }: { project: ProjectType }) => {
  return (
    <ul className="flex flex-wrap gap-4 justify-center w-[80vw] sm:w-[66vw]">
      {project.images.map((image, index) => (
        <li key={index} className="w-full sm:w-[13rem] sm:h-[15rem]">
          <img
            src={image}
            alt={project.title + ` - Image ${index + 1}`}
            className="h-full w-full object-cover"
          />
        </li>
      ))}
    </ul>
  );
};

export default Carousel;
