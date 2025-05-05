"use client";
import React from "react";
import Chart from "react-google-charts";
import { Typography } from "../Common/Typography";

const GlobalFootprint = () => {
  const data = [
    ["Country", "Highlighted"],
    ["US", 1],
    ["MX", 1],
    ["BO", 1],
    ["GB", 1],
    ["MA", 1],
    ["SD", 1],
    ["CN", 1],
    ["ID", 1],
    ["AU", 1],
    ["IN", 1],
    ["DZ", 1],
    ["PE", 1],
    ["CO", 1],
  ];

  const options = {
    colorAxis: {
      colors: ["#d3f4f4", "#d3f4f4"],
    },
    backgroundColor: "#0B0614",
    datalessRegionColor: "#211C29",
    defaultColor: "#d3f4f4",
    legend: "none",
    tooltip: { trigger: "none" },
  };

  // Country labels with approximate positioning
  const countryLabels = [
    { id: "USA", label: "USA", top: "40%", left: "38%" },
    { id: "Mexico", label: "Mexico", top: "67%", left: "26%" },
    { id: "Bolivia", label: "Bolivia", top: "86%", left: "44%" },
    { id: "United Kingdom", label: "United Kingdom", top: "36%", left: "58%" },
    { id: "Morocco", label: "Morocco", top: "53%", left: "44%" },
    { id: "Sudan", label: "Sudan", top: "74%", left: "59%" },
    { id: "China", label: "China", top: "37%", left: "76%" },
    { id: "Indonesia", label: "Indonesia", top: "63%", left: "77%" },
  ];

  return (
    <section className="hidden md:flex flex-col items-center justify-center max-w-7xl mx-auto w-full py-24">
      <Typography variant="title3" className="text-white-to-black text-center">
        Global Footprints
      </Typography>
      <Typography variant="body2" className="text-center mt-1.5 md:mt-3.5">
        LightCastle A², a forward-thinking AI and technology consultancy, offers
        cutting-edge, bespoke digital
        <br className="hidden md:block" /> and AI-powered solutions that drive
        business metrics and deliver positive social impact.
      </Typography>
      <div className="w-full mt-8 md:mt-20 relative">
        <Chart
          chartType="GeoChart"
          width="100%"
          height="600px"
          data={data}
          options={options}
        />

        {countryLabels.map((country) => (
          <div
            key={country.id}
            className="absolute border text-gradient-2 py-2 px-4 text-sm font-bold"
            style={{
              top: country.top,
              left: country.left,
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
          >
            {country.label}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GlobalFootprint;
