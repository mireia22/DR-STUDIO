import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <section className="mt-[130px] flex flex-col gap-6 items-center">
      <Hero />
      <Projects />
    </section>
  );
};

export default Home;
