import { Link } from "react-scroll";

interface Props {
  color: string;
}
const Nav = ({ color }: Props) => {
  return (
    <div
      className={`flex items-center  md:gap-10 sm:gap-5 gap-3  font-semibold text-nowrap ${color} sm:text-base text-xs `}
    >
      <Link
        to="home"
        className=" cursor-pointer hover:text-orange-500"
        spy={true}
        smooth={true}
        offset={50}
        duration={800}
      >
        Home
      </Link>
      <Link
        to="about"
        className=" cursor-pointer hover:text-orange-500"
        spy={true}
        smooth={true}
        offset={50}
        duration={800}
      >
        Services
      </Link>
      <Link
        to="features"
        className=" cursor-pointer hover:text-orange-500"
        spy={true}
        smooth={true}
        offset={50}
        duration={800}
      >
        Projects
      </Link>
      <Link
        to="features"
        className=" cursor-pointer hover:text-orange-500"
        spy={true}
        smooth={true}
        offset={50}
        duration={800}
      >
        Skills
      </Link>
      <Link
        to="footer"
        className=" cursor-pointer hover:text-orange-500"
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
