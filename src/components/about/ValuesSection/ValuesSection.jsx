import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import StarIcon from "@mui/icons-material/Star";
import VerifiedIcon from "@mui/icons-material/Verified";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import "./ValuesSection.scss";

const ValuesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic", offset: 60 });
  }, []);

  const values = [
    {
      icon: <VerifiedIcon />,
      title: "Integrity",
      text: "We maintain transparency, honesty, and ethical practices in every financial decision.",
    },
    {
      icon: <StarIcon />,
      title: "Precision",
      text: "Our work is detail-oriented, accurate, and thoroughly audited for reliability.",
    },
    {
      icon: <FavoriteIcon />,
      title: "Commitment",
      text: "We focus on long-term client partnerships based on trust and consistent support.",
    },
    {
      icon: <LightbulbIcon />,
      title: "Innovation",
      text: "We leverage creative solutions and modern technologies to optimize financial strategies.",
    },
    {
      icon: <SupportAgentIcon />,
      title: "Client Focus",
      text: "Our clients’ needs are our priority, and we provide personalized advisory at every step.",
    },
    {
      icon: <TrendingUpIcon />,
      title: "Growth",
      text: "We help businesses scale sustainably with smart financial planning and tax optimization.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.16, delayChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="values-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          data-aos="fade-down"
        >
          Our Values
        </motion.h2>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          viewport={{ once: true }}
        >
          We believe in integrity, precision, and long-term partnerships.
        </motion.p>

        <motion.div
          className="values-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {values.map((item, idx) => (
            <motion.div
              key={idx}
              className="value-card"
              variants={cardVariants}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              whileHover={{ scale: 1.04, translateY: -6 }}
              transition={{ type: "spring", stiffness: 160, damping: 12 }}
            >
              <motion.div
                className="icon-box"
                initial={{ rotate: 0, scale: 1 }}
                whileHover={{ rotate: 8, scale: 1.03 }}
                transition={{ duration: 0.35 }}
              >
                {item.icon}
              </motion.div>

              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.08 }}
              >
                {item.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.18 }}
              >
                {item.text}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
