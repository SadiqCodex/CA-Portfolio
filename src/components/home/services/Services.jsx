import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.scss";

const Services = () => {
  const services = [
    {
      icon: "💼",
      title: "Corporate Finance",
      description: "Comprehensive financial planning, project appraisal, and funding solutions for business growth."
    },
    {
      icon: "🔍",
      title: "Audit & Assurance",
      description: "Statutory and internal audits ensuring transparency, compliance, and financial integrity."
    },
    {
      icon: "💰",
      title: "Taxation Services",
      description: "Complete tax planning, filing, GST management, and regulatory compliance solutions."
    },
    {
      icon: "📊",
      title: "Business Consulting",
      description: "Strategic advisory services for business optimization, compliance, and growth strategies."
    },
    {
      icon: "🏗️",
      title: "Industry Setup",
      description: "End-to-end assistance with business registration, licensing, and regulatory approvals."
    },
    {
      icon: "📋",
      title: "Compliance Management",
      description: "Ongoing regulatory compliance, ROC filings, and statutory requirement management."
    }
  ];

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="services-section">
      <div className="services-container">

        {/* HEADER */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2>
            We Deliver <span className="highlight">Value-Based Services</span>
          </h2>
          <p>Empowering businesses with expert financial guidance and comprehensive solutions</p>
        </motion.div>

        {/* GRID */}
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={index * 120}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <motion.div
                className="service-icon"
                initial={{ rotate: -10, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
