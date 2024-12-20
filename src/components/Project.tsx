import { useState } from "react";

interface Props {
  image: string;
  web: string;
  webLink: string;
  android?: string;
  androidLink?: string;
  ios?: string;
  iosLink?: string;
  description: string;
}

const Project = ({
  image,
  web,
  webLink,
  android,
  androidLink,
  ios,
  iosLink,
  description,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-col justify-center gap-5 px-5 py-5 shadow-2xl rounded-2xl transition-all delay-100 ease-in-out bg-white ${
        isHovered ? "ring-4 ring-pink-500" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt={`Preview of ${description}`}
        className="w-full rounded-md"
      />
      <div className="flex items-center gap-2">
        {/* Web Button */}
        <a
          href={webLink}
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase border border-black px-3 py-0.5 text-pink-500 rounded-full font-bold text-xs text-nowrap"
        >
          {web}
        </a>

        {/* Android Button (Optional) */}
        {android && androidLink && (
          <a
            href={androidLink}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase border border-black px-3 py-0.5 text-green-500 rounded-full font-bold text-xs text-nowrap"
          >
            {android}
          </a>
        )}

        {/* iOS Button (Optional) */}
        {ios && iosLink && (
          <a
            href={iosLink}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase border border-black px-3 py-0.5 text-blue-500 rounded-full font-bold text-xs text-nowrap"
          >
            {ios}
          </a>
        )}
      </div>
      <a href={webLink} target="_blank" rel="noopener noreferrer">
        <p
          className={`text-lg md:text-xl lg:text-2xl text-start font-bold uppercase cursor-pointer py-5 transition-all duration-300 ${
            isHovered ? "text-pink-500" : "text-gray-700"
          }`}
        >
          {description}
        </p>
      </a>
    </div>
  );
};

export default Project;
