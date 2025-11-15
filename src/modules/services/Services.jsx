import React from "react";
import CTASection from "../../components/Services/CTASection/CTASection";
import ServicesHero from "../../components/Services/ServicesHero/ServicesHero";
import ServicesGrid from "../../components/Services/ServicesGrid/ServicesGrid";

import "./Services.scss";

const Services = () => {
  return (
    <main className="services-page">
      <ServicesHero />
      <ServicesGrid />
      <CTASection />
    </main>
  );
};

export default Services;
