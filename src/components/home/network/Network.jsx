import { motion } from "framer-motion";
import "./Network.scss";

const Network = () => {
  const cities = ["Anand", "Baroda", "Rajkot", "Mumbai", "Pune", "Delhi"];

  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="network-section">
      <div className="network-container">
        <motion.div
          className="network-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="highlight">Strong</span> Domestic Network
          </motion.h2>

          <motion.div
            className="underline-glow"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 100, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          />

          <motion.p
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            We have associates in{" "}
            {cities.map((city, index) => (
              <motion.span
                key={index}
                variants={itemVariant}
                className="city-tag"
                whileHover={{
                  scale: 1.1,
                  y: -4,
                  transition: { duration: 0.25 }
                }}
              >
                {city}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Network;
