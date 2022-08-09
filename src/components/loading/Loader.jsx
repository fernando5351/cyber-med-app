import React from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator,
  Text,
} from "react-native";

const Loader = ({ visible = false }) => {
  const { height, width } = useWindowDimensions();

  return (
    visible && (
      <View style={[styles.container, { height, width }]}>
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#8DCFEC" />
          <Text style={{ marginLeft: "7%", fontSize: 16 }}>Cargando...</Text>
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.5);",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    height: "10%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    width: "50%",
  },
});

export default Loader;
