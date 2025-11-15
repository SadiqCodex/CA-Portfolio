import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import VerifiedIcon from "@mui/icons-material/Verified";

import "./AwardsSection.scss";

const AwardsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const awards = [
    {
      id: 1,
      icon: <EmojiEventsIcon fontSize="large" />,
      text: "ISO Certified Accounting Firm",
    },
    {
      id: 2,
      icon: <WorkspacePremiumIcon fontSize="large" />,
      text: "Top 10 CA Firms in Rajasthan 2024",
    },
    {
      id: 3,
      icon: <VerifiedIcon fontSize="large" />,
      text: "Member of ICAI",
    },
  ];

  return (
    <section className="awards-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Awards & Certifications
        </motion.h2>

        <div className="awards-grid">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              className="award-item"
              data-aos="fade-up"
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, translateY: -6 }}
            >
              <div className="icon">{award.icon}</div>
              <p>{award.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
