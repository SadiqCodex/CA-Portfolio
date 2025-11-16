import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import "./ServicesGrid.scss";

const ServicesGrid = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 60 });
  }, []);

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

        <motion.h2
          className="services-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          data-aos="fade-up"
        >
          Our Professional Services
        </motion.h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              data-aos="fade-up"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ scale: 1.04 }}
            >
              <motion.div className="service-icon" whileHover={{ scale: 1.2 }}>
                {service.icon}
              </motion.div>

              <h3>{service.title}</h3>
              <p className="service-subtitle">{service.subtitle}</p>
              <p className="service-description">{service.description}</p>

              <motion.button
                className="service-btn"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
