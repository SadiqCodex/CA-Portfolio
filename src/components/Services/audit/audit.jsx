// Audit.jsx – Parent Component (Clean Generic Audit Page)

import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./audit.scss";

const subServices = [
  {
    id: "audit-assurance",
    title: "Audit & Assurance",
    description:
      "Comprehensive audit services ensuring transparency, compliance, and financial integrity.",
    route: "audit-assurance",
    icon: "🔍",
  },
  {
    id: "project-financing",
    title: "Project Financing",
    description:
      "Expert project financing solutions and feasibility studies for business expansion.",
    route: "project-financing",
    icon: "💼",
  },
  {
    id: "management-audit",
    title: "Management Audit",
    description:
      "Strategic management audits to optimize efficiency, performance, and governance.",
    route: "management-audit",
    icon: "📊",
  },
  {
    id: "secretarial-audit",
    title: "Secretarial Audit",
    description:
      "Ensuring complete corporate compliance and governance regulatory standards.",
    route: "secretarial-audit",
    icon: "📋",
  },
];

export default function Audit() {
  return (
    <div className="audit-page">

      {/* HEADER */}
      <header className="audit-header">
        <div className="header-content">
          <div className="header-icon">🧾</div>

          <div className="header-text">
            <h1 className="title">Audit Services</h1>
            <p className="subtitle">
              Professional and reliable audit solutions ensuring financial accuracy,
              statutory compliance, and organizational transparency.
            </p>
          </div>
        </div>
      </header>

      {/* SUB-SERVICES GRID */}
      <section className="audit-subservices">
        <h2 className="section-title">Our Audit Specializations</h2>

        <div className="grid">
          {subServices.map((service) => (
            <div key={service.id} className="service-card">
              <div className="card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <Link to={service.route} className="learn-btn">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="nested-output">
        <Outlet />
      </div>
    </div>
  );
}
