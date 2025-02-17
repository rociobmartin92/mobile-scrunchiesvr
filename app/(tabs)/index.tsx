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

const HomeScreen = () => {
  const filters = useMemo(() => ({ bestSeller: true }), []);
  const { result, loading } = useGetProducts(filters);
  const { addItem } = useCart();
  const { addFavorite, items: favorites } = useFavorites();

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.card}>
      <Image
        source={{ uri: `${base_url}${item.images[0].url}` }}
        style={styles.image}
      />
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => addFavorite(item)}>
          <AntDesign
            name={
              favorites.some((el) => el.id === item.id) ? "heart" : "hearto"
            }
            size={24}
            color="rgb(190, 24, 93)"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addItem(item)}>
          <AntDesign name="shoppingcart" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Header />
        <BannerCards />
        <Titles text="Productos más vendidos" />

        {loading || !result ? (
          <Text>Cargando...</Text>
        ) : (
          <FlatList
            numColumns={2}
            data={result}
            keyExtractor={(item) => item.productName}
            renderItem={renderItem}
          />
        )} 
        <ChooseCategory />
        <Footer />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    flex: 1,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 0,
    alignItems: "center",
    elevation: 5,
    margin: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  actions: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    width: "45%",
  },
});

export default HomeScreen;
