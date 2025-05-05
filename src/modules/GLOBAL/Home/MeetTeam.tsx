import Image from "next/image";
import React from "react";
import { Typography } from "../Common/Typography";

const MeetTeam = () => {
  return (
    <section className="max-w-7xl mx-auto w-full py-24">
      <div className="flex flex-col items-center justify-center">
        <p className="uppercase font-semibold text-secondary-foreground">
          Who we are
        </p>
        <Typography variant="title3" className="text-white-to-black">
          Meet A² team
        </Typography>
        <div className="flex items-center gap-12.5 mt-10 md:mt-15 flex-col md:flex-row w-full">
          <div className="hover-gradient-picture">
            <Image
              src={"/Ivdad-Ahmed-Khan-Mojlish.png"}
              height={370.43}
              width={398.92}
              alt="Ivdad-Ahmed-Khan-Mojlish"
              className="h-[370.43px] w-[398.92px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="flex flex-col space-y-6">
            <div>
              <p className="font-bold text-3xl md:text-4xl mb-[6px] text-gradient-2">
                Ivdad Ahmed Khan Mojlish
              </p>
              <span className="text-secondary-foreground uppercase font-semibold">
                Managing Director
              </span>
            </div>
            <div className="flex gap-3">
              <Image
                src={"/message.png"}
                height={40}
                width={40}
                alt="Ivdad-Ahmed-Khan-Mojlish"
                className="cursor-pointer"
              />
              <Image
                src={"/linkedin.png"}
                height={40}
                width={40}
                alt="Ivdad-Ahmed-Khan-Mojlish"
                className="cursor-pointer"
              />
            </div>
            <Typography
              variant="body1"
              className="text-white-to-black text-primary-foreground"
            >
              As an entrepreneur, Ivdad loves to dream big, work more, and talk
              less. And he believes that
              <br className="hidden md:block" /> his ambition will drive his ability.
              <br />
              <br />
              Ivdad’s passion for a data-driven economy led him to establish
              LightCastle Partners (LCP) as
              <br className="hidden md:block" /> a premier consulting firm in Bangladesh. Working at the
              intersection of data, development,
              <br className="hidden md:block" /> technology and finance over the past six years, he has
              helped chart 200+ impact stories by
              <br className="hidden md:block" /> enabling 400+ organizations – spanning private, public and
              development – become
              <br className="hidden md:block" /> comfortable with data-driven decision making.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTeam;
