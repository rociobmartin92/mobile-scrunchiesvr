import React, { useMemo } from "react";
import { base_url } from "@/services/api";

import AntDesign from "@expo/vector-icons/AntDesign";

import useGetProducts from "@/services/useGetProducts";
import { useCart } from "@/state/use-cart";
import { useFavorites } from "@/state/use-favorites";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Product } from "@/types";
import Header from "@/components/Header";
import BannerCards from "@/components/BannerCards";
import Titles from "@/components/Titles";
import Footer from "@/components/Footer";
import ChooseCategory from "@/components/ChooseCategory";
import ListOf from "@/components/ListOf";

const HomeScreen = () => {
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
        <ChooseCategory />
        <Footer />
      </ScrollView>
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
