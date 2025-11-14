import './Network.scss';

const Network = () => {
  const cities = ['Anand', 'Baroda', 'Rajkot', 'Mumbai', 'Pune', 'Delhi'];

  return (
    <section className="network-section">
      <div className="network-container">
        <div className="network-header">
          <h2>
            <span className="highlight">Strong</span> Domestic Network
          </h2>
          <div className="underline-glow"></div>
          <p>
            We have associates in {cities.map((city, index) => (
              <span key={index} className="city-tag">{city}</span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Network;