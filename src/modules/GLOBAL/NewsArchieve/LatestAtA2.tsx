import { NewsCardType } from "@/lib/types";
import React from "react";
import NewsCard from "../Common/NewsCard";
import { Typography } from "../Common/Typography";

const LatestAtA2 = () => {
  const cardData: NewsCardType[] = [
    {
      id: 1,
      title: "Beyond Aesthetics: Crafting Intuitive UI for Real Users",
      category: "UI Design",
      views: "2.2k",
      comments:
        "Soluta-Ag is an integrated digital platform that enables full transparency and traceability across the agriculture value chain",
      date: "2023-10-01",
      image: "/Image (1).png",
    },
    {
      id: 2,
      title: "Beyond Aesthetics: Crafting Intuitive UI for Real Users",
      category: "UI Design",
      views: "2.2k",
      comments:
        "Soluta-Ag is an integrated digital platform that enables full transparency and traceability across the agriculture value chain",
      date: "2023-10-01",
      image: "/Image (2).png",
    },
    {
      id: 3,
      title: "Beyond Aesthetics: Crafting Intuitive UI for Real Users",
      category: "UI Design",
      views: "2.2k",
      comments:
        "Soluta-Ag is an integrated digital platform that enables full transparency and traceability across the agriculture value chain",
      date: "2023-10-01",
      image: "/Image (3).png",
    },
    {
      id: 4,
      title: "Beyond Aesthetics: Crafting Intuitive UI for Real Users",
      category: "UI Design",
      views: "2.2k",
      comments:
        "Soluta-Ag is an integrated digital platform that enables full transparency and traceability across the agriculture value chain",
      date: "2023-10-01",
      image: "/Image (4).png",
    },
    {
      id: 5,
      title: "Beyond Aesthetics: Crafting Intuitive UI for Real Users",
      category: "UI Design",
      views: "2.2k",
      comments:
        "Soluta-Ag is an integrated digital platform that enables full transparency and traceability across the agriculture value chain",
      date: "2023-10-01",
      image: "/Image (5).png",
    },
    {
      id: 6,
      title: "Beyond Aesthetics: Crafting Intuitive UI for Real Users",
      category: "UI Design",
      views: "2.2k",
      comments:
        "Soluta-Ag is an integrated digital platform that enables full transparency and traceability across the agriculture value chain",
      date: "2023-10-01",
      image: "/Image (6).png",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto w-full flex items-center justify-center py-24">
      <div className="flex flex-col mt-[100px] items-center">
        <span className="font-semibold text-secondary-foreground text-center">
          News
        </span>
        <Typography variant="title3" className="text-white-to-black mt-3.5">
          Latest @ A²
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12.5 mt-12.5 w-full">
          {cardData.map((card) => (
            <NewsCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestAtA2;
