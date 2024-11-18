import { Link } from "react-scroll";

interface Props {
  color: string;
}
const Nav = ({ color }: Props) => {
  return (
    <div
      className={`flex items-center  lg:gap-10 sm:gap-5 gap-3 uppercase  font-semibold text-nowrap ${color} sm:text-base text-xs `}
    >
      <Link
        to="home"
        className=" cursor-pointer hover:text-pink-500"
        spy={true}
        smooth={true}
        offset={50}
        duration={800}
      >
        Home
      </Link>
      <Link
        to="services"
        className=" cursor-pointer hover:text-pink-500"
        spy={true}
        smooth={true}
        offset={50}
        duration={800}
      >
        Services
      </Link>
      <Link
        to="projects"
        className=" cursor-pointer hover:text-pink-500"
        spy={true}
        smooth={true}
        offset={50}
        duration={800}
      >
        Projects
      </Link>
      <Link
        to="skills"
        className=" cursor-pointer hover:text-pink-500"
        spy={true}
        smooth={true}
        offset={50}
        duration={800}
      >
        Skills
      </Link>
      <Link
        to="footer"
        className=" cursor-pointer hover:text-pink-500 hidden sm:block"
        spy={true}
        smooth={true}
        offset={50}
        duration={800}
      >
        Contact Me
      </Link>
    </div>
  );
};

export default Nav;
