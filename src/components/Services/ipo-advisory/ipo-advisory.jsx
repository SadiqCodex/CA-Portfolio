import React from "react";
import "./ipo-advisory.scss";

export default function IpoAdvisory() {
  const serviceDetails = {
    title: "IPO Advisory Services",
    description:
      "We provide end-to-end IPO advisory services to help companies navigate the complexities of going public. Our experts ensure regulatory compliance, investor readiness, and a successful market debut.",

    benefits: [
      "Regulatory compliance & filing support",
      "Investor engagement & roadshows",
      "Financial & valuation advisory",
      "Risk assessment & mitigation",
      "Optimized pricing and allocation",
      "Post-IPO advisory and reporting",
    ],

    process: [
      "Initial company assessment & readiness check",
      "Due diligence & financial audit",
      "Valuation & pricing strategy formulation",
      "Preparation of prospectus and filings",
      "Investor roadshows & marketing campaigns",
      "IPO launch & allocation management",
      "Post-IPO compliance & reporting",
    ],

    deliverables: [
      "IPO Readiness Report",
      "Financial & Valuation Advisory Documents",
      "Regulatory Filing Support",
      "Prospectus & Investor Presentation",
      "Roadshow Material & Marketing Plan",
      "Post-IPO Monitoring & Reports",
    ],
  };

  return (
    <div className="subServiceDetail">
      {/* Header */}
      <header className="detailHeader">
        <div className="headerContent">
          <div className="serviceIcon">📈</div>
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
          <h2>Go Public Confidently with Expert IPO Guidance</h2>
          <p>
            Partner with our advisory team to ensure a successful IPO journey, maximize investor confidence, and achieve market success.
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
