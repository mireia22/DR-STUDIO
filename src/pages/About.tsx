import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="mt-[120px] flex flex-col gap-6 items-center px-10 py-4 justify-center sm:mt-20">
      <article className="grid auto-rows-auto gap-4 items-start justify-center text-center sm:grid-cols-2 sm:grid-rows-1 sm:gap-6 sm:items-center sm:w-[65vw]">
        <div className="justify-self-center sm:row-span-2">
          <img src="../../about.png" alt="me" />
        </div>
        <p className="sm:text-center">
          Soy Dúnia, diseñadora apasionada de espacios. En mi estudio, fusiono
          la elegancia en interiores, la armonía en exteriores y la creatividad
          efímera. Desde eventos memorables hasta instalaciones temporales, cada
          proyecto refleja mi compromiso de transformar espacios con estilo y
          significado. Descubre cómo el diseño puede dar vida a tus ambientes y
          experiencias en DRStudio.
        </p>
        <div className="flex justify-center gap-4 sm:col-start-2 sm:col-end-2  ">
          <Link
            to="/"
            className="p-2 bg-[#f3f3f2] rounded-lg bg-opacity-50 border-2  border-[#d7d9d8] font-semibold hover:border-[#f3f3f2] hover:bg-[#b8b8b8]"
          >
            Proyectos
          </Link>
          <Link
            to="/contact"
            className="p-2 bg-[#b8b8b8] rounded-lg bg-opacity-50 border-2  border-[#f3f3f2] font-semibold hover:border-[#b8b8b8] hover:bg-[#f3f3f2] "
          >
            Contacto
          </Link>
        </div>
      </article>
    </section>
  );
};

export default About;
