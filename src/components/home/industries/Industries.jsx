import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Industries.scss";

const Industries = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const industries = [
    { icon: "🚗", name: "Automotive" },
    { icon: "🏦", name: "Banking" },
    { icon: "⚙️", name: "Engineering" },
    { icon: "🧪", name: "Chemicals" },
    { icon: "⚡", name: "Energy" },
    { icon: "🍽️", name: "Food" },
    { icon: "💚", name: "Healthcare" },
    { icon: "🏨", name: "Hospitality" },
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80 },
    },
  };

  return (
    <section className="industries-section">
      <div className="industries-container">
        <h2
          className="industries-title"
          data-aos="fade-up"
        >
          Industries We Serve
        </h2>

        <motion.div
          className="industries-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="industry-card"
              variants={cardVariants}
              whileHover={{ scale: 1.08, y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              data-aos="zoom-in"
            >
              <div className="industry-icon">{industry.icon}</div>
              <h3>{industry.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
