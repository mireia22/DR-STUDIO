import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="mt-[120px] flex flex-col gap-6 items-center px-10 py-4 justify-center sm:mt-0">
      <h1 className="text-2xl font-bold mb-4">Vias de Contacto:</h1>
      <article className="flex items-center">
        <MdEmail />
        <a
          href="mailto:duniarofe@gmail.com"
          className="text-blue-500 ml-1 underline"
        >
          duniarofe@gmail.com
        </a>
      </article>
      <article className="flex items-center">
        <RiInstagramFill />
        <a
          href="https://www.instagram.com/duniarodon/"
          className="text-blue-500 ml-1 underline"
        >
          @duniarodon
        </a>
      </article>
    </section>
  );
};

export default Contact;
