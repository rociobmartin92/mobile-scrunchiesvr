import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  SafeAreaView,
} from "react-native";
import { useCart } from "@/state/use-cart";
import { base_url } from "@/services/api";
import { AntDesign } from "@expo/vector-icons";
import Titles from "@/components/Titles";


const CartPage = () => {
  const { items, removeItem, removeAll } = useCart();

  const total = items.reduce((acc, item) => acc + item.price, 0);

  const handleRemoveAll = () => {
    Alert.alert(
      "Vaciar Carrito",
      "¿Estás seguro de eliminar todos los productos?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Sí, eliminar", onPress: removeAll },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="shoppingcart" size={23} color="black" />
        <Titles
          text="Carrito de compras"
          titleStyle={{ marginBottom: 0, marginLeft: 3 }}
        />
      </View>

      {items.length === 0 ? (
        <Text style={styles.emptyText}>
          Tu carrito está vacío, comienza a llenarlo 🙌🏻
        </Text>
      ) : (
        <ScrollView style={styles.cartContainer}>
          <FlatList
          nestedScrollEnabled={true}
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image
                  source={{ uri: `${base_url}${item.images[0].url}` }}
                  style={styles.image}
                />

                <View style={styles.cardContent}>
                  <Text style={styles.productName}>{item.productName}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                  <Text style={styles.price}>$ {item.price}</Text>
                </View>

                <TouchableOpacity
                  onPress={() => removeItem(item.id)}
                  style={styles.trashButton}
                >
                  <AntDesign name="delete" size={20} color="black" />
                </TouchableOpacity>
              </View>
            )}
          />

          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: $ {total}</Text>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity
              onPress={handleRemoveAll}
              style={styles.clearButton}
            >
              <Text style={styles.clearText}>Vaciar Carrito</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log("Finalizar compra")}
              style={styles.checkoutButton}
            >
              <Text style={styles.checkoutText}>Finalizar Compra</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
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
  cartContainer: {
    flex: 1,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    resizeMode: "cover",
  },
  cardContent: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
    color: "#666",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  trashButton: {
    padding: 10,
  },
  totalContainer: {
    marginTop: 10,
    alignItems: "flex-end",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginLeft: 10,
  },
  clearButton: {
    padding: 10,
    borderRadius: 7,
    borderWidth: 1,
  },
  clearText: {
    fontSize: 14,
  },
  checkoutButton: {
    padding: 10,
    borderRadius: 7,
    backgroundColor: "#cc0066",
  },
  checkoutText: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
});

export default CartPage;
