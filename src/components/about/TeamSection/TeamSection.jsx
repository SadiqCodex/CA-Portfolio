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
      name: "CA Rohan Sharma",
      designation: "Senior Chartered Accountant",
      specialization:
        "Corporate Taxation, GST Advisory, Audit & Compliance",
      icon: <PersonIcon fontSize="large" />,
    },
    {
      id: 2,
      name: "CA Meera Kapoor",
      designation: "Chartered Accountant",
      specialization:
        "Financial Reporting, Startup Consulting, ITR Filing & Assessments",
      icon: <PersonIcon fontSize="large" />,
    },
  ];

  return (
    <section className="team-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Team
        </motion.h2>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="team-card"
              data-aos="fade-up"
              transition={{ delay: index * 0.25 }}
              whileHover={{ scale: 1.05, translateY: -6 }}
            >
              <div className="photo-placeholder">{member.icon}</div>

              <h3>{member.name}</h3>
              <p className="designation">{member.designation}</p>
              <p className="specialization">{member.specialization}</p>

              <div className="signature-placeholder">
                <BorderColorIcon /> Signature
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
