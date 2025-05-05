import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import CaseStudyCard from "../Common/CaseStudyCard";
import { Separator } from "@/components/ui/separator";
import { Typography } from "../Common/Typography";

const CaseStudyItems = () => {
  const data = [
    {
      id: 2,
      title: "Case Study 1",
      description:
        "Our beauty experts take the time to your preferences, style, and vision.",
      image: "/casestudy1.jpg",
      link: "/case-study/adapting-and-thriving-in-a-changing-world",
    },
    {
      id: 2,
      title: "Case Study 2",
      description:
        "Our beauty experts take the time to your preferences, style, and vision.",
      image: "/casestudy2.jpg",
      link: "/case-study/adapting-and-thriving-in-a-changing-world",
    },
    {
      id: 3,
      title: "Case Study 3",
      description:
        "Our beauty experts take the time to your preferences, style, and vision.",
      image: "/casestudy3.jpg",
      link: "/case-study/adapting-and-thriving-in-a-changing-world",
    },
    {
      id: 4,
      title: "Case Study 4",
      description:
        "Our beauty experts take the time to your preferences, style, and vision.",
      image: "/casestudy4.jpg",
      link: "/case-study/adapting-and-thriving-in-a-changing-world",
    },
  ];
  return (
    <section className="max-w-[1040px] mx-auto w-full py-24">
      <div className="flex flex-col items-center relative">
        <Image
          src={"/case-study.jpg"}
          alt="case study"
          width={1040}
          height={428}
          className="h-[428px] object-cover object-center"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0614]/0 to-[#0B0614]"></div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end absolute bottom-0 w-full px-11 py-9.5 z-10">
          <div className="flex flex-col gap-2.5">
            <span className="font-normal text-sm text-primary bg-secondary-foreground w-fit px-1.5 py-0.5">
              Featured
            </span>
            <Typography variant="title5">
              Adapting and Thriving in a<br /> Changing World
            </Typography>
            <Typography variant="body2">
              Our beauty experts take the time to your preferences, style, and
              vision.
            </Typography>
          </div>
          <div className="flex items-center justify-center gap-2 cursor-pointer px-0 md:px-4 py-4 h-fit">
            <p className="font-bold text-[14px] md:text-[16px]">Read more</p>
            <ArrowRight className="text-white" height={20} width={20} />
          </div>
        </div>
      </div>
      {data.map((item, index) => (
        <div key={index} className="mt-10">
          <CaseStudyCard key={index} item={item} />
          <Separator className="my-10" />
        </div>
      ))}
    </section>
  );
};

export default CaseStudyItems;
