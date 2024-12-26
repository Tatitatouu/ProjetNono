import React from 'react';
import './services.css';

const ServiceCard = ({ title, features, isPopular }) => (
  <div className="service-card">
    {isPopular && <span className="popular-tag">Le plus populaire</span>}
    <h3>{title}</h3>
    <ul className="features">
      {features.map((feature, index) => (
        <li key={index} className="feature-active">
          <span className="checkmark">✓</span> {feature}
        </li>
      ))}
    </ul>
  </div>
);

const Services = () => (
  <section className="services-section">
    <h2>Choisis le programme adapté à tes besoins ♥</h2>
    <div className="services-container">
      <ServiceCard 
      title="Programme"
        features={[
          "...",
          "...",
          "...",
        ]}
      />
      <ServiceCard
        title="Programme"
        features={[
          "...",
          "...",
          "...",
        ]}
      />
      <ServiceCard
        title="Programme"
        features={[
          "...",
          "...",
          "...",
        ]}
      />
    </div>
  </section>
);

export default Services;