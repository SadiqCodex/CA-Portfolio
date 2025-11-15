import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import StarIcon from "@mui/icons-material/Star";
import VerifiedIcon from "@mui/icons-material/Verified";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./ValuesSection.scss";

const ValuesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
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
  ];

  return (
    <section className="values-section">
      <div className="container">

        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Our Values
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="subtitle"
        >
          We believe in integrity, precision, and long-term partnerships.
        </motion.p>

        <div className="values-grid">
          {values.map((item, index) => (
            <motion.div
              key={index}
              className="value-card"
              data-aos="fade-up"
              transition={{ delay: index * 0.25 }}
              whileHover={{ scale: 1.05, translateY: -6 }}
            >
              <div className="icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ValuesSection;
