import ContactFrom from "@/modules/GLOBAL/Contact/ContactFrom";
import ContactHero from "@/modules/GLOBAL/Contact/ContactHero";
import Knowledge from "@/modules/GLOBAL/Home/Knowledge";
import React from "react";

const ContactPageView = () => {
  return (
    <div>
      <ContactHero />
      <ContactFrom />
      <Knowledge />
    </div>
  );
};

export default ContactPageView;
