import React from "react";
import "./downloads.scss";

export default function DownloadsSection() {
  const downloads = [
    {
      title: "Income Tax Return Forms (ITR)",
      desc: "Latest ITR forms issued by Income Tax Department.",
      fileType: "PDF",
      link: "/assets/downloads/itr-forms.pdf",
    },
    {
      title: "GST Registration Checklist",
      desc: "Required documents and step-by-step GST registration guide.",
      fileType: "PDF",
      link: "/assets/downloads/gst-checklist.pdf",
    },
    {
      title: "Company Incorporation Forms (MCA)",
      desc: "Latest ROC & company law compliance forms.",
      fileType: "DOC",
      link: "/assets/downloads/mca-forms.docx",
    },
    {
      title: "Tax Planning Guide 2025",
      desc: "Smart planning strategies for individuals and businesses.",
      fileType: "PDF",
      link: "/assets/downloads/tax-planning.pdf",
    },
  ];

  return (
    <section className="downloads-section" id="downloads">
      <h2 className="section-title">Downloadable <span>Resources</span></h2>
      <p className="section-subtitle">
        Essential forms, checklists, guides & compliance documents.
      </p>

      <div className="downloads-grid">
        {downloads.map((item, index) => (
          <div className="download-card" key={index}>
            <div className="file-badge">{item.fileType}</div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <a className="download-btn" href={item.link} download>
              Download ⬇
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
