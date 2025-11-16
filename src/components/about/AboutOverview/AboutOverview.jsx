import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutOverview.scss";

const AboutOverview = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="about-overview-section">
      <div className="about-overview-container">
        <motion.h2
          className="overview-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-aos="fade-down"
        >
          About Our Firm
        </motion.h2>

        <motion.div
          className="overview-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        ></motion.div>

        <div className="overview-cards">
          <motion.div
            className="overview-card"
            data-aos="fade-up"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <p className="overview-text">
              Established in 1987, Dhiren Shah & Co. has grown into one of Gujarat’s most trusted Chartered Accountancy firms. With decades of experience and a strong foundation built by visionary leadership, the firm combines seasoned expertise with the energy of young, dynamic professionals.
            </p>
            <p className="overview-text">
              Our practice spans across statutory audits, internal audits, taxation, corporate and commercial laws, foreign exchange regulations, financial advisory, and compliance management—offering clients a robust and dependable support system for all their financial and regulatory needs.
            </p>
            <p className="overview-text">
              Our philosophy is driven by the principles of dedication, discipline, and determination. We maintain the highest standards of professional ethics, delivering transparent, timely, and value-driven services to clients across diverse sectors.
            </p>
          </motion.div>

          <motion.div
            className="overview-card"
            data-aos="fade-up"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <p className="overview-text">
              With a legacy spanning more than 30 years, the firm has successfully handled numerous complex matters, achieving a consistent track record of excellence. Our ability to identify opportunities and navigate intricate financial landscapes continues to strengthen the trust placed in us by clients.
            </p>
            <p className="overview-text">
              We operate as a one-stop consulting ecosystem with professional associates in Anand, Baroda, Rajkot, Mumbai, Pune, and Delhi—ensuring seamless nationwide support and access to subject-matter experts across multiple domains.
            </p>
            <p className="overview-highlight">
              Specialized expertise in UAE Corporate Tax Advisory, VAT Compliance, and Regulatory Consulting—serving clients across Dubai and the wider UAE.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
