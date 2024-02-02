interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <ul className="flex flex-wrap gap-4 justify-center w-[80vw] sm:w-[66vw]">
      {images.map((image, index) => (
        <li key={index} className="w-full sm:w-[13rem] sm:h-[15rem]">
          <img
            src={image}
            alt={` - Image ${index + 1}`}
            className="h-full w-full object-cover"
          />
        </li>
      ))}
    </ul>
  );
};

export default Carousel;
