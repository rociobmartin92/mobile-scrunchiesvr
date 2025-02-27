import React, { useMemo } from "react";
import ToastManager from "expo-react-native-toastify";

import { View, StyleSheet, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { LogBox } from "react-native";

import Header from "@/components/Header";
import BannerCards from "@/components/BannerCards";
import Titles from "@/components/Titles";
import Footer from "@/components/Footer";
import ChooseCategory from "@/components/ChooseCategory";
import ListOf from "@/components/ListOf";

const HomeScreen = () => {
  LogBox.ignoreAllLogs();
  const filters = useMemo(() => ({ bestSeller: true }), []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <BannerCards />
        <View style={{ paddingLeft: 10 }}>
          <Titles
            text="Productos más vendidos"
            titleStyle={{ marginLeft: 15 }}
          />

          <ListOf filters={filters} />
        </View>

        {/* // Future: Finish this choose category functionality */}
        <ChooseCategory />

        {/* // Future: Apply Lazy Loading for footer */}
        <Footer />
      </ScrollView>
      <ToastManager />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    flex: 1,
  },
});

export default HomeScreen;
