import './Services.scss';

const Services = () => {
  const services = [
    {
      icon: "💼",
      title: "Corporate Finance",
      description: "Comprehensive financial planning, project appraisal, and funding solutions for business growth."
    },
    {
      icon: "🔍",
      title: "Audit & Assurance",
      description: "Statutory and internal audits ensuring transparency, compliance, and financial integrity."
    },
    {
      icon: "💰",
      title: "Taxation Services",
      description: "Complete tax planning, filing, GST management, and regulatory compliance solutions."
    },
    {
      icon: "📊",
      title: "Business Consulting",
      description: "Strategic advisory services for business optimization, compliance, and growth strategies."
    },
    {
      icon: "🏗️",
      title: "Industry Setup",
      description: "End-to-end assistance with business registration, licensing, and regulatory approvals."
    },
    {
      icon: "📋",
      title: "Compliance Management",
      description: "Ongoing regulatory compliance, ROC filings, and statutory requirement management."
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="section-header">
          <h2>We Deliver <span className="highlight">Value-Based Services</span></h2>
          <p>Empowering businesses with expert financial guidance and comprehensive solutions</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;