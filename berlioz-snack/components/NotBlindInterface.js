import React, { Component } from 'react';
import { Text, View, StyleSheet, } from 'react-native';

class NotBlindIterface extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          interface pour personne voyante
        </Text>
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
});

export default NotBlindIterface;