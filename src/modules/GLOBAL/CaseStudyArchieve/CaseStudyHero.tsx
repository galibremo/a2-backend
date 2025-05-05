import { Typography } from "../Common/Typography";

const CaseStudyHero = () => {
  return (
    <section className="max-w-7xl mx-auto w-full mt-[290px] flex items-center justify-center px-10 md:px-20">
      <div className="flex flex-col md:flex-row items-center w-full">
        <div className="flex flex-col w-full md:w-1/2 gap-1 items-center md:items-start">
          <Typography
            variant="body2"
            className="uppercase text-secondary-foreground "
          >
            Case Study
          </Typography>
          <Typography variant="title3" className="text-white-to-black text-center md:text-left">
            Case Study
            <br className="hidden md:block" /> Archieve
          </Typography>
        </div>
        <div className="w-full md:w-1/2">
          <Typography variant="body1" className="text-center md:text-left">
            The cumbersome nature of traditional monitoring and evaluation
            <br className="hidden md:block" />
            processes poses a major obstacle to scaling impact funding and
            <br className="hidden md:block" />
            ensuring beneficiary accountability.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
