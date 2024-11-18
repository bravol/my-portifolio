import LimboPay from "./../assets/images/limbopay.png";
import LyxaEvents from "./../assets/images/lyxaevents.png";
import Yassako from "./../assets/images/yassako.png";
import Project from "./Project";

const Portfolio = () => {
  return (
    <div className=" py-10  md:px-20  sm:px-10 px-5 bg-gray-200 ">
      <div className="flex flex-col items-center justify-center">
        <p className=" uppercase border border-black px-10 py-1.5 text-pink-500 rounded-full font-bold">
          Portfolio
        </p>
        <p className=" font-medium lg:text-5xl md:text-4xl sm:text-3xl text-2xl md:my-10 my-5 ">
          My Recent Work
        </p>
      </div>
      <div className="md:py-10 py-5  md:gap-10 gap-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <Project
          image={LimboPay}
          web="Web App"
          webLink="https://limbopay.com"
          android="Android"
          androidLink="https://play.google.com/store/apps/details?id=com.qriscorp.limbo_pay"
          ios="iOS"
          iosLink="https://apps.apple.com/us/app/limbopay-app/id6444191728"
          description="Limbo Pay Transaction Management System"
        />
        <Project
          image={Yassako}
          web="Web App"
          webLink="https://yassako.net"
          android="Android"
          androidLink="https://yassako.net"
          ios="iOS"
          iosLink="https://yassako.net"
          description="Yassako Yaka Loan and Purchase System"
        />
        <Project
          image={LyxaEvents}
          web="Web App"
          webLink="https://lyxaevents.com"
          description="Lyxa Events Ticket Management System"
        />
      </div>
    </div>
  );
};

export default Portfolio;
