import { useEffect } from "react";
import "./caseStudies.scss";
import { ArrowUpRight } from "lucide-react"; // NEW PREMIUM ICON

export default function CaseStudies() {
  const cases = [
    {
      id: 1,
      title: "Optimizing GST Compliance for a Manufacturing Company",
      result: "Reduced penalties by 92% & automated monthly filings.",
      category: "GST / Compliance",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&q=80",
    },
    {
      id: 2,
      title: "End-to-End FEMA Reporting for Foreign Investment",
      result: "Completed FIRMS reporting in 24 hours with zero errors.",
      category: "FEMA / RBI",
      image:
        "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&q=80",
    },
    {
      id: 3,
      title: "Revamping Internal Audit Systems for a Tech Startup",
      result: "Achieved 40% cost saving with automated audit workflows.",
      category: "Audit",
      image:
        "https://images.unsplash.com/photo-1555374018-13a8994ab246?auto=format&q=80",
    },
  ];

  return (
    <section className="case-studies">
      <div className="container">
        <div className="header">
          <h2>
            Real <span>Case Studies</span>
          </h2>
          <p>See how our expertise has helped clients achieve measurable results.</p>
        </div>

        <div className="grid">
          {cases.map((c) => (
            <div className="study-card" key={c.id}>
              <div className="img-box">
                <img src={c.image} alt={c.title} />
              </div>

              <div className="content">
                <span className="category">{c.category}</span>

                <h3>{c.title}</h3>
                <p className="result">{c.result}</p>

                <button className="cta">
                  Read Full Case Study <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
