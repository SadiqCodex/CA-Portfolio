// import { Calculator, FileSearch, Landmark, Receipt, Building2 } from "lucide-react";
import "./ToolsCalculators.scss";

export default function ToolsCalculators() {
  const tools = [
    {
      id: 1,
      title: "Tax Calculator",
      subtitle: "Estimate your tax liability instantly",
      icon: <span>🧮</span>,
      btn: "Calculate Tax",
    },
    {
      id: 2,
      title: "GST Input Credit Checker",
      subtitle: "Verify ITC eligibility for purchases",
      icon: <span>🧾</span>,
      btn: "Check GST ITC",
    },
    {
      id: 3,
      title: "Company Compliance Tracker",
      subtitle: "Track ROC / MCA due dates",
      icon: <span>🏢</span>,
      btn: "Track Compliance",
    },
    {
      id: 4,
      title: "FEMA / RBI Reporting Tool",
      subtitle: "Generate automatic FEMA reports",
      icon: <span>🏛️</span>,
      btn: "Generate Report",
    },
    {
      id: 5,
      title: "Document Checklist Generator",
      subtitle: "Create custom CA/finance checklists",
      icon: <span>📋</span>,
      btn: "Generate Checklist",
    },

    // ⭐ Added 3 New Premium Tools Below

    {
      id: 6,
      title: "VAT Return Filing Helper",
      subtitle: "Auto-calculate UAE VAT + summarize filing values",
      icon: <span>💰</span>,
      btn: "Calculate VAT",
    },
    {
      id: 7,
      title: "Payroll & Gratuity Calculator (UAE)",
      subtitle: "Compute salary, benefits & end-of-service gratuity",
      icon: <span>🧑‍💼</span>,
      btn: "Calculate Gratuity",
    },
    {
      id: 8,
      title: "Audit Risk Score Analyzer",
      subtitle: "Get automated audit risk scoring for your business",
      icon: <span>⚖️</span>,
      btn: "Analyze Risk",
    },
  ];

  return (
    <section className="tools-section">
      <div className="container">
        <div className="section-header">
          <h2>
            Smart <span>Tools & Calculators</span>
          </h2>
          <p>Powerful tools to simplify your financial and compliance workflow.</p>
        </div>

        <div className="tools-grid">
          {tools.map((tool) => (
            <div className="tool-card" key={tool.id}>
              <div className="icon">{tool.icon}</div>

              <h3>{tool.title}</h3>
              <p>{tool.subtitle}</p>

              <button className="cta-btn">{tool.btn} →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
