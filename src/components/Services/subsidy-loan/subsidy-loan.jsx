import React from "react";
import "./subsidy-loan.scss";

export default function SubsidyLoan() {
  const serviceDetails = {
    title: "Subsidy & Loan Advisory Services",
    description:
      "We assist businesses in accessing government subsidies, financial incentives, and structured loans. Our expert guidance ensures optimal funding and smooth compliance throughout the process.",

    benefits: [
      "Maximize government subsidies & incentives",
      "Simplified loan application process",
      "Expert documentation & compliance support",
      "Optimized financial planning",
      "Improved access to credit & capital",
      "Long-term funding strategy & support",
    ],

    process: [
      "Initial funding eligibility assessment",
      "Identify relevant subsidies & loan programs",
      "Prepare and review required documentation",
      "Submit applications to authorities & banks",
      "Monitor approval process and follow-ups",
      "Fund disbursement and tracking",
      "Final reporting & advisory for future funding",
    ],

    deliverables: [
      "Subsidy & Loan Eligibility Report",
      "Application Documentation & Templates",
      "Funding Strategy & Roadmap",
      "Compliance & Risk Mitigation Guidelines",
      "Monitoring & Follow-up Assistance",
      "Final Funding & Advisory Report",
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
          <h2>Access Funding and Maximize Subsidies</h2>
          <p>
            Get expert advisory for government subsidies and structured loans to
            fuel growth, optimize funding, and ensure smooth compliance.
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
