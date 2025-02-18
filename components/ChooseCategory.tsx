import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import useGetCategories from "@/services/useGetCategories";
import { base_url } from "@/services/api";
import Loading from "./Loading";

const ChooseCategory = () => {
  const navigation = useNavigation();
  const { result, error, loading } = useGetCategories();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Elige tu categoría favorita</Text>

      {/* Loader mientras se cargan los datos */}
      {loading && !result ? (
        <Loading />
      ) : (
        <FlatList
          data={result}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CategoryScreen", { slug: item.slug })
              }
              style={styles.card}
            >
              <ImageBackground
                source={{ uri: `${base_url}${item.categoryImage.url}` }}
                style={styles.image}
                imageStyle={styles.imageRounded}
              >
                <View style={styles.overlay}>
                  <Text style={styles.categoryName}>{item.categoryName}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#D81B60",
    textAlign: "center",
    marginBottom: 10,
  },
  list: {
    alignItems: "center",
    paddingHorizontal: 10,
  },

  card: {
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: 200,
    height: 250,
    justifyContent: "flex-end",
  },
  imageRounded: {
    borderRadius: 10,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 10,
    alignItems: "center",
  },
  categoryName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default ChooseCategory;
