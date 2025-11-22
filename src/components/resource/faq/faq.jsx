import { useState } from "react";
import "./faq.scss";

export default function FAQSection() {
  const faqs = [
    {
      q: "What documents are required for GST registration in 2025?",
      a: "You need PAN, Aadhaar, latest electricity bill or lease agreement for business address, bank statement or cancelled cheque, and Class-3 DSC for companies and LLPs.",
    },
    {
      q: "How long does it take to incorporate a Private Limited Company?",
      a: "Most incorporations are completed within 48–72 hours after name approval (RUN) and verification of subscriber documents under MCA V3.",
    },
    {
      q: "Which ITR form is suitable for salaried individuals?",
      a: "ITR-1 (Sahaj) is used for income from salary, one house property, or interest. For capital gains, business income, or foreign assets, file ITR-2/3.",
    },
    {
      q: "Are small and medium businesses required to maintain books of accounts?",
      a: "Yes. Under Income Tax Section 44AA and GST Act, maintaining proper digital books and invoices is mandatory for compliance.",
    },
    {
      q: "What is the due date for filing GST returns?",
      a: "GSTR-1 is monthly/quarterly as per turnover. GSTR-3B is monthly. Late fees apply as per CBIC rules.",
    },
    {
      q: "Is DSC mandatory for company and LLP compliance filings?",
      a: "Yes. All MCA filings including AOC-4, MGT-7, DIR KYC and GST registrations for companies require a valid Class-3 DSC.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq-section" id="faq">
      <h2 className="section-title">
        Frequently <span>Asked Questions</span>
      </h2>
      <p className="section-subtitle">
        Clear, updated and professionally curated answers for all compliance &
        tax-related queries.
      </p>

      <div className="faq-container">
        {faqs.map((faq, i) => (
          <div
            className={`faq-card ${openIndex === i ? "active" : ""}`}
            key={i}
            onClick={() => toggleFAQ(i)}
          >
            <div className="faq-header">
              <h3 className="faq-question">{faq.q}</h3>

              <span className={`arrow-icon ${openIndex === i ? "open" : ""}`}>
                ▾
              </span>
            </div>

            <div className="faq-body">
              <p className="faq-answer">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
