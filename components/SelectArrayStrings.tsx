import React from "react";
import { Picker } from "@react-native-picker/picker";
import { Product } from "@/types";

export function SelectArrayStrings({
  array,
  setColor, color
}: {
  array: Product[];
  setColor: (value: string) => void;
  color: "string"
}) {
  return (
    <Picker
      selectedValue={color}
      onValueChange={(value) => setColor(value)}
      style={{ height: 50, width: 180 }}
    >
      <Picker.Item label="Filtrar por color" value="" />
      {array.map((item, index) => (
        <Picker.Item key={index} label={item} value={item} />
      ))}
    </Picker>
  );
}
