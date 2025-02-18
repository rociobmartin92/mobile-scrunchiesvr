import React, { useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import useGetColorsList from "@/services/useGetColorsList";
import useGetProducts from "@/services/useGetProducts";
import { Picker } from "@react-native-picker/picker";
import { AntDesign } from "@expo/vector-icons";
import { useCart } from "@/state/use-cart";
import { useFavorites } from "@/state/use-favorites";
import { Product } from "@/types";
import { base_url } from "@/services/api";
import { SafeAreaView } from "react-native-safe-area-context";

const FiltersColorsControl = () => {
  const { result: colorResult } = useGetColorsList();
  const colorArray = colorResult.map((el) => el.color);
  const { addItem } = useCart();
  const { addFavorite, items: favorites } = useFavorites();

  const [color, setColor] = useState("");

  const pickerRef = useRef();
  const filters = useMemo(() => ({ color: color ? color : {} }), [color]);
  const { result, loading } = useGetProducts(filters);

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
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Accesorios</Text>
      <Text style={styles.filter}>Filtrar por color:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={color}
          onValueChange={(itemValue: string) =>
            setColor(itemValue === "Todos" ? "" : itemValue)
          }
          style={styles.picker}
        >
          <Picker.Item label="Todos" value="Todos" />
          {colorArray.map((color, index) => (
            <Picker.Item
              key={index}
              label={color.toUpperCase()}
              value={color}
              color="#000"
            />
          ))}
        </Picker>
      </View>

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  filter: {
    fontSize: 17,
    marginBottom: 10,
  },
  pickerContainer: {
    width: 250,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginBottom: 20,
  },
  picker: {
    width: "100%",
    height: 50,
    color: "#000",
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

export default FiltersColorsControl;
