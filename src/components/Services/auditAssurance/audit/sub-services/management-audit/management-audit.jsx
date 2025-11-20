import React from "react";
import "./management-audit.scss";

export default function ManagementAudit() {
  const serviceDetails = {
    title: "Management Audit Services",
    description:
      "We evaluate the effectiveness, efficiency, and strategic alignment of your organization’s management processes. Our management audit ensures optimized operations, improved decision-making, and enhanced organizational performance.",

    benefits: [
      "Improved managerial efficiency and productivity",
      "Enhanced decision-making and strategic alignment",
      "Identification of operational inefficiencies",
      "Better resource allocation and workflow optimization",
      "Stronger internal controls and compliance",
      "Enhanced organizational performance and governance",
    ],

    process: [
      "Understanding organizational structure & objectives",
      "Review of management practices and policies",
      "Operational and departmental analysis",
      "Gap identification & performance assessment",
      "Risk evaluation and internal workflow study",
      "Draft recommendations and management discussion",
      "Final Management Audit Report delivery",
    ],

    deliverables: [
      "Comprehensive Management Audit Report",
      "Operational Efficiency Assessment",
      "Department-wise Performance Review",
      "Workflow Optimization Recommendations",
      "Risk & Compliance Evaluation",
      "Governance Enhancement Roadmap",
    ],
  };

  return (
    <div className="subServiceDetail">
      {/* Header */}
      <header className="detailHeader">
        <div className="headerContent">
          <div className="serviceIcon">📊</div>

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

        {/* Process Timeline */}
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
          <h2>Looking to Strengthen Your Management Efficiency?</h2>
          <p>
            Get a complete management audit that boosts organizational
            performance and operational excellence.
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
