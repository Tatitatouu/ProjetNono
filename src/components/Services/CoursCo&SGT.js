import React from 'react';
import { FaUsers, FaHeartbeat, FaBullseye } from 'react-icons/fa';
import "./CoursCo&SGT.css"

const FitnessServices = () => {
  const services = [
    {
      title: "Cours Collectifs",
      description: "Des séances dynamiques en groupe pour atteindre vos objectifs",
      icon: <FaUsers/>,
      items: ["RPM", "Body Pump", "Balance"]
    },
    {
      title: "Cardio & Renforcement",
      description: "Améliorez votre condition physique avec des exercices variés et adaptés",
      icon: <FaHeartbeat />,
      items: ["Cardio", "Renforcement musculaire", "Mobilité"]
    },
    {
      title: "Entraînement Spécialisé",
      description: "Des séances ciblées et structurées pour atteindre des résultats optimaux efficacement",
      icon: <FaBullseye />,
      items: ["Cross Training", "Circuit Training", "Stretching"]
    }
  ];

  return (
    <section className="fitness-section">
      <div className="fitness-container">
        <h2 className="fitness-title">
          Cours Collectifs & Small Group Training
        </h2>
        <p className="fitness-subtitle">
          Des séances adaptées à tous les niveaux pour atteindre vos objectifs dans une ambiance motivante
        </p>
        
        <div className="fitness-grid">
          {services.map((service, index) => (
            <div key={index} className="fitness-card">
              <div className="fitness-card-content">
                <div className="fitness-icon-container">
                  {service.icon}  {/* Affichage d'une icône React directement */}
                </div>
                <h3 className="fitness-card-title">
                  {service.title}
                </h3>
                <p className="fitness-card-description">
                  {service.description}
                </p>
                <div className="fitness-items">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="fitness-item">
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FitnessServices;
