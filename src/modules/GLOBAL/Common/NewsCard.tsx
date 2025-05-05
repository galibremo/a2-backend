// components/UiCard.tsx
import { NewsCardType } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import dayjs from "dayjs";
import { Separator } from "@/components/ui/separator";

interface UiCardProps {
  card: NewsCardType;
}

const NewsCard: React.FC<UiCardProps> = ({ card }) => {
  return (
    <div className="flex flex-col">
      <Image
        src={card.image}
        width={406.66}
        height={225}
        alt="image1"
        className="w-auto h-[225] object-cover"
      />
      <span className="font-semibold mt-5 uppercase text-primary-foreground">
        {dayjs(card.date).format("D MMMM, YYYY")}
      </span>
      <Separator className="my-4 bg-primary-foreground/30" />
      <p className="text-white text-[26px] font-semibold tracking-[-0.46px]">
        {card.title}
      </p>
      <span className="font-medium text-primary-foreground mt-3 opacity-60">
        {card.comments}
      </span>
      <div className="flex items-center gap-2.5 pl-0 py-3 px-6 cursor-pointer mt-6">
        <p className="font-bold text-sm text-white">Read more</p>
        <ArrowRight className="text-white" height={16} width={16} />
      </div>
    </div>
  );
};

export default NewsCard;
