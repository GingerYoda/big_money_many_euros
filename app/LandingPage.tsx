
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function LandingPage() {
  return (
    <ImageBackground
      source={{ uri: 'https://picsum.photos/800/1600' }} // Heitä tähän oma taustakuva
      style={styles.background}
    >
      <View style={styles.overlay} />

      <View style={styles.container}>
        <Text style={styles.title}>Tervetuloa!</Text>
        <Text style={styles.subtitle}>
          Tämä on sinun mobiiliappin laskeutumissivu.  
          Tee olos kotosaksi.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text}>Aloita</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.secondary_button]}>
          <Text style={styles.secondary_button_text}>Lissee tiettoo</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)', // tummentaa taustaa
  },
  container: {
    padding: 30,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#eee',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  button_text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  secondary_button: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#ddd',
  },
  secondary_button_text: {
    color: '#ddd',
    fontSize: 18,
    fontWeight: '600',
  },
});
