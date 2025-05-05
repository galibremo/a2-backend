// components/Typography.tsx
import React, { JSX } from "react";
import { cn } from "@/lib/utils";

type TypographyVariant =
  | "title1"
  | "title2"
  | "title3"
  | "title4"
  | "title5"
  | "title6"
  | "title7"
  | "title8"
  | "title9"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "body3"
  | "caption1"
  | "overline"
  | "button"
  | "notice";

const variantMapping: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
  title1: "h1",
  title2: "h2",
  title3: "h3",
  title4: "h4",
  title5: "h5",
  title6: "h6",
  title7: "h6",
  title8: "h6",
  title9: "h6",
  subtitle1: "p",
  subtitle2: "p",
  body1: "p",
  body2: "p",
  body3: "p",
  caption1: "span",
  overline: "span",
  button: "span",
  notice: "span",
};

const variantStyles: Record<TypographyVariant, string> = {
  title1:
    "text-[42px] sm:text-[62px] md:text-[82px] font-extrabold leading-auto tracking-[-4px] ",
  title2: "text-[76px] font-bold leading-[90px] tracking-[-4px]",
  title3:
    "text-[32px] md:text-[64px] font-bold leading-[55px] md:leading-[80px] tracking-0 md:tracking-[-4px]",
  title4: "text-[40px] font-bold leading-[52px] tracking-[0%]",
  title5:
    "text-[24px] md:text-[48px] font-bold leading-[29px] md:leading-[54px] tracking-0 md:tracking-[-2px]",
  title6: "text-[36px] font-bold leading-[54px] tracking-[0px]",
  title7: "text-[18px] md:text-[26px] font-semibold leading-[18px] md:leading-[36px] tracking-[-0.6px] md:tracking-[-0.4px]",
  title8: "text-[16px] md:text-[24px] font-medium leading-[32px] tracking-[0%]",
  title9: "text-[20px] font-semibold leading-[160%] tracking-[-3%]",
  subtitle1: "text-[36px] font-normal leading-[52px] tracking-[-4%]",
  subtitle2: "text-[16px] font-medium leading-[160%] tracking-[0%]",
  body1: "text-[16px] md:text-[18px] font-medium leading-[160%] tracking-[0%]",
  body2: "text-[14px] md:text-[16px] font-medium leading-[160%] tracking-[0%]",
  body3: "text-[20px] font-normal leading-[160%] tracking-[0%]",
  caption1: "text-[10px] font-semibold leading-auto tracking-[0%]",
  overline: "text-[9px] font-semibold leading-auto tracking-[0%]",
  button: "text-[16px] font-bold leading-[16px] tracking-[0%]",
  notice: "text-[15px] font-bold leading-[22px] tracking-[0%]",
};

interface TypographyProps {
  variant: TypographyVariant;
  children: React.ReactNode;
  className?: string;
  component?: keyof JSX.IntrinsicElements;
}

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
  component,
  ...props
}) => {
  const Component = component || variantMapping[variant] || "span";

  return (
    <Component className={cn(variantStyles[variant], className)} {...props}>
      {children}
    </Component>
  );
};
