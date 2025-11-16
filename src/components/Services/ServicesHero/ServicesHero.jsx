import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import "./ServicesHero.scss";

const ServicesHero = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="services-hero">
      <div className="container">

        {/* Heading Animation */}
        <motion.h1
          data-aos="fade-down"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h1>

        {/* Subtitle Animation */}
        <motion.p
          data-aos="fade-up"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Comprehensive financial solutions tailored to your business needs
        </motion.p>

      </div>
    </section>
  );
};

export default ServicesHero;
