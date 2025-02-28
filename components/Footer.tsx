import { useNavigation } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

const Footer = () => {
const navigation = useNavigation()

  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("Error al abrir el enlace", err)
    );
  };

  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.title}>ScrunchiesVR</Text>
          <Text style={styles.description}>
            Tu tienda de accesorios para el cabello con estilo y tendencia.
          </Text>
          <Text style={styles.location}>📍 Región: Argentina</Text>
        </View>

        {/* Navegación */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Enlaces</Text>
          <TouchableOpacity onPress={() => console.log("Ir a Accesorios")}>
            <Text style={styles.link}>Accesorios</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("about")}>
            <Text style={styles.link}>Sobre Nosotros</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Ir a Novedades")}>
            <Text style={styles.link}>Novedades</Text>
          </TouchableOpacity>
        </View>

        {/* Redes sociales */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Síguenos</Text>
          <TouchableOpacity onPress={() => openLink("https://instagram.com")}>
            <Text style={styles.link}>📸 Instagram</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink("https://facebook.com")}>
            <Text style={styles.link}>📘 Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink("https://twitter.com")}>
            <Text style={styles.link}>🐦 Twitter</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.separator} />

      <Text style={styles.copyright}>
        &copy; {new Date().getFullYear()} ScrunchiesVR - Todos los derechos
        reservados.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
  },
  container: {
    maxWidth: 400,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginLeft: 10,
  },
  section: {
    width: "45%",
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#D81B60",
  },
  description: {
    fontSize: 14,
    marginTop: 5,
    color: "#555",
  },
  location: {
    fontSize: 14,
    marginTop: 5,
    color: "#555",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#D81B60",
    marginBottom: 5,
  },
  link: {
    fontSize: 14,
    color: "#D81B60",
    marginTop: 5,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  copyright: {
    fontSize: 12,
    color: "#777",
  },
});

export default Footer;
