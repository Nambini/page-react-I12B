import React from "react";

const liste_cours = () => {
  const cours = [
    { id: 1, titre: "React pour les débutants" },
    { id: 2, titre: "Introduction à JavaScript" },
    { id: 3, titre: "HTML & CSS de A à Z" },
  ];

  return (
    <div>
      <h1>Liste des cours disponibles</h1>
      <ul>
        {cours.map((c) => (
          <li key={c.id}>{c.titre}</li>
        ))}
      </ul>
    </div>
  );
}

export default liste_cours;
