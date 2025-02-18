import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

const Header = () => {
  return (
    <LinearGradient colors={['#ff9a9e', '#fad0c4']} style={styles.header}>
      <FontAwesome name="diamond" size={28} color="white" />
      <Text style={styles.title}>ScrunchieVR</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 10
  },
  title: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default Header;
