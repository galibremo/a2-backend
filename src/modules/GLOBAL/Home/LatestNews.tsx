import React from "react";
import CardUi from "../Common/CardUi";
import { CardData } from "@/lib/types";
import { Typography } from "../Common/Typography";

const LatestNews = () => {
  const cardData: CardData[] = [
    {
      id: 1,
      title: "Beyond Aesthetics: Crafting Intuitive UI for Real Users",
      category: "UI Design",
      views: "2.2k",
      comments: "60",
      image: "/Image (1).png",
    },
    {
      id: 2,
      title: "Beyond Aesthetics: Crafting Intuitive UI for Real Users",
      category: "UI Design",
      views: "2.2k",
      comments: "60",
      image: "/Image (2).png",
    },
    {
      id: 3,
      title: "Beyond Aesthetics: Crafting Intuitive UI for Real Users",
      category: "UI Design",
      views: "2.2k",
      comments: "60",
      image: "/Image (3).png",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto w-full py-24">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto w-full">
        <Typography variant="title3" className="text-white-to-black">
          Latest news
        </Typography>
        <Typography variant="body1" className="text-center mt-3.5">
          LightCastle A² is a forward-thinking AI and analytics firm dedicated
          to empowering the unsung heroes of
          <br className="hidden md:block" /> the global economy: small
          businesses.
        </Typography>
        <div className="flex gap-8 mt-15 flex-col md:flex-row">
          {cardData.map((card) => (
            <CardUi key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
