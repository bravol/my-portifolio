import Footer from "../components/Footer";
import Header from "../components/Header";
import Portfolio from "../components/Portifolio";
import SectionOne from "../components/section_one";
import SectionTwo from "../components/SectionTwo";
import Services from "../components/Services";
import Skills from "../components/Skills";
import { Element } from "react-scroll";
import { Skill } from "../types";

interface Props {
  skills: Skill[];
}
const Home = ({ skills }: Props) => {
  return (
    <div className=" font-roboto overflow-hidden">
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
      <a
        href="mailto:lumalabravo@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="fixed bottom-2 text-xs right-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium py-2 px-3 rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300 hover:opacity-85 sm:hidden">
          Let's Talk
        </button>
      </a>
    </div>
  );
};

export default Home;
