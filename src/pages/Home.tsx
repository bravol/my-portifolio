import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Portfolio from "../components/Portifolio";
import SectionOne from "../components/section_one";
import SectionTwo from "../components/SectionTwo";
import Services from "../components/Services";
import Skills from "../components/Skills";
import { Element } from "react-scroll";

const Home = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <div className=" font-roboto">
      <Header />
      <Element name="home">
        <SectionOne />
      </Element>
      <SectionTwo />
      <Element name="services">
        <Services />
      </Element>
      <Element name="projects">
        <Portfolio />
      </Element>
      <Element name="skills">
        <Skills skills={skills} />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </div>
  );
};

export default Home;
