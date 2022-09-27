import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  const register = (nombres, apellidos, email, contrasenia) => {
    setIsLoading(true);
    axios
      .post("https://lovely-lace-production.up.railway.app/register", {
        nombres,
        apellidos,
        email,
        contrasenia,
      })
      .then((res) => {
        let userInfo = res.data;
        console.log(res.data);
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        Alert.alert("Alerta", "Registro exitoso");
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`Fallo al registrar ${e}`);
        Alert.alert("Error", "Falló al registrar");
        setIsLoading(false);
      });
  };

  const login = (email, contrasenia) => {
    setIsLoading(true);

    axios
      .post("https://lovely-lace-production.up.railway.app/login", {
        email,
        contrasenia,
      })
      .then((res) => {
        let userInfo = res.data;
        console.log(res.data);
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        Alert.alert("Alerta", "Inicio de sesion exitoso");
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`Falló al iniciar sesion ${e}`);
        Alert.alert("Error", "Falló al iniciar sesion");
        setIsLoading(false);
      });
  };

  const logout = () => {
    setIsLoading(true);

    axios
      .get("https://lovely-lace-production.up.railway.app/log_out")
      .then((res) => {
        console.log(res.data);
        AsyncStorage.removeItem("userInfo");
        setUserInfo({});
        Alert.alert("Alerta", "Cierre de sesion exitoso");
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`Falló al cerrar sesion ${e}`);
        Alert.alert("Error", "Falló al cerrar sesion");
        setIsLoading(false);
      });
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);
      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }
      setSplashLoading(false);
    } catch (error) {
      setSplashLoading(false);
      Alert.alert("Error", "Fallo al cerrar sesion");
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        register,
        login,
        logout,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
