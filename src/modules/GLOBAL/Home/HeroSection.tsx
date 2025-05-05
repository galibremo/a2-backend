import React from "react";
import { ArrowRight } from "lucide-react";
import { Typography } from "../Common/Typography";

const HeroSection = () => {
  return (
    <section className="bg-gradient-1 h-[100vh] md:h-[123vh] flex items-center justify-center">
      <div className="flex flex-col z-2">
        <p className="text-center font-normal text-xl xs:text-2xl sm:text-3xl md:text-4xl text-primary-foreground -tracking-wider leading-auto md:leading-[52px] ">
          Empowering small businesses
          <br />
          with the power of
        </p>
        <Typography
          variant="title1"
          className="text-white-to-black uppercase text-center"
        >
          AI & Analytics
        </Typography>
        <div className="flex items-center justify-center mt-4 md:mt-8">
          <div className="flex items-center justify-center bg-gradient-2 py-2.5 px-4.5 md:py-3.5 md:px-7.5 gap-2.5 cursor-pointer border">
            <p className="font-bold text-primary text-[12px] md:text-[16px]">
              Explore Products
            </p>
            <ArrowRight className="text-black" size={17} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
