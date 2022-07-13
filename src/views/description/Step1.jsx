import React from "react";
import { StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Step1 = () => {
  return (
    <KeyboardAwareScrollView style={styles.Keyboard}></KeyboardAwareScrollView>
  );
};

export default Step1;

const styles = StyleSheet.create({
  Keyboard: {
    flex: 1,
  },
});
