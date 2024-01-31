import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex items-center justify-center min-h-[calc(100vh-48px)] ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
