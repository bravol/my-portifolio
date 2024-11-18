interface Props {
  image: string;
  service: string;
  description: string;
}
const Service = ({ image, service, description }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 hover:ring-2 ring-pink-500 px-10 py-10 shadow-2xl rounded-2xl transition-all delay-100 ease-in-out">
      <img
        src={image}
        alt="service-icon"
        className="md:w-20 md:h-20 h-16 w-16 rounded-full"
      />
      <p className="md:text-3xl text-2xl font-semibold">{service}</p>
      <p className="md:text-lg text-base font-extralight">{description}</p>
    </div>
  );
};

export default Service;
