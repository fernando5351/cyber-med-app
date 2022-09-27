import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProfileD from "../../../assets/icons/menu/circleProfile.png";
import Logout from "../../../assets/icons/menu/logout.png";
import BackD from "../../../assets/icons/arrows/returndouble.png";
import Loader from "../loading/Loader";
import { AuthContext } from "../../context/AuthContext";

const CustomDrawer = (props) => {
  const { isLoading, userInfo, logout } = useContext(AuthContext);

  return (
    <View style={styles.containerDrawer}>
      <Loader visible={isLoading} />
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Image style={styles.icoBackD} source={BackD} />
      </TouchableOpacity>
      <View style={styles.containerTopD}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("EditProfile")}
          style={styles.subContainerT}
        >
          <Image style={styles.icoProfile} source={ProfileD} />
          <Text style={styles.textProfile}>{userInfo.email}</Text>
        </TouchableOpacity>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.containerBottomD}>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
          style={styles.subContainerB}
        >
          <Image style={styles.icoLogOut} source={Logout} />
          <Text style={styles.textLogOut}>Cerrar Sesion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  containerDrawer: {
    backgroundColor: "#8DCFEC",
    flex: 1,
  },
  icoBackD: {
    width: 25,
    height: 25,
    marginLeft: "85%",
    marginTop: "2%",
    marginBottom: "2%",
  },
  containerTopD: {
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    width: "94%",
    marginLeft: "3%",
  },
  subContainerT: {
    marginTop: "5%",
    marginBottom: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  icoProfile: {
    width: 65,
    height: 65,
  },
  textProfile: {
    color: "#fff",
    fontWeight: "700",
  },
  containerBottomD: {
    width: "90%",
    marginBottom: "5%",
    marginLeft: "5%",
    borderTopColor: "#fff",
    borderTopWidth: 1,
  },
  subContainerB: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2%",
    marginBottom: "2%",
  },
  icoLogOut: {
    width: 75,
    height: 75,
  },
  textLogOut: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 17,
  },
});
