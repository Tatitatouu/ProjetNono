import React from "react";
import "./erreur404.css"; 

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Oups, la page que vous cherchez n'existe pas.</p>
      <a href="/" className="not-found-link">Retour à l'accueil</a>
    </div>
  );
};

export default NotFound;