import GradientButton from "./Button";
import Me from "./../assets/images/profile_man.png";

const SectionOne = () => {
  return (
    <div className="px-20 py-10 flex justify-between bg-gray-100 h-[500px]">
      <div className=" space-y-10 ">
        <h1 className=" text-6xl font-extrabold">
          <p className="inline">Hey 👋 I'm</p>
          <span className="block bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text my-10">
            Brian
          </span>
        </h1>
        <div className=" py-3 px-6 border-4 w-fit border-orange-600">
          <p className=" text-3xl font-medium">Full Stack Developer</p>
        </div>
        <div>
          <a
            href="https://github.com/brianbravol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GradientButton children="My Github Account" />
          </a>
        </div>
      </div>
      <div>
        <img src={Me} className=" h-[460px] " />
      </div>
    </div>
  );
};

export default SectionOne;
