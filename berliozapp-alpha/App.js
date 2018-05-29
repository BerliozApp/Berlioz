import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Acceuil from './components/Acceuil';
import NotBlindInterface from './components/NotBlindInterface';
import Options from './components/Options';
import SavedTravel from './components/SavedTravel';
import NewTravel from './components/NewTravel';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Acceuil"
          component={Acceuil}
          title='Acceuil'
          initial
        />
        <Scene
          key="Options"
          component={Options}
          title='Options'
        />
        <Scene
          key="NotBlindInterface"
          component={NotBlindInterface}
          title='interface utilisateur voyant'
        />
        <Scene
          key="SavedTravel"
          component={SavedTravel}
          title='trajet sauvegarder'
        />
        <Scene
          key="NewTravel"
          component={NewTravel}
          title='nouveau trajet'
        />
      </Scene>
    </Router>
  );
}

export default App;