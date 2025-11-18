import React from "react";
import "./tax.scss";
import { Link } from "react-router-dom";

export default function Tax() {
  const subServices = [
    {
      id: "direct-tax",
      title: "Direct Tax Services",
      description:
        "Comprehensive direct tax planning, compliance, and advisory services for individuals and businesses.",
      features: [
        "Income Tax Return Filing",
        "Tax Planning & Optimization",
        "Assessment Proceedings Support",
        "Appeal & Litigation Services",
        "Advance Tax Calculations",
      ],
      route: "/services/tax/direct-tax",
      icon: "💰",
    },
    {
      id: "gst",
      title: "GST Services",
      description:
        "End-to-end GST registration, compliance, and advisory services ensuring seamless business operations.",
      features: [
        "GST Registration & Migration",
        "Monthly/Quarterly Return Filing",
        "Input Tax Credit Optimization",
        "GST Audit & Compliance",
        "Refund Processing Support",
      ],
      route: "/services/tax/gst",
      icon: "📊",
    },
    {
      id: "international-tax",
      title: "International Tax",
      description:
        "Specialized international tax services for cross-border transactions and global business operations.",
      features: [
        "Transfer Pricing Documentation",
        "Double Taxation Avoidance",
        "Foreign Exchange Compliance",
        "International Structuring",
        "Tax Treaty Benefits",
      ],
      route: "/services/tax/international-tax",
      icon: "🌐",
    },
    {
      id: "tds-compliance",
      title: "TDS Compliance",
      description:
        "Complete TDS compliance services ensuring accurate deduction, deposit, and reporting requirements.",
      features: [
        "TDS Calculation & Deduction",
        "Quarterly TDS Returns",
        "TDS Certificate Generation",
        "Lower Deduction Certificates",
        "TDS Reconciliation Services",
      ],
      route: "/services/tax/tds-compliance",
      icon: "📋",
    },
  ];

  return (
    <div className="service-page">
      {/* HEADER */}
      <header className="service-header">
        <div className="header-content">
          <div className="service-icon">💰</div>

          <div className="header-text">
            <h1 className="service-title">Taxation Services</h1>
            <p className="service-subtitle">
              Comprehensive tax solutions covering direct tax, GST, international
              tax, and compliance services with expert guidance to optimize your
              tax efficiency.
            </p>
          </div>
        </div>
      </header>

      {/* OVERVIEW */}
      <section className="service-overview">
        <div className="overview-content">
          <h2>Why Choose Our Tax Services?</h2>

          <div className="overview-grid">
            <div className="overview-item">
              <div className="item-icon">🎯</div>
              <h3>Tax Optimization</h3>
              <p>Strategic planning to minimize tax liability legally</p>
            </div>

            <div className="overview-item">
              <div className="item-icon">📅</div>
              <h3>Timely Compliance</h3>
              <p>Ensuring all deadlines are met with accuracy</p>
            </div>

            <div className="overview-item">
              <div className="item-icon">🛡️</div>
              <h3>Risk Mitigation</h3>
              <p>Proactive approach to avoid penalties and disputes</p>
            </div>

            <div className="overview-item">
              <div className="item-icon">💡</div>
              <h3>Expert Guidance</h3>
              <p>Professional advice on complex tax matters</p>
            </div>
          </div>
        </div>
      </section>

      {/* SUB SERVICES */}
      <section className="sub-services-section">
        <div className="section-header">
          <h2>Our Tax Specializations</h2>
          <p>Comprehensive tax solutions tailored to your business needs</p>
        </div>

        <div className="sub-services-grid">
          {subServices.map((service) => (
            <div key={service.id} className="sub-service-card">
              <div className="card-header">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
              </div>

              <div className="card-content">
                <p className="service-description">{service.description}</p>

                <div className="features-list">
                  <h4>Key Services:</h4>
                  <ul>
                    {service.features.map((f, i) => (
                      <li key={i}>
                        <span className="feature-icon">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="card-footer">
                <Link to={service.route} className="learn-more-btn">
                  Learn More <span className="btn-icon">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Need Tax Advisory?</h2>
          <p>
            Connect with our tax experts for personalized consultation and
            strategic planning.
          </p>

          <div className="cta-buttons">
            <button className="primary-btn">Book Consultation</button>
            <button className="secondary-btn">Get Tax Guide</button>
          </div>
        </div>
      </section>
    </div>
  );
}
