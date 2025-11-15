import React from "react";
import "./CTASection.scss";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Ready to Get Started?</h2>
        <p>
          Contact us today for a consultation and let us help you achieve your
          financial goals.
        </p>
        <button className="cta-btn">Schedule Consultation</button>
      </div>
    </section>
  );
};

export default CTASection;
