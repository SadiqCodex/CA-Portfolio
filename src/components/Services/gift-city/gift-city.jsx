import React from "react";
import "./gift-city.scss";

export default function GiftCity() {
  const serviceDetails = {
    title: "GIFT City Advisory Services",
    description:
      "We provide specialized advisory services for GIFT City projects, ensuring seamless financial, legal, and regulatory compliance. Our expert guidance enables businesses to leverage GIFT City’s benefits for growth and innovation.",

    benefits: [
      "Regulatory compliance assistance",
      "Financial & tax advisory",
      "Customized investment strategies",
      "Legal and operational support",
      "Risk mitigation & reporting",
      "Strategic growth planning",
    ],

    process: [
      "Initial assessment of project requirements",
      "Regulatory and legal analysis",
      "Financial structuring & planning",
      "Stakeholder consultation & alignment",
      "Implementation support & monitoring",
      "Reporting and compliance management",
      "Final project evaluation & recommendations",
    ],

    deliverables: [
      "Regulatory Compliance Report",
      "Investment & Financial Strategy Plan",
      "Legal Advisory Documents",
      "Operational & Governance Framework",
      "Risk Management Report",
      "Growth & Sustainability Roadmap",
    ],
  };

  return (
    <div className="subServiceDetail">
      {/* Header */}
      <header className="detailHeader">
        <div className="headerContent">
          <div className="serviceIcon">🏙️</div>
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
          <h2>Unlock the Full Potential of GIFT City</h2>
          <p>
            Partner with our experts to navigate GIFT City regulations, optimize investments, and achieve strategic growth.
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
