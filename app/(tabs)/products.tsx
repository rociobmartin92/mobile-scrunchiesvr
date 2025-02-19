import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

import Header from "@/components/Header";
import FiltersColorsControl from "@/components/FiltersColorsControl";

const Products = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FiltersColorsControl />
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

export default Products;
