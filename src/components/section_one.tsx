import GradientButton from "./Button";
import Me from "./../assets/images/profile_man.png";
import { ReactTyped } from "react-typed";

const SectionOne = () => {
  return (
    <div className="lg:px-20 md:px-10 px-5 py-10 sm:flex justify-between h-fit">
      <div className="md:space-y-10 space-y-5 sm:w-1/2">
        <h1 className="lg:text-6xl md:text-5xl text-4xl font-extrabold">
          <p className="inline ">
            Hey 👋 I'm <span className=" text-pink-500">Brian</span>{" "}
          </p>
          <span className="block text-pink-500 lg:my-10 my-5">Bravol</span>
        </h1>
        <div className="md:py-3 py-2 px-6 border-4 w-fit border-orange-600 md:text-3xl text-xl font-medium text-nowrap">
          <ReactTyped
            strings={[
              "Web App Developer",
              "Mobile App Developer",
              "Backend Developer",
              "Full Stack Developer",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>

        <p className=" font-extralight leading-8 lg:text-lg text-base">
          I am a passionate software developer specializing in building dynamic
          and scalable web and mobile applications. With expertise in both
          frontend and backend development, I deliver innovative solutions
          tailored to meet user needs. Let’s build something extraordinary
          together!
        </p>
        <div>
          <a
            href="https://github.com/bravol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GradientButton children="My Github Account" />
          </a>
        </div>
      </div>

      {/* Vertical Line */}
      <div className="border-l-2 border-gray-300 h-full mx-5"></div>

      <div className="flex items-center justify-center">
        <img
          src={Me}
          className="lg:h-[460px] md:h-[400px] ring-8 ring-white rounded-lg"
        />
      </div>
    </div>
  );
};

export default SectionOne;
