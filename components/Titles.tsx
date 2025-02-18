import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Titles = ({ text, titleStyle }: { text: string; titleStyle?: {} }) => {
  return (
    <View>
      <Text style={[styles.title,  titleStyle ]}>{text}</Text>
    </View>
  );
};

export default Titles;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
  },
});
