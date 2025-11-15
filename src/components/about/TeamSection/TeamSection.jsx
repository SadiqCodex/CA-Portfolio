import "./TeamSection.scss";

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="container">
        <h2>Our Team</h2>

        <div className="team-grid">
          <div className="team-card">
            <div className="photo-placeholder">👨‍💼</div>
            <h3>CA Rohan Sharma</h3>
            <p className="designation">Senior Chartered Accountant</p>
            <p className="specialization">
              Corporate Taxation, GST Advisory, Audit & Compliance
            </p>
            <div className="signature-placeholder">✍️ Signature</div>
          </div>

          <div className="team-card">
            <div className="photo-placeholder">👩‍💼</div>
            <h3>CA Meera Kapoor</h3>
            <p className="designation">Chartered Accountant</p>
            <p className="specialization">
              Financial Reporting, Startup Consulting, ITR Filing & Assessments
            </p>
            <div className="signature-placeholder">✍️ Signature</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
