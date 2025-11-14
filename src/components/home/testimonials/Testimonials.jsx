import './Testimonials.scss';

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

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="client-info">
                <div className="client-initial">{testimonial.client}</div>
                <span className="client-company">{testimonial.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;