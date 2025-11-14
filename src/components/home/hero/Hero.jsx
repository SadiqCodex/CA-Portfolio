import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.scss";
import CAImage from "../../../assets/images/CA_dp.png";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero-wrapper">

        {/* --------------------------
            LEFT CONTENT
        --------------------------- */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          data-aos="fade-right"
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            data-aos="fade-down"
          >
            Empowering Businesses with <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.9 }}
            >
              Trust, Transparency & Tax Expertise
            </motion.span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            data-aos="fade-up"
          >
            We are a professional firm of Chartered Accountants offering tailored
            solutions in <strong>Taxation, Audit, Compliance, and Financial
              Consulting</strong>. Our mission is to help clients grow confidently
            with accuracy, integrity, and foresight.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            data-aos="fade-up"
          >
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
            >
              📅 Schedule a Consultation
            </motion.button>

            <motion.button
              className="btn-outline"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
            >
              💼 Explore Our Services
            </motion.button>
          </motion.div>

          {/* TRUST BADGES */}
          <motion.div
            className="hero-trust"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            data-aos="fade-up"
          >
            <div className="trust-item">
              <span className="trust-icon">🧾</span>
              <p>ICAI Certified</p>
            </div>
            <div className="trust-item">
              <span className="trust-icon">💼</span>
              <p>12+ Years</p>
            </div>
            <div className="trust-item">
              <span className="trust-icon">🌐</span>
              <p>500+ Clients</p>
            </div>
          </motion.div>
        </motion.div>

        {/* --------------------------
            RIGHT IMAGE (3D + FLOAT)
        --------------------------- */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "backOut" }}
          viewport={{ once: true }}
          data-aos="zoom-in"
        >
          <motion.div
            className="image-frame"
            whileHover={{
              rotateY: 10,
              rotateX: 5,
              scale: 1.03,
              transition: { duration: 0.4 },
            }}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            }}
          >
            <img
              src={CAImage}
              alt="Professional Chartered Accountant"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
