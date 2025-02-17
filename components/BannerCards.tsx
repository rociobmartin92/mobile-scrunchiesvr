import React, { useRef } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

const { width } = Dimensions.get("window");

const carouselItems = [
  {
    title: "🚚 Retira tus productos por farmacia SanMar en 48 horas",
    subtitle: "Recibe tus accesorios pagando envío o retíralos en nuestra tienda.",
    description: "20 de Junio 867, R8336 Villa Regina, Río Negro"
  },
  {
    title: "🎉 15% de descuento",
    subtitle: "Aprovecha un 10% OFF en compras superiores a $15.000.",
    description: "Sólo en efectivo o transferencia"
  },
  {
    title: "🔄 Devoluciones fáciles",
    subtitle: "Si no te encanta, tienes 7 días para devolverlo sin costo.",
  },
  {
    title: "🧢 ¡Próximamente!",
    subtitle: "Muy pronto encontrarás gorras en nuestra tienda",
    description: "¡Estén atentos!"
  },
];

const BannerCards = () => {
  const carouselRef = useRef(null);

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={carouselItems}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
            {item.description && <Text style={styles.description}>{item.description}</Text>}
          </View>
        )}
        sliderWidth={width}
        itemWidth={width * 0.8}
        autoplay
        loop
        autoplayInterval={2000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignItems: "center",
    height: 180
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#d63384",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    marginTop: 5,
    textAlign: "center",
  },
  description: {
    fontSize: 12,
    marginTop: 5,
    color: "#555",
    textAlign: "center",
  },
});

export default BannerCards;
