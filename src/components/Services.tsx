import Service from "./Service";
import Web from "./../assets/images/web.png";
import App from "./../assets/images/app.jpeg";
import Back from "./../assets/images/back.jpeg";
import Full from "./../assets/images/full.png";

const Services = () => {
  return (
    <div className=" py-20 lg:px-40 md:px-10  sm:px-10 px-5 bg-white ">
      <div className="flex flex-col items-center justify-center">
        <p className=" uppercase border px-10 py-1.5 text-pink-500 rounded-full font-bold">
          services
        </p>
        <p className=" font-medium lg:text-5xl md:text-4xl sm:text-3xl text-2xl my-10">
          My Quality Services
        </p>
      </div>
      <div>
        <div className="md:py-10 py-5  md:gap-10 gap-5 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          <Service
            image={Web}
            service="Web Development"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.  provident, laudantium iusto deleniti numquam cupiditate neque voluptas saepe unde praesentium dolores enim! Tenetur velit corrupti nobis labore?
 "
          />
          <Service
            image={App}
            service="App Development"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.  provident, laudantium iusto deleniti numquam cupiditate neque voluptas saepe unde praesentium dolores enim! Tenetur velit corrupti nobis labore?
 "
          />
          <Service
            image={Back}
            service="Backend Development"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.  provident, laudantium iusto deleniti numquam cupiditate neque voluptas saepe unde praesentium dolores enim! Tenetur velit corrupti nobis labore?
 "
          />
          <Service
            image={Full}
            service="FullStack Development"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.  provident, laudantium iusto deleniti numquam cupiditate neque voluptas saepe unde praesentium dolores enim! Tenetur velit corrupti nobis labore?
 "
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
