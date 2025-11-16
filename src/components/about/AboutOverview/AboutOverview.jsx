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
        {/* Title */}
        <motion.h2
          className="overview-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          data-aos="fade-down"
        >
          About Our Firm
        </motion.h2>

        {/* Underline */}
        <motion.div
          className="overview-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        ></motion.div>

        {/* Cards Grid */}
        <div className="overview-cards">
          {/* CARD 1 */}
          <motion.div
            className="overview-card"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{
              scale: 1.03,
              y: -5,
              transition: { duration: 0.3 },
            }}
          >
            <motion.p
              className="overview-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Established in 1987, Dhiren Shah & Co. has grown into one of Gujarat’s
              most trusted Chartered Accountancy firms. With decades of experience
              and a strong foundation built by visionary leadership, the firm
              combines seasoned expertise with the energy of young, dynamic
              professionals.
            </motion.p>

            <motion.p
              className="overview-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Our practice spans across statutory audits, internal audits,
              taxation, corporate and commercial laws, foreign exchange
              regulations, financial advisory, and compliance management—offering
              clients a robust and dependable support system for all their
              financial and regulatory needs.
            </motion.p>

            <motion.p
              className="overview-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Our philosophy is driven by the principles of dedication,
              discipline, and determination. We maintain the highest standards of
              professional ethics, delivering transparent, timely, and
              value-driven services to clients across diverse sectors.
            </motion.p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            className="overview-card"
            data-aos="fade-up"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{
              scale: 1.03,
              y: -5,
              transition: { duration: 0.3 },
            }}
          >
            <motion.p
              className="overview-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              With a legacy spanning more than 30 years, the firm has successfully
              handled numerous complex matters, achieving a consistent track
              record of excellence. Our ability to identify opportunities and
              navigate intricate financial landscapes continues to strengthen the
              trust placed in us by clients.
            </motion.p>

            <motion.p
              className="overview-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We operate as a one-stop consulting ecosystem with professional
              associates in Anand, Baroda, Rajkot, Mumbai, Pune, and Delhi—
              ensuring seamless nationwide support and access to subject-matter
              experts across multiple domains.
            </motion.p>

            <motion.p
              className="overview-highlight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Specialized expertise in UAE Corporate Tax Advisory, VAT Compliance,
              and Regulatory Consulting—serving clients across Dubai and the wider
              UAE.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
