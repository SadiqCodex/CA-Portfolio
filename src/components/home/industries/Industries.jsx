import './Industries.scss';

const Industries = () => {
  const industries = [
    { icon: "🚗", name: "Automotive" },
    { icon: "🏦", name: "Banking" },
    { icon: "⚙️", name: "Engineering" },
    { icon: "🧪", name: "Chemicals" },
    { icon: "⚡", name: "Energy" },
    { icon: "🍽️", name: "Food" },
    { icon: "💚", name: "Healthcare" },
    { icon: "🏨", name: "Hospitality" }
  ];

  return (
    <section className="industries-section">
      <div className="industries-container">
        <h2>Industries We Serve</h2>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <div className="industry-icon">{industry.icon}</div>
              <h3>{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;