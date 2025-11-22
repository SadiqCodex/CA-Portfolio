import "./LegalUpdates.scss";

export default function LegalUpdates() {
  const updates = [
    {
      id: 1,
      title: "RBI Issues New FEMA Compliance Guidelines for 2025",
      desc: "Businesses engaged in cross-border transactions must update documentation and reporting under the revised FEMA framework.",
      date: "18 Nov 2025",
      tag: "FEMA / RBI",
    },
    {
      id: 2,
      title: "MCA Revises Company Law Filing Norms",
      desc: "The Ministry of Corporate Affairs introduced new digital filing standards and penalties for delayed submissions.",
      date: "20 Nov 2025",
      tag: "MCA",
    },
    {
      id: 3,
      title: "Income Tax Dept. Announces New TDS Thresholds",
      desc: "Updated tax deduction limits to support MSMEs and digital businesses for FY 2025–26.",
      date: "15 Nov 2025",
      tag: "Taxation",
    },
  ];

  return (
    <section className="legal-updates">
      <div className="container">

        <div className="section-header">
          <h2 className="title">
            Latest <span>Legal Updates</span>
          </h2>
          <p className="subtitle">
            Stay informed with fresh regulatory, compliance, and policy insights.
          </p>
        </div>

        <div className="updates-list">
          {updates.map((u) => (
            <div key={u.id} className="update-card">
              <div className="update-content">

                <span className="update-tag">{u.tag}</span>

                <h3 className="update-title">{u.title}</h3>

                <p className="update-desc">{u.desc}</p>

                <div className="update-footer">
                  <p className="update-date">{u.date}</p>
                  <button className="read-more-btn">Read More →</button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
