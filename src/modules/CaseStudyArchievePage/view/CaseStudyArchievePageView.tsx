import CaseStudyHero from "@/modules/GLOBAL/CaseStudyArchieve/CaseStudyHero";
import CaseStudyItems from "@/modules/GLOBAL/CaseStudyArchieve/CaseStudyItems";
import React from "react";

export default function CaseStudyArchievePageView() {
  return (
    <div className="flex flex-col">
      <CaseStudyHero />
      <CaseStudyItems />
    </div>
  );
}
