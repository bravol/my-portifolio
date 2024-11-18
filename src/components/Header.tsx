import Logo from "./../assets/images/bravol_logo.png";
import { Link } from "react-scroll";
import Nav from "./Nav";
import GradientButton from "./Button";
const Header = () => {
  return (
    <div className="flex items-center justify-between md:px-10 px-5 sm:py-5 py-3 bg-white  shadow-lg sm:mx-10 sm:my-5 sm:rounded-xl">
      <Link
        to="home"
        className="cursor-pointer hover:text-orange-500"
        spy={true}
        smooth={true}
        offset={50}
        duration={800}
      >
        <img
          src={Logo}
          className=" sm:w-10 w-6 cursor-pointer"
          alt="Kumpi logo"
        />
      </Link>

      <Nav color="" />
      <a
        href="mailto:lumalabravo@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GradientButton children="Let's Talk" className="text-nowrap" />
      </a>
    </div>
  );
};

export default Header;
