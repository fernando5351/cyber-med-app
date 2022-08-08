import React from "react";
import CheckBox from "react-native-check-box";

const Checkbox = ({ navigation }) => {
  return (
    <CheckBox
      style={{ flex: 1, padding: 10 }}
      onclick={() => {
        this.setState({
          isChecked: !this.state.isChecked,
        });
      }}
      isChecked={"_this.state.isChecked"}
      leftText={"CheckBox"}
    />
  );
};

const styles = StyleSheet.create({
  CheckBox: {
    flex: 1,
  },
});

export default Checkbox;
