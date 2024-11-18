import ReactPlayer from "react-player/youtube";
import Me from "./../assets/images/profile_man.png";
import { Link } from "react-scroll";

const SectionTwo = () => {
  return (
    <div className="lg:px-20 md:px-10 px-5 lg:py-20 py-10 bg-gray-200">
      <div className=" sm:flex">
        <div className="sm:w-1/2 flex flex-col sm:flex-row gap-5 sm:gap-0 items-center justify-center sm:grid">
          <div className="bg-white sm:px-10 px-5 sm:py-16 py-8 w-full sm:w-fit rounded-2xl flex flex-col gap-5 shadow-lg">
            <p className="sm:text-6xl text-4xl font-bold text-orange-500">5+</p>
            <p className="sm:text-xl text-lg font-light text-nowrap">
              Years of Experience
            </p>
          </div>
          <div className="bg-white sm:px-10 px-5 sm:py-16 py-8 w-full sm:w-fit rounded-2xl flex flex-col gap-5 shadow-lg">
            <p className="sm:text-6xl text-4xl font-bold text-orange-500">
              20+
            </p>
            <p className="sm:text-xl text-lg font-light text-nowrap">
              Projects Completed
            </p>
          </div>
        </div>

        <div className="sm:w-1/2 md:space-y-10 space-y-5 lg:text-lg md:text-base text-sm mt-5 sm:mt-0">
          <p className="font-extralight leading-8">
            I have over five years of hands-on experience crafting innovative
            solutions in web and mobile app development. My focus is on
            delivering high-quality, user-centric applications that solve
            real-world problems and create value.
          </p>
          <p className="font-extralight leading-8">
            From concept to deployment, I have successfully completed numerous
            projects, showcasing a blend of technical expertise and a commitment
            to excellence. Let’s explore how my skills can contribute to your
            vision.
          </p>
          <div className="flex gap-3">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={50}
              duration={800}
            >
              <button
                className={`md:text-base sm:text-sm text-xs md:px-6 px-3 py-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-white font-medium hover:opacity-85 mt-5`}
              >
                Learn More
              </button>
            </Link>
            <a
              href="/Lumala_Brian_CV.pdf"
              target="_blank"
              download="Lumala_Brian_CV"
              rel="noopener noreferrer"
            >
              <button
                className={`md:text-base sm:text-sm text-xs md:px-6 px-3 py-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-white font-medium hover:opacity-85 mt-5`}
              >
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="md:flex lg:gap-20 gap-10 lg:py-20 py-10">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=wXc2tao51D4"
          width="100%"
          controls
        />

        <img
          src={Me}
          className="ring-8 rounded-lg ring-pink-500 hidden md:block"
        />
      </div>
    </div>
  );
};

export default SectionTwo;
