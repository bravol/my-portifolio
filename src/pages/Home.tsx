import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Portfolio from "../components/Portifolio";
import SectionOne from "../components/section_one";
import SectionTwo from "../components/SectionTwo";
import Services from "../components/Services";
import Skills from "../components/Skills";
const Home = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <Services />
      <Portfolio />
      <Skills skills={skills} />
      <Footer />
    </>
  );
};

export default Home;
