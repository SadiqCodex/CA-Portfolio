import React from "react";
import "./resourceHero.scss";

export default function ResourceHero() {
  return (
    <section className="resource-hero">
      <div className="resource-hero-content">
        <h1 className="title">Resources <span> & Knowledge Hub</span></h1>
        <p className="subtitle">
          Access essential guides, tax updates, tools, and professional resources
          curated for businesses, startups, and individuals.
        </p>

        <div className="hero-buttons">
          <a href="#downloads" className="btn primary">Downloads</a>
          <a href="#articles" className="btn secondary">Articles</a>
        </div>
      </div>

      <div className="resource-hero-overlay"></div>
    </section>
  );
}
