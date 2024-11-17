import Nav from "./Nav";
import Logo from "./../assets/images/bravol_logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gray-900">
      <div className="sm:flex items-center justify-between  lg:px-20 md:px-10 px-5 py-5">
        <div className="flex items-center sm:gap-5 gap-2">
          <Link
            to="home"
            className=" cursor-pointer hover:text-orange-500"
            spy={true}
            smooth={true}
            offset={50}
            duration={800}
          >
            <img
              src={Logo}
              className=" sm:w-10 w-5 cursor-pointer"
              alt="Kumpi logo"
            />
          </Link>

          <Nav color="text-white" />
        </div>
        <div className=" flex gap-10 text-orange-600 text-xl mt-5 sm:mt-0">
          <FaXTwitter cursor="pointer" />
          <FaFacebookF cursor="pointer" />
          <FaLinkedinIn cursor="pointer" />
          <FaGithub cursor="pointer" />
        </div>
      </div>
      <hr />
      <div className=" bg-gray-900">
        <p className=" text-gray-200 text-sm sm:px-20 px-5 py-5">
          &copy; {currentYear} Brian Bravol. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
