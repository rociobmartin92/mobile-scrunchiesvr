import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

import Header from "@/components/Header";


const Favoritos = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
  },
});

export default Favoritos;
