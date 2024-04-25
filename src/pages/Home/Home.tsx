import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "20px",
        backgroundColor: "#232323",
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
