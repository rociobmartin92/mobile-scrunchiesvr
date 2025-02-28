import { colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";

const user = {
  name: "Juan Pérez",
  email: "juan.perez@email.com",
  profileImage: "https://via.placeholder.com/150", // Imagen de perfil
};

const ProfileScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center", padding: 20 }}>
        <Pressable onPress={() => console.log("sdfjklñsd")}>
          <AntDesign name="logout" size={23} color="black" />
        </Pressable>
        {/* Imagen de perfil */}
        <Image
          source={{ uri: user.profileImage }}
          style={styles.profileImage}
        />

        {/* Información del usuario */}
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>

        {/* Botones de acción */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Editar Perfil</Text>
          </TouchableOpacity>
        </View>

        {/* Sección "Mis Pedidos" */}
        <Text style={styles.sectionTitle}>Mis Pedidos ✨</Text>
        <View style={styles.orderButtonsContainer}>
          <TouchableOpacity
            style={styles.orderButton}
            onPress={() =>
              navigation.navigate("Orders", { status: "Procesando" })
            }
          >
            <Text style={styles.orderButtonText}>Procesando</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.orderButton, styles.readyButton]}
            onPress={() =>
              navigation.navigate("Orders", { status: "Listo para retiro" })
            }
          >
            <Text style={styles.orderButtonReadyText}>Listo para retiro</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: colors.dark.text,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: colors.light.text,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: colors.light.text,
    fontSize: 16,
    fontWeight: "bold",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,

    alignSelf: "flex-start",
  },
  orderButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: colors.dark.text,
    borderTopColor: colors.dark.text,
  },
  orderButton: {
    flex: 1,
    padding: 12,
    // borderRadius: 10,
    alignItems: "center",
  },

  readyButton: {
    backgroundColor: colors.dark.text,
  },
  orderButtonText: {
    color: colors.dark.text,
    fontSize: 16,
    fontWeight: "bold",
  },
  orderButtonReadyText: {
    color: colors.dark.text,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
