import { motion } from "framer-motion";
import { Container, Typography } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import Cover from "../../../assets/images/cover.png";   // Correct Import
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
        backgroundImage: `url(${Cover})`,   // ✅ Using imported image here
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "150px 0",
        position: "relative",
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.55)",
          zIndex: 1,
        }}
      ></div>

      <Container
        maxWidth="md"
        className="text-center"
        style={{ position: "relative", zIndex: 2 }}
      >
        {/* Firm Short Name */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Typography
            variant="h3"
            style={{
              color: "#fff",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            Saif & Co.
          </Typography>

          {/* Premium Underline */}
          <div
            style={{
              width: "70px",
              height: "4px",
              background: "#7ed957",
              margin: "12px auto 0 auto",
              borderRadius: "4px",
            }}
          ></div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <Typography
            variant="h6"
            style={{
              color: "rgba(255,255,255,0.9)",
              marginTop: "16px",
              lineHeight: "1.6",
            }}
          >
            Chartered Accountant Firm | Dubai, UAE
          </Typography>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutHero;
