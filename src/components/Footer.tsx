import Nav from "./Nav";
import Logo from "./../assets/images/bravol_logo.png";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { Link } from "react-scroll";
import { MdEmail } from "react-icons/md";

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
        <div className="flex gap-6 text-orange-600 text-2xl mt-5 sm:mt-0">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/lumala-brian-939625197"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800 transition-colors"
          >
            <FaLinkedinIn cursor="pointer" />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/bravol"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaGithub cursor="pointer" />
          </a>
          {/* WhatsApp */}
          <a
            href="https://wa.me/256704690012"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition-colors"
          >
            <FaWhatsapp cursor="pointer" />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/@LumalaBrianbro"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaXTwitter cursor="pointer" />
          </a>
          {/* Facebook */}
          <a
            href="mailto:lumalabravo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors"
          >
            <MdEmail cursor="pointer" />
          </a>
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
