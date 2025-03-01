import React from "react";

import { base_url } from "@/services/api";
import { useFavorites } from "@/state/use-favorites";
import { useCart } from "@/state/use-cart";
import useGetProducts from "@/services/useGetProducts";

import { AntDesign } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Product, ProductFilters } from "@/types";
import Loading from "./Loading";
import { colors } from "@/constants/Colors";

const ListOf = ({ filters }: { filters: ProductFilters }) => {
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
            color={colors.dark.text}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => addItem(item)}>
          <AntDesign name="shoppingcart" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View>
      {loading || !result ? (
        <Loading />
      ) : (
        <FlatList
          nestedScrollEnabled={true}
          numColumns={2}
          data={result}
          keyExtractor={(item) => item.productName}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 0,
    alignItems: "center",
    elevation: 5, // Sombra para Android
    shadowColor: "#000", // Color de la sombra en iOS
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 0.2, // Opacidad de la sombra
    shadowRadius: 4, // Difuminado de la sombra
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
export default ListOf;
