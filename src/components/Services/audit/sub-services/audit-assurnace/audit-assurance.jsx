import React from "react";
import "./audit-assurance.scss"

export default function AuditAssurance() {
  const serviceDetails = {
    title: "Audit & Assurance Services",
    description:
      "Our comprehensive audit and assurance services provide independent verification of your financial statements, ensuring accuracy, compliance, and transparency. We help build stakeholder confidence through rigorous examination and professional reporting.",

    benefits: [
      "Enhanced credibility with stakeholders and investors",
      "Improved internal controls and risk management",
      "Regulatory compliance and legal protection",
      "Identification of operational inefficiencies",
      "Professional guidance on accounting standards",
      "Strengthened corporate governance framework",
    ],

    process: [
      "Initial consultation and scope definition",
      "Risk assessment and audit planning",
      "Detailed examination of financial records",
      "Testing of internal controls and procedures",
      "Analysis of accounting policies and estimates",
      "Draft report preparation and management review",
      "Final audit report and recommendations",
    ],

    deliverables: [
      "Independent Auditor's Report",
      "Management Letter with recommendations",
      "Internal Control Assessment Report",
      "Compliance Verification Certificate",
      "Financial Statement Review Summary",
      "Risk Assessment Documentation",
    ],
  };

  return (
    <div className={styles.subServiceDetail}>
      {/* Header */}
      <header className={styles.detailHeader}>
        <div className={styles.headerContent}>
          <div className={styles.serviceIcon}>🔍</div>

          <div className={styles.headerText}>
            <h1>{serviceDetails.title}</h1>
            <p>{serviceDetails.description}</p>
          </div>
        </div>
      </header>

      {/* Content Grid */}
      <div className={styles.contentGrid}>
        {/* Benefits */}
        <section className={styles.contentSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>✨</div>
            <h2>Key Benefits</h2>
          </div>

          <div className={styles.benefitsGrid}>
            {serviceDetails.benefits.map((item, index) => (
              <div key={index} className={styles.benefitItem}>
                <div className={styles.benefitIcon}>✓</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Timeline */}
        <section className={styles.contentSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>⚙️</div>
            <h2>Our Process</h2>
          </div>

          <div className={styles.processTimeline}>
            {serviceDetails.process.map((step, index) => (
              <div key={index} className={styles.processStep}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <div className={styles.stepContent}>
                  <p>{step}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Deliverables */}
        <section className={styles.contentSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIcon}>📋</div>
            <h2>Deliverables</h2>
          </div>

          <div className={styles.deliverablesList}>
            {serviceDetails.deliverables.map((d, index) => (
              <div key={index} className={styles.deliverableItem}>
                <div className={styles.deliverableIcon}>📄</div>
                <h3>{d}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className={styles.contactCta}>
        <div className={styles.ctaContent}>
          <h2>Ready to Enhance Your Financial Transparency?</h2>
          <p>
            Contact our audit experts for a detailed consultation tailored to
            your specific requirements.
          </p>

          <div className={styles.ctaActions}>
            <button className={styles.primaryBtn}>Get Quote</button>
            <button className={styles.secondaryBtn}>Schedule Call</button>
          </div>
        </div>
      </section>
    </div>
  );
}
