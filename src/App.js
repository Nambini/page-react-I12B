import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Accueil, {afficher_accueil} from './components/accueil';
import liste_cours from './components/liste_cours';
import barre_nav from './components/barre_navigation';
import a_propos from './components/a_propos';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

const App = () => {
  <Router>

    <div>
      
    <barre_nav/>
    <Switch>

      <Route exact path="/">
        <Accueil/>
      </Route>
      <Route path="/liste_cours">
        <liste_cours/>
      </Route>

      <Route path="/a_propos">
        <a_propos/>
      </Route>
      </Switch>
    </div>
  </Router>
  
};

export default App;
