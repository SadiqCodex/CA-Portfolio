import React from "react";
import "./compliance.scss";

export default function Compliance() {
  const serviceDetails = {
    title: "Corporate Compliance & Regulatory Services",
    description:
      "We ensure your business stays fully compliant with statutory, regulatory, and corporate governance requirements. Our expert-driven compliance solutions reduce legal risks, strengthen governance, and ensure seamless business continuity.",

    compliances: [
      "Company Law Compliance (ROC Filings, Annual Returns)",
      "GST Compliance & Return Filing",
      "Income Tax Compliance & Reporting",
      "Accounting Standards & Financial Reporting Compliance",
      "Labour Law & PF/ESI Compliance",
      "FEMA & RBI Compliance Documentation",
      "Industry-Specific Regulatory Compliance",
    ],

    process: [
      "Understanding your organizational compliance requirements",
      "Detailed review of financial, legal, and statutory records",
      "Identification of compliance gaps & risk areas",
      "Designing a compliance roadmap & control structure",
      "Implementing filing & documentation compliance",
      "Regular monitoring, audit reviews & reporting",
      "Providing ongoing compliance support",
    ],

    deliverables: [
      "Compliance Status & Gap Analysis Report",
      "Regulatory Filing & Documentation Pack",
      "Compliance Calendar (Monthly/Quarterly/Yearly)",
      "Risk Assessment & Mitigation Blueprint",
      "Corporate Governance Strengthening Report",
      "End-to-End Statutory Compliance Checklist",
    ],
  };

  return (
    <div className="subServiceDetail">
      {/* HEADER */}
      <header className="detailHeader">
        <div className="headerContent">
          <div className="serviceIcon">⚖️</div>

          <div className="headerText">
            <h1>{serviceDetails.title}</h1>
            <p>{serviceDetails.description}</p>
          </div>
        </div>
      </header>

      {/* GRID CONTENT */}
      <div className="contentGrid">

        {/* Compliance Coverage */}
        <section className="contentSection">
          <div className="sectionHeader">
            <div className="sectionIcon">📑</div>
            <h2>Compliance Coverage</h2>
          </div>

          <div className="benefitsGrid">
            {serviceDetails.compliances.map((item, index) => (
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
            <div className="sectionIcon">🛠️</div>
            <h2>Our Compliance Process</h2>
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

      {/* CTA SECTION */}
      <section className="contactCta">
        <div className="ctaContent">
          <h2>Stay Compliant. Stay Protected.</h2>
          <p>
            Let our compliance experts help you manage statutory obligations,
            reduce regulatory risk, and maintain strong corporate governance.
          </p>

          <div className="ctaActions">
            <button className="primaryBtn">Request Compliance Support</button>
            <button className="secondaryBtn">Book Consultation</button>
          </div>
        </div>
      </section>
    </div>
  );
}
