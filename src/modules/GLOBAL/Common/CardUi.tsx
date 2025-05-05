// components/UiCard.tsx
import { CardData } from "@/lib/types";
import { Heart, Send } from "lucide-react";
import Image from "next/image";
import React from "react";

interface UiCardProps {
  card: CardData;
}

const CardUi: React.FC<UiCardProps> = ({ card }) => {
  return (
    <div className="flex flex-col">
      <Image
        src={card.image}
        width={406.66}
        height={225}
        alt="image1"
        className="w-auto h-[225] object-cover"
      />
      <p className="text-white text-xl font-semibold mt-4">{card.title}</p>
      <span className="font-medium text-primary-foreground mt-1">
        Ui Design
      </span>
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-6">
          <div className="flex gap-2">
            <Heart />
            <span className="font-medium">{card.views}</span>
          </div>
          <div className="flex gap-2">
            <Send />
            <span className="font-mediumF">{card.comments}</span>
          </div>
        </div>
        <div className="border py-3 px-6 cursor-pointer">
          <p className="font-bold text-sm text-white">Read more</p>
        </div>
      </div>
    </div>
  );
};

export default CardUi;
