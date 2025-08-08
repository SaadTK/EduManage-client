import React from "react";
import { assets } from "../../assets/assets";

import Marquee from "react-fast-marquee";

const Companies = () => (
  <div className="pt-16">
    <p className="text-base text-gray-500 mb-5">Trusted by learners from</p>

    <Marquee speed={40} gradient={false}>
      <img
        src={assets.microsoft_logo}
        alt="Microsoft"
        className="mx-6 w-40 md:w-48 object-contain hover:scale-105 transition-transform"
      />
      <img
        src={assets.walmart_logo}
        alt="Walmart"
        className="mx-6 w-40 md:w-48 object-contain hover:scale-105 transition-transform"
      />
      <img
        src={assets.accenture_logo}
        alt="Accenture"
        className="mx-6 w-40 md:w-48 object-contain hover:scale-105 transition-transform"
      />
      <img
        src={assets.adobe_logo}
        alt="Adobe"
        className="mx-6 w-40 md:w-48 object-contain hover:scale-105 transition-transform"
      />
      <img
        src={assets.paypal_logo}
        alt="Paypal"
        className="mx-6 w-40 md:w-48 object-contain hover:scale-105 transition-transform"
      />
    </Marquee>
  </div>
);

export default Companies;
