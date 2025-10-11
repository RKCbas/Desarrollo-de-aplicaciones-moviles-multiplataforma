import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  console.log("🔄 Renderizando componente Header...");

  return (
    <View>
      <View style={[styles.titleContainer, { paddingTop: 60 }]}>
        <Text style={[styles.titleText, styles.bold]}>
          Marco Sebastián Hernández Parada
        </Text>
      </View>

      <View
        style={[
          styles.titleContainer,
          {
            paddingBottom: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          },
        ]}
      >
        <Text style={[styles.titleText, styles.bold]}>React Native - </Text>
        <Text style={[styles.titleText, styles.normal]}>
          User Registration
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "blue",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  titleText: {
    color: "white",
    fontSize: 24,
    marginLeft: 3,
  },
  bold: {
    fontWeight: "700",
  },
  normal: {
    fontWeight: "400",
  },
});

export default Header;
