import GradientButton from "./Button";
import ReactPlayer from "react-player/youtube";
import Me from "./../assets/images/profile_man.png";

const SectionTwo = () => {
  return (
    <div className="px-20 py-20">
      <div className=" flex">
        <div className="w-1/2">
          <div className="bg-white px-10 py-16 w-fit rounded-2xl flex flex-col gap-5">
            <p className="text-6xl font-bold text-orange-500">5+</p>
            <p className="text-xl font-light">Years of Experience</p>
          </div>
          <div className="bg-white px-10 py-16 w-fit rounded-2xl flex flex-col gap-5">
            <p className="text-6xl font-bold text-orange-500">20+</p>
            <p className="text-xl font-light">Projects Completed</p>
          </div>
        </div>
        <div className="w-1/2 space-y-10">
          <p className=" font-extralight leading-8 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eos,
            accusamus adipisci esse ut, molestias voluptatibus vitae tempore
            distinctio odit doloribus reprehenderit quasi perspiciatis libero
            hic dolore numquam ex ab! distinctio odit doloribus reprehenderit
            quasi perspiciatis libero hic dolore numquam ex ab!
          </p>
          <p className=" font-extralight leading-8 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eos,
            accusamus adipisci esse ut, molestias voluptatibus vitae tempore
            distinctio odit doloribus reprehenderit quasi perspiciatis libero
            hic
          </p>
          <GradientButton children="Learn More" />
        </div>
      </div>
      <div className="flex gap-20 py-20">
        <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
        <img src={Me} className="border-4 rounded-lg border-pink-500" />
      </div>
    </div>
  );
};

export default SectionTwo;
