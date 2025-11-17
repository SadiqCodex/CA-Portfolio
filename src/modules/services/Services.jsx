import React, { useState } from "react";

// MAIN SERVICE COMPONENTS
import Audit from "../../components/Services/audit/audit";
// import Tax from "../../components/Services/tax/Tax";
// import GiftCity from "../../components/Services/gift-city/GiftCity";

// AUDIT SUB-SERVICES
import AuditAssurance from "../../components/Services/audit/sub-services/audit-assurnace/audit-assurance";
import ManagementAudit from "../../components/Services/audit/sub-services/management-audit/management-audit";
import ProjectFinancing from "../../components/Services/audit/sub-services/project-financing/project-financing";
// import SecretarialAudit from "../../components/Services/audit/sub-services/secretarial-audit/secretarial-audit";

import "./services.scss";

const Services = () => {
  const [activeService, setActiveService] = useState("audit");

  const renderService = () => {
    switch (activeService) {
      case "audit":
        return <Audit />;
      case "audit-assurance":
        return <AuditAssurance />;
      case "management-audit":
        return <ManagementAudit />;
      case "project-financing":
        return <ProjectFinancing />;
      case "secretarial-audit":
        return <SecretarialAudit />;

      case "tax":
        return <Tax />;

      case "gift-city":
        return <GiftCity />;

      default:
        return <Audit />;
    }
  };

  return (
    <main className="services-page">
      {/* LEFT SIDEBAR */}
      <aside className="services-sidebar">
        <h3 className="sidebar-title">Our Services</h3>

        <ul className="sidebar-menu">
          <li
            className={activeService === "audit" ? "active" : ""}
            onClick={() => setActiveService("audit")}
          >
            Audit & Assurance
          </li>

          {/* SUB-MENU */}
          {activeService === "audit" && (
            <ul className="sub-menu">
              <li
                className={
                  activeService === "audit-assurance" ? "active" : ""
                }
                onClick={() => setActiveService("audit-assurance")}
              >
                Audit & Assurance
              </li>

              <li
                className={
                  activeService === "management-audit" ? "active" : ""
                }
                onClick={() => setActiveService("management-audit")}
              >
                Management Audit
              </li>

              <li
                className={
                  activeService === "project-financing" ? "active" : ""
                }
                onClick={() => setActiveService("project-financing")}
              >
                Project Financing
              </li>

              <li
                className={
                  activeService === "secretarial-audit" ? "active" : ""
                }
                onClick={() => setActiveService("secretarial-audit")}
              >
                Secretarial Audit
              </li>
            </ul>
          )}

          <li
            className={activeService === "tax" ? "active" : ""}
            onClick={() => setActiveService("tax")}
          >
            Tax Services
          </li>

          <li
            className={activeService === "gift-city" ? "active" : ""}
            onClick={() => setActiveService("gift-city")}
          >
            GIFT City Advisory
          </li>
        </ul>
      </aside>

      {/* RIGHT SIDE CONTENT */}
      <section className="services-content">{renderService()}</section>
    </main>
  );
};

export default Services;
