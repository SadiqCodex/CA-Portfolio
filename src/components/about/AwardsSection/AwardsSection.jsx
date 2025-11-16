import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import VerifiedIcon from "@mui/icons-material/Verified";
import StarIcon from "@mui/icons-material/Star";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

import "./AwardsSection.scss";

const AwardsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const awards = [
    { id: 1, icon: <EmojiEventsIcon />, text: "ISO Certified Accounting Firm" },
    { id: 2, icon: <WorkspacePremiumIcon />, text: "Top 10 CA Firms in Rajasthan 2024" },
    { id: 3, icon: <VerifiedIcon />, text: "Member of ICAI" },
    { id: 4, icon: <StarIcon />, text: "Best Corporate Tax Advisory Award 2023" },
    { id: 5, icon: <SchoolIcon />, text: "Accredited Training Partner for CA Students" },
    { id: 6, icon: <BusinessCenterIcon />, text: "Recognized for Excellence in Audit & Assurance" },
  ];

  // ✨ Framer Motion Container Animation (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 },
    },
  };

  // ✨ Each Card Animation
  const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="awards-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Awards & Certifications
        </motion.h2>

        {/* Parent Grid Animation */}
        <motion.div
          className="awards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {awards.map((award) => (
            <motion.div
              variants={cardVariants}
              key={award.id}
              className="award-item"
              data-aos="fade-up"
              whileHover={{
                scale: 1.07,
                translateY: -8,
                boxShadow: "0 15px 35px rgba(0, 255, 224, 0.25)",
              }}
              transition={{ type: "spring", stiffness: 180, damping: 10 }}
            >
              <motion.div
                className="icon"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 8 }}
                transition={{ duration: 0.3 }}
              >
                {award.icon}
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {award.text}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};


export default AwardsSection;