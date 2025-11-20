import React from "react";
import "./corporate-loan.scss";

export default function CorporateLoan() {
  const serviceDetails = {
    title: "Corporate Loan Advisory Services",
    description:
      "We provide end-to-end corporate loan advisory solutions, ensuring your business secures the right funding at the right time. From credit evaluation to lender negotiations, our expertise drives financial stability and sustainable expansion.",

    benefits: [
      "Access to tailored corporate financing solutions",
      "Improved creditworthiness and financial structuring",
      "Better loan terms through expert negotiations",
      "Enhanced liquidity and optimized cash flow",
      "Compliance with banking & regulatory requirements",
      "Support for expansion, working capital & project financing",
    ],

    process: [
      "Initial financial and credit assessment",
      "Determination of funding requirements",
      "Preparation of loan documentation & projections",
      "Identification of suitable banks & financial institutions",
      "Negotiation of loan terms and interest structure",
      "Assistance in final approval & disbursement",
      "Post-loan compliance reporting & monitoring",
    ],

    deliverables: [
      "Comprehensive Loan Requirement Assessment",
      "Financial Health & Creditworthiness Report",
      "Lender Shortlisting & Comparison Sheet",
      "Loan Application & Compliance Documentation",
      "Negotiated Term Sheet Summary",
      "Post-Loan Monitoring & Compliance Guide",
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

      {/* Grid */}
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
          <h2>Fuel Your Business Growth With Smart Financing</h2>
          <p>
            Get expert advisory support to secure the best corporate funding
            solutions tailored to your business vision.
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
