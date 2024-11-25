import ApiSection from "@/components/sections/api-section";
import Hero from "@/components/sections/Hero";
import React from "react";

const HomePage = async () => {
  return (
    <React.Fragment>
      <Hero />
      <ApiSection />
    </React.Fragment>
  );
};

export default HomePage;
