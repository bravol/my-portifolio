import ReactPlayer from "react-player/youtube";
import Me from "./../assets/images/profile_man.png";
import { Link } from "react-scroll";

const SectionTwo = () => {
  return (
    <div className="lg:px-20 md:px-10 px-5 lg:py-20 py-10 bg-gray-200">
      <div className=" sm:flex">
        <div className="sm:w-1/2 flex flex-grow gap-5 sm:gap-0 items-center justify-center sm:grid">
          <div className="bg-white sm:px-10 px-5 sm:py-16 py-8 w-fit rounded-2xl flex flex-col gap-5 shadow-lg">
            <p className="sm:text-6xl text-4xl font-bold text-orange-500">5+</p>
            <p className="sm:text-xl text-lg font-light text-nowrap">
              Years of Experience
            </p>
          </div>
          <div className="bg-white sm:px-10 px-5 sm:py-16 py-8 w-fit rounded-2xl flex flex-col gap-5 shadow-lg">
            <p className="sm:text-6xl text-4xl font-bold text-orange-500">
              20+
            </p>
            <p className="sm:text-xl text-lg font-light text-nowrap">
              Projects Completed
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 md:space-y-10 space-y-5 lg:text-lg md:text-base text-sm mt-5 sm:mt-0">
          <p className=" font-extralight leading-8 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eos,
            accusamus adipisci esse ut, molestias voluptatibus vitae tempore
            distinctio odit doloribus reprehenderit quasi perspiciatis libero
            hic dolore numquam ex ab! distinctio odit doloribus reprehenderit
            quasi perspiciatis libero hic dolore numquam ex ab!
          </p>
          <p className=" font-extralight leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eos,
            accusamus adipisci esse ut, molestias voluptatibus vitae tempore
            distinctio odit doloribus reprehenderit quasi perspiciatis libero
            hic
          </p>
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
        </div>
      </div>
      <div className="md:flex lg:gap-20 gap-10 lg:py-20 py-10">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          // height="100%"

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
