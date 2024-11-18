import { useState } from "react";

interface Props {
  image: string;
  service: string;
  description: string;
}
const Service = ({ image, service, description }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-col items-center justify-center gap-5 ${
        isHovered ? "ring-4 ring-pink-500" : ""
      } sm:px-10 px-5 sm:py-10 py-5 shadow-2xl rounded-2xl transition-all delay-100 ease-in-out`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt="service-icon"
        className="md:w-20 md:h-20 h-16 w-16 rounded-full"
      />
      <p
        className={`md:text-3xl text-2xl font-semibold transition-all duration-300 ${
          isHovered ? "text-pink-500" : ""
        }`}
      >
        {service}
      </p>
      <p className="md:text-lg text-base font-extralight">{description}</p>
    </div>
  );
};

export default Service;
