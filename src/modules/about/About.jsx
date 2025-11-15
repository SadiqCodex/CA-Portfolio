import React from "react";
import AboutHero from "../../components/about/AboutHero/AboutHero";
import TeamSection from "../../components/about/TeamSection/TeamSection";
import ValuesSection from "../../components/about/ValuesSection/ValuesSection";
import AwardsSection from "../../components/about/AwardsSection/AwardsSection";
import "./About.scss";
import { i } from "framer-motion/client";

const About = () => {
  return (
    <main className="about-page">
      <AboutHero />
      <TeamSection />
      <ValuesSection />
      <AwardsSection />
    </main>
  );
};

export default About;
