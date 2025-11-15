import React from "react";
import "./ServicesGrid.scss";

const ServicesGrid = () => {
  const services = [
    {
      icon: "💰",
      title: "Taxation Services",
      subtitle: "Corporate & Individual",
      description:
        "Complete tax planning, filing, and advisory for individuals and businesses with expert guidance on tax optimization.",
    },
    {
      icon: "📊",
      title: "GST Advisory",
      subtitle: "& Compliance",
      description:
        "End-to-end GST registration, filing, compliance management, and advisory services for seamless operations.",
    },
    {
      icon: "🔍",
      title: "Auditing",
      subtitle: "& Financial Reporting",
      description:
        "Statutory and internal audits ensuring transparency, compliance, and accurate financial reporting.",
    },
    {
      icon: "🚀",
      title: "Startup Consulting",
      subtitle: "& Business Advisory",
      description:
        "Company formation, funding guidance, business planning, and strategic advisory for startups.",
    },
    {
      icon: "📋",
      title: "ITR Filing",
      subtitle: "& Assessment Support",
      description:
        "Professional income tax return filing and comprehensive support during assessment proceedings.",
    },
    {
      icon: "💼",
      title: "Financial Planning",
      subtitle: "& Advisory",
      description:
        "Strategic financial planning, investment advisory, and wealth management solutions for long-term growth.",
    },
  ];

  return (
    <section className="services-grid-section">
      <div className="container">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-subtitle">{service.subtitle}</p>
              <p className="service-description">{service.description}</p>
              <button className="service-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
