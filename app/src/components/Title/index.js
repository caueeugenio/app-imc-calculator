import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./style";
export default function Title() {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>IMC CALCULATOR</Text>
    </View>
  );
}
