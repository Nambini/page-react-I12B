import './accueil.js';
import './liste_cours.js';
import React from 'react';
import { useState } from 'react';

const a_propos = () => {
    return(
        <div>
            <nav>
                <h1>
                    <a href='/accueil.js'>MonAccueil</a>
                </h1>
                <ul>
                    <li><a href='/liste_cours.js' >Liste</a></li>
                </ul>
            </nav>
            <div>
      <h1>À propos</h1>
      <p>Notre mission est de rendre l'éducation accessible à tous.</p>
    </div>
        </div>
    )
}

export default a_propos;