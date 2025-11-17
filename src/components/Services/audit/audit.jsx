// Audit.jsx – Parent Component (Handles All Sub-Services)

import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./audit.scss";

const subServices = [
  {
    id: "audit-assurance",
    title: "Audit & Assurance",
    description:
      "Comprehensive audit services ensuring transparency, compliance, and financial integrity.",
    features: [
      "Statutory Audit",
      "Internal Audit",
      "Financial Statement Audit",
      "Compliance Checks",
      "Risk Assessment",
    ],
    route: "audit-assurance",
    icon: "🔍",
  },
  {
    id: "project-financing",
    title: "Project Financing",
    description:
      "Expert project financing solutions and feasibility studies for business expansion.",
    features: [
      "Feasibility Reports",
      "Financial Modelling",
      "Funding Strategy",
      "Lender Support",
      "Due Diligence",
    ],
    route: "project-financing",
    icon: "💼",
  },
  {
    id: "management-audit",
    title: "Management Audit",
    description:
      "Strategic management audit services to optimize efficiency and performance.",
    features: [
      "Efficiency Review",
      "Process Optimization",
      "Performance Analysis",
      "Strategic Planning",
      "System Evaluation",
    ],
    route: "management-audit",
    icon: "📊",
  },
  {
    id: "secretarial-audit",
    title: "Secretarial Audit",
    description:
      "Ensuring compliance with corporate regulations and governance standards.",
    features: [
      "Companies Act Compliance",
      "Board Meeting Compliance",
      "Regulatory Review",
      "Governance Audit",
      "Statutory Registers",
    ],
    route: "secretarial-audit",
    icon: "📋",
  },
];

export default function Audit() {
  return (
    <div className="service-page">

      {/* 🔹 Service Header */}
      <header className="service-header">
        <div className="header-content">
          <div className="service-icon">🔍</div>

          <div className="header-text">
            <h1 className="service-title">Audit & Assurance Services</h1>
            <p className="service-subtitle">
              Professional audit services ensuring transparency, compliance,
              accuracy, and full financial reliability for your business.
            </p>
          </div>
        </div>
      </header>

      {/* 🔹 Overview Section */}
      <section className="service-overview">
        <div className="overview-content">
          <h2>Why Choose Our Audit Expertise?</h2>

          <div className="overview-grid">
            <div className="overview-item">
              <div className="item-icon">✅</div>
              <h3>Expert Team</h3>
              <p>Highly experienced Chartered Accountants & auditors</p>
            </div>

            <div className="overview-item">
              <div className="item-icon">🎯</div>
              <h3>Accuracy</h3>
              <p>Detail-oriented reporting and compliance assurance</p>
            </div>

            <div className="overview-item">
              <div className="item-icon">⚡</div>
              <h3>Timely Delivery</h3>
              <p>Assured completion within statutory deadlines</p>
            </div>

            <div className="overview-item">
              <div className="item-icon">🛡️</div>
              <h3>Risk Control</h3>
              <p>Advanced risk assessment & mitigation strategies</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Sub-Services List */}
      <section className="sub-services-section">
        <div className="section-header">
          <h2>Our Audit Specializations</h2>
          <p>Customised audit solutions crafted for your organization</p>
        </div>

        <div className="sub-services-grid">
          {subServices.map((service) => (
            <article key={service.id} className="sub-service-card">
              <div className="card-header">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
              </div>

              <div className="card-content">
                <p className="service-description">{service.description}</p>

                <div className="features-list">
                  <h4>Key Features:</h4>
                  <ul>
                    {service.features.map((f, i) => (
                      <li key={i}>
                        <span className="feature-icon">✓</span>
                        {f}
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
            </article>
          ))}
        </div>
      </section>

      {/* 🔹 CTA SECTION */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start?</h2>
          <p>Talk to our experts for tailored, professional audit guidance.</p>

          <div className="cta-buttons">
            <button
              className="primary-btn"
              onClick={() => (window.location.href = "/contact")}
            >
              Schedule Consultation
            </button>

            <a
              className="secondary-btn"
              href="/brochure/audit-brochure.pdf"
              download
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* 🔹 Nested Routing Output */}
      <div className="sub-service-content">
        <Outlet />
      </div>
    </div>
  );
}
