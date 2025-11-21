import React from "react";
import "./funding-advisory.scss";

export default function FundingAdvisory() {
  const serviceDetails = {
    title: "Funding Advisory Services",
    description:
      "We guide businesses to secure the right capital at the right time. Our funding advisory solutions help you optimize investment opportunities, attract the best investors, and drive sustainable growth.",

    benefits: [
      "Access to a wide network of investors",
      "Tailored funding strategies",
      "Enhanced capital efficiency",
      "Risk assessment & mitigation",
      "Optimized deal structuring",
      "Support in negotiations & term sheets",
    ],

    process: [
      "Initial financial & capital assessment",
      "Identify funding requirements & investor profile",
      "Prepare investor pitch & financial models",
      "Targeted investor outreach & engagement",
      "Negotiation support & term structuring",
      "Closure & capital deployment assistance",
      "Ongoing performance tracking & advisory",
    ],

    deliverables: [
      "Investor Readiness Report",
      "Tailored Funding Strategy",
      "Financial Models & Projections",
      "Pitch Deck & Presentation Kit",
      "Deal Structuring Documents",
      "Post-Funding Advisory Report",
    ],
  };

  return (
    <div className="subServiceDetail">
      {/* Header */}
      <header className="detailHeader">
        <div className="headerContent">
          <div className="serviceIcon">💰</div>

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
          <h2>Secure Funding & Accelerate Your Growth</h2>
          <p>
            Partner with experts to unlock capital, maximize investor value, and ensure sustainable business expansion.
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
