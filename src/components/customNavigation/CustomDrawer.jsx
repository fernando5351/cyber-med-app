import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import ProfileD from "../../../assets/icons/menu/circleProfile.png";
import Logout from "../../../assets/icons/menu/logout.png";
import BackD from "../../../assets/icons/arrows/returndouble.png";
import Loader from "../loading/Loader";
import { AuthUser } from "../../context/AuthUser";

const CustomDrawer = (props) => {
  const { isLoading, logOut, userToken } = useContext(AuthUser);
  return (
    <View style={styles.containerDrawer}>
      <Loader visible={isLoading} />
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Image style={styles.icoBackD} source={BackD} />
      </TouchableOpacity>
      <View style={styles.containerTopD}>
        <Image style={styles.icoProfile} source={ProfileD} />
        <Text style={styles.textProfile}>{userToken.email}</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.containerBottomD}>
        <TouchableOpacity
          style={styles.subContainerB}
          onPress={() => {
            logOut();
          }}
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
    borderColor: "#fff",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: "94%",
    marginLeft: "3%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  icoProfile: {
    width: 65,
    height: 65,
    marginLeft: "3%",
    marginRight: "3%",
    marginBottom: "2%",
    marginTop: "3%",
  },
  textProfile: {
    color: "#fff",
    fontWeight: "700",
    marginBottom: "3%",
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
