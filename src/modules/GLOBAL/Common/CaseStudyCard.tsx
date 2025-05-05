import { CaseStudyCardType } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Typography } from "./Typography";

const CaseStudyCard = ({ item }: { item: CaseStudyCardType }) => {
  return (
    <div className="flex justify-between items-center gap-6 md:gap-0">
      <Image
        src={item.image}
        width={300}
        height={120}
        alt="case-study"
        className="h-[120px] w-[300px] object-cover"
      />
      <div className="flex flex-col">
        <Typography variant="title8">{item.title}</Typography>
        <Typography variant="body2" className="text-primary-foreground mt-1 max-w-[324px]">
          {item.description}
        </Typography>
      </div>
      <div className="items-center justify-center gap-2 cursor-pointer p-4 h-fit hidden md:flex">
        <p className="font-bold text-white">Read more</p>
        <ArrowRight className="text-white" height={20} width={20} />
      </div>
    </div>
  );
};

export default CaseStudyCard;
