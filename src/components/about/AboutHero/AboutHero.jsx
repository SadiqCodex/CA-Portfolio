import { motion } from "framer-motion";
import { Container, Typography } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./AboutHero.scss";

const AboutHero = () => {

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="about-hero">
      <Container maxWidth="md" className="text-center">

        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Typography
            variant="h2"
            className="about-title"
            data-aos="fade-up"
          >
            About Us
          </Typography>
        </motion.div>

        {/* Subtitle Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          <Typography
            variant="h6"
            className="about-desc"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Trusted Chartered Accountant firm with over 10 years of experience
            providing transparent, reliable, and growth-oriented financial services.
          </Typography>
        </motion.div>

      </Container>
    </section>
  );
};

export default AboutHero;
