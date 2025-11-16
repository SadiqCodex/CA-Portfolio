import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CTASection.scss";

const CTASection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 80 });
  }, []);

  return (
    <section className="cta-section">
      <div className="container">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-aos="fade-up"
        >
          Ready to Get Started?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-aos="fade-up"
        >
          Contact us today for a consultation and let us help you achieve your
          financial goals.
        </motion.p>

        <motion.button
          className="cta-btn"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          data-aos="zoom-in"
        >
          Schedule Consultation
        </motion.button>

      </div>
    </section>
  );
};

export default CTASection;
