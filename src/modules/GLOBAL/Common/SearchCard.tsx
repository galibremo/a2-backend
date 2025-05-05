import { SearchCardType } from "@/lib/types";
import dayjs from "dayjs";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Typography } from "./Typography";

const SearchCard = ({ item }: { item: SearchCardType }) => {
  return (
    <div className="flex justify-between gap-6.5">
      <Image
        src={item.image}
        width={197}
        height={129}
        alt="case-study"
        className="h-[129px] w-[197px] object-cover"
      />
      <div className="flex-1">
        <div className="text-secondary-foreground opacity-60 text-sm mb-1 uppercase">
          {dayjs(item.date).format("MMM D, YYYY")}
        </div>
        <Typography variant="title7" className="mb-2">
          {item.title}
        </Typography>

        <Typography
          variant="body2"
          className="text-primary-foreground opacity-60"
        >
          {item.description}
        </Typography>
      </div>
      <div className="flex-shrink-0 hidden md:block">
        <Link
          href="#"
          className="inline-block bg-secondary-foreground p-3.5 text-black hover:bg-[#a9d6cb] transition-colors"
        >
          <ArrowUpRight size={24} />
        </Link>
      </div>
    </div>
  );
};

export default SearchCard;
