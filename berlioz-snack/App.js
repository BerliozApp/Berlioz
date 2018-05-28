import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import AndroidTextToSpeech from 'react-native-tts';
import GestureRecognizer, {
  swipeDirections,
} from 'react-native-swipe-gestures';
import NotBlindInterface from './components/NotBlindInterface';
import Options from './components/Options';
import SavedTravel from './components/SavedTravel';
import NewTravel from './components/NewTravel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myText: "I'm ready to get swiped!",
      gestureName: 'none',
      backgroundColor: '#fff',
    };
  }

  onSwipeUp(gestureState) {

    this.setState({
      myText: 'commencons un nouveau trajet',
      gestureName: 'SWIPE_UP',
    });
  }

  onSwipeDown(gestureState) {
    this.setState({
      myText: 'vos trajet sauvegarder',
      gestureName: 'SWIPE_DOWN',
    });
  }

  onSwipeLeft(gestureState) {
    this.setState({ myText: 'options', gestureName: 'SWIPE_LEFT' });
  }

  onSwipeRight(gestureState) {
    this.setState({
      myText: "changement d'interface",
      gestureName: 'SWIPE_RIGHT',
    });
  }

  onSwipe(gestureName, gestureState) {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    this.setState({ gestureName: gestureName });
  }

  render() {
        AndroidTextToSpeech.speak('nouveau trajet', 'ADD');
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };
    switch (this.state.gestureName) {
      case 'SWIPE_RIGHT':
          <GestureRecognizer
            onSwipeLeft={state => this.onSwipeLeft(state)}
            config={config}
            style={{
              flex: 1,
              backgroundColor: this.state.backgroundColor,
              marginTop: 50,
            }}>
            <NotBlindInterface />
          </GestureRecognizer>
        break;
      case 'SWIPE_UP':
          <GestureRecognizer
            onSwipeLeft={state => this.onSwipeLeft(state)}
            config={config}
            style={{
              flex: 1,
              backgroundColor: this.state.backgroundColor,
              marginTop: 50,
            }}>
            <NewTravel />
          </GestureRecognizer>
        break;
      case 'SWIPE_DOWN':
          <GestureRecognizer
            onSwipeLeft={state => this.onSwipeLeft(state)}
            config={config}
            style={{
              flex: 1,
              backgroundColor: this.state.backgroundColor,
              marginTop: 50,
            }}>
            <SavedTravel />
          </GestureRecognizer>
        break;
      case 'SWIPE_LEFT':
          <GestureRecognizer
            onSwipeLeft={state => this.onSwipeLeft(state)}
            config={config}
            style={{
              flex: 1,
              backgroundColor: this.state.backgroundColor,
              marginTop: 50,
            }}>
            <Options />
          </GestureRecognizer>
          break;
    }
    return (
      <GestureRecognizer
        onSwipeUp={state => this.onSwipeUp(state)}
        onSwipeDown={state => this.onSwipeDown(state)}
        onSwipeLeft={state => this.onSwipeLeft(state)}
        onSwipeRight={state => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: this.state.backgroundColor,
          marginTop: 50,
        }}>
        <Text>{this.state.myText}</Text>
        <Image
          source={require('./assets/icon.jpg')}
          style={{ width: 350, height: 350 }}
        />
      </GestureRecognizer>
    );
  }
}

export default App;
