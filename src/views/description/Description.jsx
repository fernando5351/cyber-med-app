import React from "react";
import { StyleSheet, View, Image } from "react-native";
import SearchBar from "../../components/searchbar/SearchBar";

const Description = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SearchBar />
      </View>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  content: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8DCFEC",
  },
});
