import React from "react";
import { Typography } from "../Common/Typography";

const AboutUs = () => {
  const data = [
    {
      id: "1",
      name: "Countries Served",
      number: "10",
    },
    {
      id: "2",
      name: "Enterprises",
      number: "2,000+",
    },
    {
      id: "3",
      name: "Reported ROI",
      number: "50%",
    },
    {
      id: "4",
      name: "Lives Touched",
      number: "200,000+",
    },
  ];
  return (
    <section className="bg-gradient-5 py-10 md:py-24">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto w-full">
        <Typography
          variant="title3"
          className="text-white-to-black text-center"
        >
          About us
        </Typography>
        <Typography variant="body1" className="text-center mt-1.5 md:mt-3.5">
          LightCastle A² is a forward-thinking AI and analytics firm dedicated
          to empowering the unsung heroes of
          <br className="hidden md:block" /> the global economy: small
          businesses.
        </Typography>
        <div className="flex flex-col md:flex-row justify-between w-full mt-10 md:mt-20 gap-5">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start justify-center w-full p-6 bg-primary mb-0 md:mb-6 gap-1 hover:border-b hover:border-[#296F7F] hover-gradient-both"
            >
              <p className="font-bold text-[40px]">{item.number}</p>
              <p className="text-lg font-medium">{item.name}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center border border-white py-3.5 px-7.5 gap-2 cursor-pointer mt-10 md:mt-20 hover-bg-gradient-2 text-white hover:text-primary">
          <p className="font-bold text-sm leading-[24px]">Read more</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
