import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Typography } from "../Common/Typography";

const CaseStudy = () => {
  const data = [
    {
      id: "1",
      name: "Countries",
      number: "06",
    },
    {
      id: "2",
      name: "Agri entrepreneurs",
      number: "400+",
    },
    {
      id: "3",
      name: "Farmer’s footprint",
      number: "100,000+",
    },
    {
      id: "4",
      name: "Lives Touched",
      number: "54%",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto w-full py-10 md:py-24">
      <p className="uppercase">Featured Case study</p>
      <div className="flex flex-col md:flex-row justify-between my-5.5">
        <Typography
          variant="title3"
          className="text-white-to-black text-center md:text-left"
        >
          Digitalizing the
          <br className="hidden md:block" /> Agriculture Value Chain
          <br className="hidden md:block" /> for Inclusive Growth
        </Typography>
        <Link
          href={"/case-study-archieve"}
          className="flex items-center justify-center gap-2 cursor-pointer border p-4 h-fit mt-5 md:mt-0"
        >
          <p className="font-bold text-sm text-white">All archives</p>
          <ArrowRight className="text-white" height={20} width={20} />
        </Link>
      </div>
      <div className="flex flex-col bg-[url('/Image.png')] bg-cover bg-center">
        <Typography variant="body1" className="text-gradient-2">
          While agricultural enterprises hold immense potential, their ability
          to grow is often hampered by a<br className="hidden md:block" />
          complex web of interconnected challenges. First, inadequate business
          support structures limit
          <br className="hidden md:block" /> access to crucial services like
          financial planning, marketing expertise
        </Typography>
        <div className="flex items-center justify-center p-4 md:p-8 gap-2 cursor-pointer bg-secondary-foreground w-fit mt-6">
          <p className="font-bold text-sm text-primary">Read more</p>
          <ArrowRight className="text-primary" height={20} width={20} />
        </div>
        <ScrollArea className="w-full mt-20 md:mt-46">
          <div className="flex justify-between w-full gap-5 p-14">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col text-primary justify-center bg-white w-full p-4"
              >
                <p className="font-bold text-[40px]">{item.number}</p>
                <p className="text-lg font-medium">{item.name}</p>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default CaseStudy;
