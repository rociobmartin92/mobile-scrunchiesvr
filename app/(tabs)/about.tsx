import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Header from "@/components/Header";

const About = () => {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 20,
      }}
    >
      <Header />

      <ScrollView style={styles.container}>
        <Text style={styles.title}>Sobre Mí</Text>
        <View style={styles.separator} />

        <View style={styles.content}>
          <Text style={styles.text}>
            ¡Hola! Soy <Text style={styles.bold}>Rocío</Text>!{"\n"}
            Soy ingeniera química y desarrolladora de software.{"\n"}
            Vivo en un pequeño pueblo en la{" "}
            <Text style={styles.bold}>Patagonia Argentina</Text>, rodeada de
            montañas, lagos y aire puro. 🌿🏔
          </Text>

          <Text style={[styles.text, styles.marginTop]}>
            En mis tiempos libres hago accesorios como una forma de despejarme
            de la tecnología y conectar con mi lado más artístico.
          </Text>

          <Text style={[styles.text, styles.marginTop]}>
            Esta tienda nació como un espacio para compartir mis creaciones con
            el mundo y también mostrar mis habilidades en el desarrollo de
            software.
            {"\n\n"}Esta web está creada con las siguientes tecnologías:
            {"\n"}✣ <Text style={styles.highlight}>Front End:</Text> Next.js
            {"\n"}✣ <Text style={styles.highlight}>Back End:</Text> Strapi
            {"\n"}✣ <Text style={styles.highlight}>State Management:</Text>{" "}
            Zustand
            {"\n\n"}
            Cada pieza que hago está hecha con dedicación, cariño y un toque de
            la naturaleza que me rodea. ✨{"\n\n"}¡Espero que encuentres algo
            que te encante tanto como a mí me gusta hacerlo! 💖
          </Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>🛍 Ver Productos</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Contacto:</Text>
          <TouchableOpacity
            onPress={() =>
              openLink(
                "https://www.linkedin.com/in/rocio-beatriz-martin-a22a26296/"
              )
            }
          >
            <Text style={styles.link}>🛄 Linkedin: Rocío Beatriz Martín</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openLink("https://github.com/rociobmartin92")}
          >
            <Text style={styles.link}>🌐 Github: rociobmartin92</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("mailto:martinrocio.1992@gmail.com")}
          >
            <Text style={styles.link}>
              📧 Email: martinrocio.1992@gmail.com
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  separator: {
    height: 2,
    backgroundColor: "#ddd",
    marginVertical: 10,
  },
  content: {
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  bold: {
    fontWeight: "bold",
  },
  highlight: {
    fontWeight: "bold",
    color: "#d63384",
  },
  marginTop: {
    marginTop: 15,
  },
  button: {
    backgroundColor: "#d63384",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  card: {
    marginTop: 30,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 100,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    color: "#007bff",
    marginBottom: 8,
  },
});

export default About;
