import GradientButton from "./Button";
import Me from "./../assets/images/profile_man.png";

const SectionOne = () => {
  return (
    <div className="px-20 py-10 flex justify-between h-[500px]">
      <div className="space-y-10 w-1/2">
        <h1 className="text-6xl font-extrabold">
          <p className="inline">Hey 👋 I'm</p>
          <span className="block text-pink-500 my-10">Brian</span>
        </h1>

        <div className="py-3 px-6 border-4 w-fit border-orange-600">
          <p className="text-3xl font-medium">Full Stack Developer</p>
        </div>
        <p className=" font-extralight leading-8 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eos,
          accusamus adipisci esse ut, molestias voluptatibus vitae tempore
          distinctio odit doloribus reprehenderit quasi perspiciatis libero hic
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

      <div>
        <img
          src={Me}
          className="h-[460px] border-4 border-pink-500 rounded-lg"
        />
      </div>
    </div>
  );
};

export default SectionOne;
