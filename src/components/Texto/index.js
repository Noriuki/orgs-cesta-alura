import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({ children, style }) {
  const fontStyle =
    style?.fontWeight && style?.fontWeight === "bold"
      ? styles.bold
      : styles.regular;

  return <Text style={[style, fontStyle]}>{children}</Text>;
}

const styles = StyleSheet.create({
  regular: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
  },
  bold: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
  },
});
