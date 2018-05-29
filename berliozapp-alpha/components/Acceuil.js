import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import GestureRecognizer, {
  swipeDirections,
} from 'react-native-swipe-gestures';
import { Actions } from 'react-native-router-flux'; // New code
import { Speech } from 'expo';

class Acceuil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myText: "I'm ready to get swiped!",
      gestureName: 'none',
      backgroundColor: '#fff',
    };
  }

  onSwipeUp(gestureState) {
    Speech.speak('nouveau trajet', {
      language: 'fr',
      pitch: 1.00,
      rate: 0.75,
    });
    Speech.stop()
    Actions.NewTravel()
  }

  onSwipeDown(gestureState) {
    Speech.speak('trajet enregistrer', {
      language: 'fr',
      pitch: 1.00,
      rate: 0.75,
    });
    Speech.stop()
    Actions.SavedTravel()
  }

  onSwipeLeft(gestureState) {
    Speech.speak('options', {
      language: 'fr',
      pitch: 1.00,
      rate: 0.75,
    });
    Speech.stop()
    Actions.Options();
  }

  onSwipeRight(gestureState) {
    Speech.speak('Interface personne voyante', {
      language: 'fr',
      pitch: 1.00,
      rate: 0.75,
    });
    Speech.stop()
    Actions.NotBlindInterface()
  }

  onSwipe(gestureName, gestureState) {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    this.setState({ gestureName: gestureName });
  }
  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };
    Speech.speak('bienvenue sur berlioz, pour commencer un nouveau trajet scroll vers le haut, pour les options scroll vers la gauche, pour vos trajets enregistrer scroll vers le bas, et pour changer d\'interface scroll vers la droite', {
      language: 'fr',
      pitch: 1.00,
    });
    Speech.stop()
    return (
      <GestureRecognizer
        onSwipeUp={state => this.onSwipeUp(state)}
        onSwipeDown={state => this.onSwipeDown(state)}
        onSwipeLeft={state => this.onSwipeLeft(state)}
        onSwipeRight={state => this.onSwipeRight(state)}
        config={config}
        style={styles.container}>
        <Text style={styles.paragraph}>Berlioz</Text>
        <Image source={require('../assets/icon.jpg')} style={styles.logo} />
      </GestureRecognizer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    verticalAlign: 'center',
    marginTop: 70,
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    backgroundColor: '#056ecf',
    height: 128,
    width: 128,
  },
});

export default Acceuil;
