"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const SearchButton = () => {
  const [active, setActive] = useState(1);
  const data = [
    { id: 1, name: "All" },
    { id: 2, name: "Projects" },
    { id: 3, name: "Services" },
    { id: 4, name: "Knowledge" },
    { id: 5, name: "About" },
  ];
  return (
    <section className="max-w-7xl mx-auto py-24 mt-24">
      <div className="relative">
        <Input
          placeholder="Search"
          className="px-16.5 py-7.5 bg-[#FFFFFF14] border border-gradient-2"
        />
        <Search
          className="text-primary-foreground absolute top-4.5 left-7"
          size={24}
        />

        <ScrollArea className="w-full mt-8">
          <div className="flex space-x-4 pb-4">
            {data.map((item) => (
              <div key={item.id} className="flex-shrink-0">
                <Badge
                  variant="outline"
                  className={cn(
                    `px-8 py-4 font-medium text-lg text-white border-0 cursor-pointer`,
                    active === item.id
                      ? "bg-secondary-foreground text-primary"
                      : "bg-transparent"
                  )}
                  onClick={() => setActive(item.id)}
                >
                  {item.name}
                </Badge>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default SearchButton;
