import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Testimonials.scss";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Exceptional service and deep expertise in tax planning. They helped us save significantly while ensuring full compliance.",
      client: "R.K.",
      company: "Manufacturing Industry"
    },
    {
      text: "Professional, reliable, and always available when we need them. Their audit services are thorough and insightful.",
      client: "S.M.",
      company: "Healthcare Sector"
    },
    {
      text: "Outstanding support for our startup journey. From incorporation to funding guidance, they were with us every step.",
      client: "A.P.",
      company: "Technology Startup"
    },
    {
      text: "Their strategic financial advice has been instrumental in our business growth. Highly recommend their services.",
      client: "D.S.",
      company: "Retail Business"
    }
  ];

  // 2X array for seamless infinite scrolling
  const loopTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          What Our Clients Say
        </motion.h2>

        <div className="scroll-wrapper">
          <motion.div
            className="scroll-track"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {loopTestimonials.map((t, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 180 }}
              >
                <div className="quote-icon">"</div>

                <p className="testimonial-text">{t.text}</p>

                <div className="client-info">
                  <div className="client-initial">{t.client}</div>
                  <span className="client-company">{t.company}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
