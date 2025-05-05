import { cn } from "@/lib/utils";
import React from "react";

type TextGradientProps = {
  text: string;
  className: string;
};

const TextGradient = ({ text, className }: TextGradientProps) => {
  return (
    <h1
      className={cn(
        "inline-block bg-clip-text text-transparent px-[2px]",
        className
      )}
    >
      {text}
    </h1>
  );
};

export default TextGradient;
