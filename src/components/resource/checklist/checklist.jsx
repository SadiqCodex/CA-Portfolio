import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "./checklist.scss";
// import { CheckCircle } from "lucide-react";

export default function ChecklistSection() {
  const checklists = [
    {
      title: "GST Registration Checklist",
      desc: "Required documents and stepwise checklist for new GST registration.",
      steps: [
        "PAN of applicant",
        "Aadhar of authorized person",
        "Business address proof",
        "Bank account details",
        "Digital Signature (Class 3)",
      ],
    },
    {
      title: "Company Incorporation Checklist",
      desc: "All mandatory documents required for a Private Limited Company setup.",
      steps: [
        "Director PAN & Aadhar",
        "Passport size photos",
        "Utility bill of office",
        "NOC from owner",
        "Capital contribution details",
      ],
    },
    {
      title: "Income Tax Filing Checklist",
      desc: "Documents needed for filing individual or business ITR.",
      steps: [
        "PAN & Aadhar",
        "Form 16 / Salary slips",
        "Bank statements",
        "Investment proofs",
        "Previous year ITR copy",
      ],
    },
  ];

  return (
    <section className="checklist-section" id="checklist">
      <h2 className="section-title">Important <span>Checklists</span></h2>
      <p className="section-subtitle">
        Structured and easy-to-follow checklists for registrations, filings, and compliance.
      </p>

      <div className="checklist-grid">
        {checklists.map((item, index) => (
          <div className="checklist-card" key={index}>
            <h3>{item.title}</h3>
            <p className="desc">{item.desc}</p>

            <ul>
              {item.steps.map((step, i) => (
                <li key={i}>
                  <span className="icon">✓</span> {step}
                </li>
              ))}
            </ul>

            <button className="download-btn">Download Checklist ⬇</button>
          </div>
        ))}
      </div>
    </section>
  );
}
