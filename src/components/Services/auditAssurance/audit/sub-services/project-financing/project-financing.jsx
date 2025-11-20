import React from "react";
import "./project-financing.scss";

export default function ProjectFinancing() {
  const serviceDetails = {
    title: "Project Financing Services",
    description:
      "We provide end-to-end project financing support, from feasibility assessment to loan structuring, documentation, and coordination with financial institutions. Our expertise ensures smooth funding approvals and strong financial planning for your business growth.",

    benefits: [
      "Accurate project feasibility evaluation",
      "Loan structuring & documentation support",
      "Improved financial viability & projections",
      "Assistance with bank negotiations & sanctions",
      "Expert advisory for subsidies & government schemes",
      "Optimized capital structure for project stability",
    ],

    process: [
      "Requirement analysis & financial needs assessment",
      "Feasibility study & viability evaluation",
      "Preparing DPR (Detailed Project Report)",
      "Financial modelling & cashflow projections",
      "Documentation preparation & bank submissions",
      "Coordination with lenders & loan processing",
      "Final approval, disbursement, and compliance",
    ],

    deliverables: [
      "Detailed Project Report (DPR)",
      "Financial Projections & Cashflow Statements",
      "Loan Application Documentation",
      "Viability Assessment Report",
      "Risk & Sensitivity Analysis",
      "Lender Compliance Checklist",
    ],
  };

  return (
    <div className="subServiceDetail">
      {/* Header */}
      <header className="detailHeader">
        <div className="headerContent">
          <div className="serviceIcon">💼</div>

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
                <div className="benefitIcon">✓</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Timeline */}
        <section className="contentSection">
          <div className="sectionHeader">
            <div className="sectionIcon">🔧</div>
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
            <div className="sectionIcon">📄</div>
            <h2>Deliverables</h2>
          </div>

          <div className="deliverablesList">
            {serviceDetails.deliverables.map((d, index) => (
              <div key={index} className="deliverableItem">
                <div className="deliverableIcon">📑</div>
                <h3>{d}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="contactCta">
        <div className="ctaContent">
          <h2>Need Assistance in Securing Project Funding?</h2>
          <p>
            Consult with our financing experts to ensure smooth fund approvals
            and documentation support.
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
