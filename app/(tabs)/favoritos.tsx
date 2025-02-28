import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from "react-native";
import ToastManager from "expo-react-native-toastify";
import { ScrollView } from "react-native-virtualized-view";
import { useFavorites } from "@/state/use-favorites";
import { useCart } from "@/state/use-cart";
import { base_url } from "@/services/api";
import { AntDesign } from "@expo/vector-icons";
import Titles from "@/components/Titles";

const Favoritos = () => {
  const { items, removeFavorite, removeAllFavorites } = useFavorites();
  const { addItem } = useCart();

  const handleRemoveAll = () => {
    Alert.alert(
      "Vaciar Favoritos",
      "¿Estás seguro de eliminar todos los productos?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Sí, eliminar", onPress: removeAllFavorites },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ToastManager />
      <View style={styles.header}>
        <AntDesign name="hearto" size={20} color="red" />
        <Titles
          text="Mis favoritos"
          titleStyle={{ marginBottom: 2, marginLeft: 10 }}
        />
      </View>
      {items.length === 0 ? (
        <Text style={styles.emptyText}>No tienes productos en favoritos.</Text>
      ) : (
        <ScrollView style={styles.scrollContainer}>
          <FlatList
            nestedScrollEnabled={true}
            data={items}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image
                  source={{ uri: `${base_url}${item.images[0].url}` }}
                  style={styles.image}
                />
                <Text style={styles.productName}>{item.productName}</Text>
                <Text style={styles.price}>$ {item.price}</Text>
                <View style={styles.actions}>
                  <TouchableOpacity
                    onPress={() => removeFavorite(item)}
                    style={styles.trashButton}
                  >
                    <AntDesign name="delete" size={20} color="red" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => addItem(item)}
                    style={styles.addButton}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <AntDesign name="plus" size={17} color="black" />
                      <Text style={{ fontWeight: 600, fontSize: 15 }}>
                        {" "}
                        Comprar
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
          <TouchableOpacity
            onPress={handleRemoveAll}
            style={styles.clearButton}
          >
            <Text style={styles.clearText}>Eliminar Favoritos</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  emptyText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 20,
  },
  scrollContainer: {
    flex: 1,
  },
  card: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: "cover",
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    color: "#333",
    marginTop: 5,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  trashButton: {
    padding: 10,
  },
  addButton: {
    padding: 10,
    borderRadius: 5,
  },
  clearButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "red",
    borderRadius: 5,
    alignItems: "center",
  },
  clearText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Favoritos;
