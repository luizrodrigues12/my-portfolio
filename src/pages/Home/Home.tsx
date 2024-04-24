import Navbar from "../../components/Navbar/Navbar";
import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default Home;
