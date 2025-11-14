import './Services.scss';

const Services = () => {
  const services = [
    {
      icon: "💰",
      title: "Taxation Services",
      subtitle: "Corporate & Individual",
      description: "Complete tax planning, filing, and advisory for individuals and businesses with expert guidance on tax optimization."
    },
    {
      icon: "📊",
      title: "GST Advisory",
      subtitle: "& Compliance",
      description: "End-to-end GST registration, filing, compliance management, and advisory services for seamless operations."
    },
    {
      icon: "🔍",
      title: "Auditing",
      subtitle: "& Financial Reporting",
      description: "Statutory and internal audits ensuring transparency, compliance, and accurate financial reporting."
    },
    {
      icon: "🚀",
      title: "Startup Consulting",
      subtitle: "& Business Advisory",
      description: "Company formation, funding guidance, business planning, and strategic advisory for startups and growing businesses."
    },
    {
      icon: "📋",
      title: "ITR Filing",
      subtitle: "& Assessment Support",
      description: "Professional income tax return filing and comprehensive support during assessment proceedings."
    },
    {
      icon: "💼",
      title: "Financial Planning",
      subtitle: "& Advisory",
      description: "Strategic financial planning, investment advisory, and wealth management solutions for long-term growth."
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive financial solutions tailored to your business needs</p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-subtitle">{service.subtitle}</p>
                <p className="service-description">{service.description}</p>
                <button className="service-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today for a consultation and let us help you achieve your financial goals.</p>
          <button className="cta-btn">Schedule Consultation</button>
        </div>
      </section>
    </div>
  );
};

export default Services;