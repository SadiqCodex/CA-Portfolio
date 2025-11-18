import React, { useState } from "react";

// MAIN SERVICES
import Audit from "../../components/Services/audit/audit";
import Tax from "../../components/Services/tax/tax";
import BusinessRestructuring from "../../components/Services/business-restructuring/business-restructuring";
import Compliance from "../../components/Services/compliance/compliance";
import CorporateLoan from "../../components/Services/corporate-loan/corporate-loan";
// AUDIT SUB-SERVICES
import AuditAssurance from "../../components/Services/audit/sub-services/audit-assurnace/audit-assurance";
import ManagementAudit from "../../components/Services/audit/sub-services/management-audit/management-audit";
import ProjectFinancing from "../../components/Services/audit/sub-services/project-financing/project-financing";
import SecretarialAudit from "../../components/Services/audit/sub-services/secretarial-audit/secretarial-audit";

// TAX SUB-SERVICES
// import DirectTax from "../../components/Services/tax/sub-services/direct-tex/";
// import GST from "../../components/Services/tax/sub-services/gst/gst";
// import InternationalTax from "../../components/Services/tax/sub-services/international-tax/international-tax";
// import TDSCompliance from "../../components/Services/tax/sub-services/tds-compliance/tds-compliance";

import "./services.scss";

const Services = () => {
  const [activeService, setActiveService] = useState("audit");

  const renderService = () => {
    switch (activeService) {
      // AUDIT
      case "audit": return <Audit />;
      case "audit-assurance": return <AuditAssurance />;
      case "management-audit": return <ManagementAudit />;
      case "project-financing": return <ProjectFinancing />;
      case "secretarial-audit": return <SecretarialAudit />;

      // TAX
      case "tax": return <Tax />;
      case "direct-tax": return <DirectTax />;
      case "gst": return <GST />;
      case "international-tax": return <InternationalTax />;
      case "tds-compliance": return <TDSCompliance />;
      
      // business-restructuring
      case "business-restructuring": return <BusinessRestructuring/>;
      // Compliance
      case "compliance": return <Compliance />;
      //corporate loan
      case "corporate-loan": return <CorporateLoan />;

      default: return <Audit />;
    }
  };

  return (
    <main className="services-page">
      {/* LEFT SIDEBAR */}
      <aside className="services-sidebar">
        <h3 className="sidebar-title">Our Services</h3>

        <ul className="sidebar-menu">
          {/* AUDIT MAIN */}
          <li
            className={activeService === "audit" ? "active" : ""}
            onClick={() => setActiveService("audit")}
          >
            Audit
          </li>

          {/* AUDIT SUB-MENU */}
          {activeService === "audit" && (
            <ul className="sub-menu">
              <li
                className={activeService === "audit-assurance" ? "active" : ""}
                onClick={() => setActiveService("audit-assurance")}
              >
                Audit & Assurance
              </li>

              <li
                className={activeService === "management-audit" ? "active" : ""}
                onClick={() => setActiveService("management-audit")}
              >
                Management Audit
              </li>

              <li
                className={activeService === "project-financing" ? "active" : ""}
                onClick={() => setActiveService("project-financing")}
              >
                Project Financing
              </li>

              <li
                className={activeService === "secretarial-audit" ? "active" : ""}
                onClick={() => setActiveService("secretarial-audit")}
              >
                Secretarial Audit
              </li>
            </ul>
          )}

          {/* TAX MAIN */}
          <li
            className={activeService === "tax" ? "active" : ""}
            onClick={() => setActiveService("tax")}
          >
            Tax Services
          </li>

          {/* TAX SUB-MENU */}
          {activeService === "tax" && (
            <ul className="sub-menu">
              <li
                className={activeService === "direct-tax" ? "active" : ""}
                onClick={() => setActiveService("direct-tax")}
              >
                Direct Tax
              </li>

              <li
                className={activeService === "gst" ? "active" : ""}
                onClick={() => setActiveService("gst")}
              >
                GST
              </li>

              <li
                className={activeService === "international-tax" ? "active" : ""}
                onClick={() => setActiveService("international-tax")}
              >
                International Tax
              </li>

              <li
                className={activeService === "tds-compliance" ? "active" : ""}
                onClick={() => setActiveService("tds-compliance")}
              >
                TDS Compliance
              </li>
            </ul>
          )}
               {/* business-restructuring*/}
          <li
            className={activeService === "business-restructuring" ? "active" : ""}
            onClick={() => setActiveService("business-restructuring")}
          >
            Business-restructuring
          </li>
                {/* business-restructuring*/}
          <li
            className={activeService === "compliance" ? "active" : ""}
            onClick={() => setActiveService("compliance")}
          >
            Compliance
          </li>
          <li
            className={activeService === "corporate-loan" ? "active" : ""}
            onClick={() => setActiveService("corporate-loan")}
          >
            Corporate-Loan
          </li>
        </ul>
      </aside>

      {/* RIGHT CONTENT */}
      <section className="services-content">
        {renderService()}
      </section>
    </main>
  );
};

export default Services;
