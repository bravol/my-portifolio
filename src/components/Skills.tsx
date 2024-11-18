interface Skill {
  id: number;
  skill: string;
  image: string;
}

interface Props {
  skills: Skill[];
}

const Skills = ({ skills }: Props) => {
  return (
    <div className="md:px-10 px-5">
      <p className="capitalize text-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold md:my-10 my-5">
        My Skills
      </p>
      <div className="flex text-nowrap flex-wrap gap-6 p-4 mb-10">
        {skills.map((skill) => (
          <div key={skill.id} className="relative">
            {/* Skill Icon */}
            <img
              src={"icons/" + skill.image}
              alt={skill.skill}
              className="md:w-14 md:h-14 h-8 w-8 rounded-full cursor-pointer ring-2 ring-pink-500 bg-orange-200"
            />

            {/* Tooltip */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-5 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-xs rounded-md py-1 px-4 transition-all duration-300">
              {skill.skill}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
