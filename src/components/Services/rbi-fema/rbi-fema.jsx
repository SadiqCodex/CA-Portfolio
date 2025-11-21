import React from "react";
import "./rbi-fema.scss";

export default function RbiFema() {
  const serviceDetails = {
    title: "RBI & FEMA Advisory Services",
    description:
      "We provide comprehensive advisory on RBI & FEMA regulations, helping businesses ensure compliance, streamline financial operations, and manage cross-border transactions efficiently.",
    benefits: [
      "Ensure regulatory compliance",
      "Streamlined financial operations",
      "Expert guidance on foreign exchange",
      "Minimize legal & financial risks",
      "Efficient cross-border transaction handling",
      "Stay updated with RBI & FEMA guidelines",
    ],
    process: [
      "Initial compliance assessment",
      "Review of financial & transaction records",
      "Identification of non-compliance areas",
      "Regulatory strategy formulation",
      "Implementation support & documentation",
      "Ongoing monitoring & advisory",
      "Final compliance report",
    ],
    deliverables: [
      "Detailed Compliance Assessment Report",
      "RBI & FEMA Advisory Plan",
      "Transaction & Documentation Checklist",
      "Legal & Risk Mitigation Guidelines",
      "Regular Regulatory Updates",
      "Final Compliance & Advisory Report",
    ],
  };

  return (
    <div className="subServiceDetail">
      {/* Header */}
      <header className="detailHeader">
        <div className="headerContent">
          <div className="serviceIcon">🏦</div>
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
          <h2>Ensure Compliance and Financial Efficiency</h2>
          <p>
            Get expert RBI & FEMA advisory services to navigate regulations
            confidently and optimize cross-border financial operations.
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
