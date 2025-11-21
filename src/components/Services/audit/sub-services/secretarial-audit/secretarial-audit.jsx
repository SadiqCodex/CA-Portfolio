import React from "react";
import "./secretarial-audit.scss";

export default function SecretarialAudit() {
  const serviceDetails = {
    title: "Secretarial Audit Services",
    description:
      "Our Secretarial Audit ensures that your company complies with corporate laws, governance standards, and regulatory frameworks. We help reduce legal risks and enhance corporate transparency.",

    benefits: [
      "Ensures compliance with Companies Act & SEBI regulations",
      "Identifies governance gaps and legal risks",
      "Strengthens internal corporate processes",
      "Improves board-level decision making",
      "Promotes transparency and accountability",
      "Boosts investor and stakeholder confidence",
    ],

    process: [
      "Understanding company structure & compliance status",
      "Review of statutory registers & secretarial records",
      "Verification of board & shareholder meeting minutes",
      "Compliance check under Companies Act, SEBI & FEMA",
      "Assessment of internal governance controls",
      "Drafting audit observations & risk areas",
      "Final Secretarial Audit Report (MR-3)",
    ],

    deliverables: [
      "Secretarial Audit Report (Form MR-3)",
      "Compliance Risk Assessment Report",
      "Corporate Governance Review",
      "Statutory Registers Verification Summary",
      "ROC & SEBI Compliance Checklist Report",
      "Board Process Improvement Recommendations",
    ],
  };

  return (
    <div className="subServiceDetail">
      {/* Header */}
      <header className="detailHeader">
        <div className="headerContent">
          <div className="serviceIcon">📘</div>

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
            <div className="sectionIcon">✨</div>
            <h2>Key Benefits</h2>
          </div>

          <div className="benefitsGrid">
            {serviceDetails.benefits.map((item, index) => (
              <div key={index} className="benefitItem">
                <div className="benefitIcon">✓</div>
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
            <div className="sectionIcon">📋</div>
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
          <h2>Ensure Complete Compliance & Corporate Governance</h2>
          <p>
            Get a detailed Secretarial Audit conducted by certified professionals.
          </p>

          <div className="ctaActions">
            <button className="primaryBtn">Get Quote</button>
            <button className="secondaryBtn">Schedule Call</button>
          </div>
        </div>
      </section>
    </div>
  );
}
