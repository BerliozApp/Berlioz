import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class NewTravel extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          New travel
        </Text>
        <Image style={styles.logo} source={require("../assets/icon.jpg")}/>
      </View>
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
    backgroundColor: "#056ecf",
    height: 128,
    width: 128,
  }
});
