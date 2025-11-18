import React from "react";
import "./business-restructuring.scss";

export default function BusinessRestructuring() {
  const serviceDetails = {
    title: "Business Restructuring Services",
    description:
      "We help organizations transform, stabilize, and optimize their business structure. Our restructuring solutions enhance financial health, improve operational performance, and position your company for sustainable long-term growth.",

    benefits: [
      "Strengthened financial stability",
      "Enhanced operational efficiency",
      "Debt optimization & improved cash flow",
      "Better governance & internal control alignment",
      "Risk mitigation with proactive planning",
      "Sustainable long-term business growth",
    ],

    process: [
      "Initial business health assessment",
      "Review of financial, operational & legal structure",
      "Identification of key challenges & inefficiencies",
      "Restructuring strategy formulation",
      "Implementation roadmap & stakeholder alignment",
      "Execution support & performance tracking",
      "Final restructuring impact report",
    ],

    deliverables: [
      "Detailed Business Health Check Report",
      "Restructuring Strategy Blueprint",
      "Financial & Operational Optimization Plan",
      "Stakeholder Alignment Documentation",
      "Compliance & Governance Enhancement Report",
      "Future Growth & Stability Roadmap",
    ],
  };

  return (
    <div className="subServiceDetail">
      {/* Header */}
      <header className="detailHeader">
        <div className="headerContent">
          <div className="serviceIcon">🏢</div>

          <div className="headerText">
            <h1>{serviceDetails.title}</h1>
            <p>{serviceDetails.description}</p>
          </div>
        </div>
      </header>

      {/* Content Grid */}
      <div className="contentGrid">
        {/* Benefits */}
        <section className="contentSection">
          <div className="sectionHeader">
            <div className="sectionIcon">🌟</div>
            <h2>Key Benefits</h2>
          </div>

          <div className="benefitsGrid">
            {serviceDetails.benefits.map((item, index) => (
              <div key={index} className="benefitItem">
                <div className="benefitIcon">✔</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="contentSection">
          <div className="sectionHeader">
            <div className="sectionIcon">⚙️</div>
            <h2>Our Process</h2>
          </div>

          <div className="processTimeline">
            {serviceDetails.process.map((step, index) => (
              <div key={index} className="processStep">
                <div className="stepNumber">{index + 1}</div>
                <div className="stepContent">
                  <p>{step}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Deliverables */}
        <section className="contentSection">
          <div className="sectionHeader">
            <div className="sectionIcon">📘</div>
            <h2>Deliverables</h2>
          </div>

          <div className="deliverablesList">
            {serviceDetails.deliverables.map((d, index) => (
              <div key={index} className="deliverableItem">
                <div className="deliverableIcon">📄</div>
                <h3>{d}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="contactCta">
        <div className="ctaContent">
          <h2>Transform Your Business for a Stronger Tomorrow</h2>
          <p>
            Get expert-driven restructuring solutions that ensure stability,
            agility, and long-term profitability.
          </p>

          <div className="ctaActions">
            <button className="primaryBtn">Get Quote</button>
            <button className="secondaryBtn">Schedule Consultation</button>
          </div>
        </div>
      </section>
    </div>
  );
}
