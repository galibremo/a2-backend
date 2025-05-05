import React from "react";
import { Typography } from "../Common/Typography";

const ContactHero = () => {
  return (
    <section className="text-center mt-[265px] max-w-7xl mx-auto">
      <p className="uppercase font-semibold text-secondary-foreground">
        CONTACT US
      </p>
      <Typography variant="title3" className="mt-3.5">
        Reach our team
      </Typography>
      <Typography variant="body1" className="text-primary-foreground">
        Our dedicated customer service team is here to assist you with any
        questions, concerns, or inquiries you
        <br className="hidden md:block" /> may have. Whether you need help with
        an order, have product-related queries.
      </Typography>
    </section>
  );
};

export default ContactHero;
