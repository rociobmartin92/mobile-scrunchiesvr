import React, { useMemo, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import useGetColorsList from "@/services/useGetColorsList";
import useGetProducts from "@/services/useGetProducts";
import ToastManager, { Toast } from "expo-react-native-toastify";

import { SafeAreaView } from "react-native-safe-area-context";
import ListOf from "./ListOf";
import { DropdownData, SelectDropdown } from "expo-select-dropdown";

const FiltersColorsControl = () => {
  const { result: colorResult } = useGetColorsList();
  const colorArray = colorResult.map((el) => {
    return { key: el.id, value: el.color };
  });
  const [color, setColor] = useState<DropdownData<string, string> | null>(null);

  const filters = useMemo(() => ({ color: color.value ? color.value : {} }), [color]);

console.log("color", color)

  console.log("color", color);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Enamórate de todos nuestros accesorios</Text>
      <Text style={styles.filter}>Filtrar por color:</Text>
      <View style={styles.pickerContainer}>
        <SelectDropdown
          data={colorArray}
          placeholder={"Elige un color"}
          selected={color}
          setSelected={(itemValue: string) =>
            setColor(itemValue === "Todos" ? "" : itemValue)
          }
          dropdownScrollStyles={{ borderRadius: 10 }}
          searchBoxStyles={{ borderRadius: 15 }}
        />
      </View>
      <ListOf filters={filters} />
      <ToastManager />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  filter: {
    fontSize: 17,
    marginBottom: 10,
    fontWeight: 600,
    color: "red",
  },
  pickerContainer: {
    width: 250,

    marginBottom: 20,
    zIndex: 1,
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
