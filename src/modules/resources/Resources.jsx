import React from "react";

// RESOURCE SECTIONS
import Articles from "../../components/resource/articles/articles";
import CaseStudies from "../../components/resource/CaseStudies/CaseStudies";
import Checklists from "../../components/resource/checklist/checklist";
import Downloads from "../../components/resource/downloads/downloads";
import FAQ from "../../components/resource/faq/faq";
import LegalUpdates from "../../components/resource/LegalUpdates/LegalUpdates";
import ResourceHero from "../../components/resource/resourceHero/resourceHero";
import ToolsCalculators from "../../components/resource/ToolsCalculators/ToolsCalculators";

import "./Resources.scss";

const Resources = () => {
  return (
    <main className="resources">
      <ResourceHero />
      <CaseStudies />
      <Articles />
      <ToolsCalculators />
      <Checklists />
      <Downloads />
      <FAQ />
      <LegalUpdates />
    </main>
  );
};

export default Resources;
