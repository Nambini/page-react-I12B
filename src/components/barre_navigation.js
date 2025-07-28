import React from "react";
import { Link } from "react-router-dom";

const barre_nav = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#e923238c" }}>
      <Link to="/">Accueil</Link>
      <Link to="/a-propos">À propos</Link>
      <Link to="/inscription">Inscription</Link>
      <Link to="/liste_cours">Cours</Link>
    </nav>
  );
}

export default barre_nav;
