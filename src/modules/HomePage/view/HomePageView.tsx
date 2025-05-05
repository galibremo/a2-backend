import AboutUs from "@/modules/GLOBAL/Home/AboutUs";
import CaseStudy from "@/modules/GLOBAL/Home/CaseStudy";
import ClientsPartners from "@/modules/GLOBAL/Home/ClientsPartners";
import GlobalFootprint from "@/modules/GLOBAL/Home/GlobalFootprint";
import HeroSection from "@/modules/GLOBAL/Home/HeroSection";
import Knowledge from "@/modules/GLOBAL/Home/Knowledge";
import LatestNews from "@/modules/GLOBAL/Home/LatestNews";
import MeetTeam from "@/modules/GLOBAL/Home/MeetTeam";
import React from "react";
import "../../css/outrun.css";
import Grid3d from "@/modules/GLOBAL/Common/Grid3d";

export default function HomePageView() {
  return (
    <main className="flex flex-col gap-5 md:gap-20">
      <Grid3d />
      <HeroSection />
      <AboutUs />
      <GlobalFootprint />
      <CaseStudy />
      <ClientsPartners />
      <MeetTeam />
      <LatestNews />
      <Knowledge />
    </main>
  );
}
