import { motion } from "framer-motion";
import { Container, Typography } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import Cover from "../../../assets/images/cover.png";
import "aos/dist/aos.css";
import "./AboutHero.scss";

const AboutHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      className="about-hero"
      style={{
        backgroundImage: `url(${Cover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      <Container maxWidth="md" className="text-center hero-content">
        {/* Firm Name */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Typography variant="h3" className="firm-title">
            Saif & Co.
          </Typography>

          <motion.div
            className="title-underline"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          ></motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Typography variant="h6" className="firm-subtitle" data-aos="fade-up">
            Chartered Accountant Firm | Dubai, UAE
          </Typography>
        </motion.div>

        {/* Floating Line Animation */}
        <motion.div
          className="floating-line"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.1, ease: "easeOut" }}
        />
      </Container>
    </section>
  );
};

export default AboutHero;
