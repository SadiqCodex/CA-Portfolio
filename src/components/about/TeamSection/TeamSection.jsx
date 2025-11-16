import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import PersonIcon from "@mui/icons-material/Person";
import BorderColorIcon from "@mui/icons-material/BorderColor";

import "./TeamSection.scss";

const TeamSection = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "CA Ahmed Al-Mansoori (FCA, LLM)",
      designation: "Partner",
      specialization:
        "Ahmed Al-Mansoori is a Senior Chartered Accountant based in Dubai. He specializes in International Taxation, Corporate Structuring, UAE VAT Compliance, and Legal Consultancy. He represents clients before UAE Tax Authorities and advises multinational corporations on cross-border taxation and regulatory compliance.",
      icon: <PersonIcon />,
    },
    {
      id: 2,
      name: "CA Fatima Al-Zahra (FCA, LLB)",
      designation: "Senior Partner",
      specialization:
        "Fatima Al-Zahra is a Senior Chartered Accountant and Legal Advisor in Dubai. She focuses on Audit & Assurance, Financial Advisory, Cross-border Taxation, and Company Law matters. She has represented clients in UAE courts, arbitral tribunals, and provides consultancy to corporates and individuals on complex legal and financial issues.",
      icon: <PersonIcon />,
    },
  ];

  // 🔥 Stagger Animation Container
  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.22 },
    },
  };

  // 🔥 Card Reveal Animation
  const cardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.92 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <section className="team-section">
      <div className="container">
        {/* Title Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Our Team
        </motion.h2>

        {/* Stagger Container */}
        <motion.div
          className="team-grid"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="team-card"
              variants={cardVariant}
              data-aos="fade-up"
              whileHover={{
                translateY: -8,
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(0,255,224,0.25)",
              }}
              transition={{ type: "spring", stiffness: 160, damping: 12 }}
            >
              {/* Profile Photo / Icon */}
              <motion.div
                className="photo-placeholder"
                whileHover={{ rotate: 6 }}
                transition={{ duration: 0.3 }}
              >
                {member.icon}
              </motion.div>

              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {member.name}
              </motion.h3>

              <p className="designation">{member.designation}</p>

              <motion.p
                className="specialization"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {member.specialization}
              </motion.p>

              {/* Signature */}
              <motion.div
                className="signature-placeholder"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.15 }}
              >
                <BorderColorIcon /> Signature
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
