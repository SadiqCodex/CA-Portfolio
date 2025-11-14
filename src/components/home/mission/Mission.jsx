import { motion } from "framer-motion";
import "./Mission.scss";

const Mission = () => {
  return (
    <section className="mission-section">
      <div className="mission-overlay"></div>

      <motion.div
        className="mission-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Mission & Vision
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          Our mission is to deliver{" "}
          <strong>integrity-driven, growth-focused services</strong> that empower
          businesses to achieve sustainable success. We combine deep financial
          expertise with innovative solutions to help our clients navigate
          complex regulatory landscapes while maximizing their growth potential.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.85 }}
        >
          We envision being the most trusted financial partner for businesses
          across India, setting new standards in professional excellence and
          client satisfaction through transparency, innovation, and unwavering
          commitment to quality.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Mission;
