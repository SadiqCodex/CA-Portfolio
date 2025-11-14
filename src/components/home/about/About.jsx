import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.scss";

const About = () => {

  // Initialize AOS once
  useEffect(() => {
    AOS.init({
      duration: 900,
      offset: 120,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">

        {/* ------------------------------
            LEFT CONTENT (Fade + Slide + AOS)
        --------------------------------*/}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          data-aos="fade-right"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            data-aos="fade-down"
          >
            Who We Are
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            data-aos="fade-up"
          >
            We are a professional firm of Chartered Accountants committed to
            delivering excellence in financial services. With deep expertise in
            taxation, audit, and business consulting, we help organizations
            navigate complex financial landscapes with confidence and precision.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our team combines traditional accounting principles with modern
            technology to provide innovative solutions that drive business
            growth and ensure regulatory compliance.
          </motion.p>
        </motion.div>

        {/* ------------------------------
            RIGHT VISUAL (3D Rotate + Hover + AOS)
        --------------------------------*/}
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "backOut" }}
          viewport={{ once: true }}
          data-aos="zoom-in"
        >
          <motion.div
            className="visual-element"
            whileHover={{
              rotateY: 15,
              rotateX: 10,
              scale: 1.05,
              transition: { duration: 0.4 }
            }}
          >
            <motion.div
              className="floating-icon"
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut"
              }}
            >
              📊
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
