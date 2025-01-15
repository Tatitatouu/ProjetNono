import React from 'react';
import { Users, Target, MapPin, Clipboard } from 'lucide-react';
import './about.css'

const AboutSection = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Votre coach sportive personnelle</h1>
            <p className="hero-text">
              Diplômée d'un CQP Instructeur Fitness Double Mention (Personal Training Musculation & Cours Collectifs). 
              Passionnée par le sport depuis toujours,
              je vous accompagne dans votre parcours vers une meilleure version de vous-même.
            </p>
          </div>
          <div>
            <img 
              src="../../assets/about/VJP_3308.jpg" 
              alt="Coach sportive en action" 
              className="hero-image"
            />
            </div>
        </div>
    </div>

      {/* Parcours et Approche */}
      <div className="section-container">
        <div className="cards-grid">
          <div className="feature-card">
            <Clipboard className="feature-icon" size={48} />
            <h2 className="feature-title">Mon Parcours</h2>
            <p className="feature-text">
              Du basketball à l'équitation, en passant par la musculation depuis 4 ans, 
              mon parcours sportif m'a permis d'explorer différentes disciplines. 
              Aujourd'hui, je mets cette expérience variée au service de votre réussite.
            </p>
          </div>

          <div className="feature-card">
            <Target className="feature-icon" size={48} />
            <h2 className="feature-title">Mon Approche</h2>
            <p className="feature-text">
              Spécialisée dans l'entraînement hybride, je crée des programmes personnalisés 
              combinant force et cardio. Chaque séance est construite autour de trois piliers :
              découverte, assurance et dépassement de soi.
            </p>
          </div>
        </div>
      </div>

      {/* Pour Qui Section */}
      <div className="highlight-section">
        <div className="section-container">
          <div className="section-header">
            <Users size={32} className="mr-4" />
            <h2 className="section-title"> Pour Qui ?</h2>
          </div>
          <div className="grid-container">
            <div className="card">
              <h3>Débutants</h3>
              <p>Découvrez le sport dans un cadre bienveillant et adapté à votre niveau.</p>
            </div>
            <div className="card">
              <h3>Sportifs Confirmés</h3>
              <p>Perfectionnez votre technique et relevez de nouveaux défis.</p>
            </div>
            <div className="card">
              <h3>Athlètes</h3>
              <p>Préparez-vous pour des compétitions comme l'Hyrox ou la course à pied.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Où me trouver */}
      <div className="section-container">
        <div className="section-header">
          <MapPin size={35} className="feature-icon mr-4" />
          <h2 className="section-title">Où me trouver ?</h2>
        </div>
        <div className="cards-grid">
          <div className="feature-card">
            <h3 className="feature-title">En présentiel</h3>
            <ul className="location-list">
              <li>• Fitness Park Illzach - Cours collectifs Les Mills</li>
              <li>• Mulhouse et alentours - Séances personnalisées</li>
              <li>• Kruth - Week-ends sportifs aux Chambres d'Hôtes des Cascades</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">En ligne</h3>
            <p className="feature-text">
              Nouveau : coaching en ligne disponible prochainement pour vous accompagner 
              où que vous soyez, avec la même qualité de suivi personnalisé.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;