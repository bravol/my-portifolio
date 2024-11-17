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
  return (
    <div className="flex flex-col  justify-center gap-5 hover:ring-2 ring-pink-500 px-5 py-5 shadow-2xl rounded-2xl transition-all delay-100 ease-in-out">
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
        <p className="text-lg text-start font-bold hover:text-pink-500 uppercase cursor-pointer">
          {description}
        </p>
      </a>
    </div>
  );
};

export default Project;
