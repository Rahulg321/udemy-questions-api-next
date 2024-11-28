import React from "react";
import PricingTiers from "./pricing-tiers";

export const metadata = {
  title: "Pricing",
  description: "See our friendly pricing tiers",
};

const PricingPage = async () => {
  return (
    <div>
      <PricingTiers />
    </div>
  );
};

export default PricingPage;
