import ApiSection from "@/components/sections/api-section";
import Certifications from "@/components/sections/certifications";
import CsvViewer from "@/components/sections/csv-viewer";
import CTA from "@/components/sections/cta";
import Demo from "@/components/sections/demo";
import Features from "@/components/sections/features";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/pricing";
import Testimonials from "@/components/sections/testimonials";
import React from "react";

const HomePage = async () => {
  return (
    <React.Fragment>
      <Hero />
      <ApiSection />
      <CsvViewer />
      <Features />
      <Demo />
      <Certifications />
      <Pricing />
      <Testimonials />
      <CTA />
    </React.Fragment>
  );
};

export default HomePage;
