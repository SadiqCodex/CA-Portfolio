import "./AwardsSection.scss";

const AwardsSection = () => {
  return (
    <section className="awards-section">
      <div className="container">
        <h2>Awards & Certifications</h2>

        <div className="awards-grid">
          <div className="award-item">🏆 ISO Certified Accounting Firm</div>
          <div className="award-item">🥇 Top 10 CA Firms in Rajasthan 2024</div>
          <div className="award-item">📜 Member of ICAI</div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
