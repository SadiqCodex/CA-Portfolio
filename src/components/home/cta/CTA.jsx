import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CTA.scss";

const CTA = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="cta-section">
      <motion.div
        className="cta-container"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        data-aos="zoom-in"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          data-aos="fade-down"
        >
          Let's Build Financial Clarity Together
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          data-aos="fade-up"
        >
          Ready to take your business to the next level? Our expert team is here
          to guide you every step of the way.
        </motion.p>

        {/* Button */}
        <motion.button
          className="cta-button"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          data-aos="fade-up"
          whileHover={{
            scale: 1.08,
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Book Consultation
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CTA;
