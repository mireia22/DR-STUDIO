const Carousel = ({ project }) => {
  return (
    <ul className="flex flex-wrap gap-4 justify-center w-[80vw]">
      {project.images.map((image, index) => (
        <li key={index} className="w-full sm:w-[39vw]">
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
