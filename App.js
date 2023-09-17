import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.square,styles.squareAzul]}>
        <Text style={styles.message}>1.Quadrado azul</Text>
      </View>
      <View style={[styles.square,styles.squareVerde]}>
        <Text style={styles.message}>2.Quadrado Verde</Text>
      </View>
      <View style={[styles.square,styles.squareVermelho]}>
        <Text style={styles.message}>3.Quadrado Vermelho</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  square: {
    width: 100,
    height: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  squareAzul: {
    backgroundColor: 'blue',
  },
  squareVermelho: {
    backgroundColor: 'red',
  },
  squareVerde: {
    backgroundColor: 'green',
  },
  message: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
