import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="mt-[120px] flex flex-wrap text-center gap-6 items-center justify-center ">
      <article className="w-[16rem] h-[20rem]">
        <img
          src="/logo-black.png"
          alt="Logo"
          className="max-w-full max-h-full"
        />
      </article>
      <article>
        <h1 className="text-2xl font-bold mb-4">Contacto:</h1>
        <div className="flex items-center">
          <MdEmail />
          <a
            href="mailto:duniarofe@gmail.com"
            className="text-blue-500 ml-1 underline"
          >
            duniarofe@gmail.com
          </a>
        </div>
        <div className="flex items-center">
          <RiInstagramFill />
          <a
            href="https://www.instagram.com/duniarodon/"
            className="text-blue-500 ml-1 underline"
          >
            @duniarodon
          </a>
        </div>
      </article>
    </section>
  );
};

export default Contact;
