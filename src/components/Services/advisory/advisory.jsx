import React from "react";
import "./advisory.scss";

export default function Advisory() {
  const serviceDetails = {
    title: "Business Advisory Services",
    description:
      "We provide expert advisory services to help businesses optimize operations, manage risks, and achieve strategic objectives. Our solutions focus on sustainable growth and improved financial performance.",

    benefits: [
      "Strategic business planning",
      "Operational efficiency improvement",
      "Risk management & mitigation",
      "Financial performance optimization",
      "Regulatory compliance support",
      "Sustainable growth roadmap",
    ],

    process: [
      "Initial business assessment",
      "Analysis of financial & operational performance",
      "Identification of key improvement areas",
      "Strategic recommendations & planning",
      "Implementation support & monitoring",
      "Regular review & performance tracking",
      "Final advisory report & future guidance",
    ],

    deliverables: [
      "Comprehensive Business Assessment Report",
      "Strategic Advisory Plan",
      "Operational Optimization Guidelines",
      "Risk & Compliance Management Documentation",
      "Financial Performance Report",
      "Future Growth Recommendations",
    ],
  };

  return (
    <div className="subServiceDetail">
      {/* Header */}
      <header className="detailHeader">
        <div className="headerContent">
          <div className="serviceIcon">🧭</div>

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
          <h2>Optimize Your Business with Expert Advisory</h2>
          <p>
            Get professional guidance to streamline operations, reduce risks, and drive sustainable growth.
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
