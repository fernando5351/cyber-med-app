import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../api/connection";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  const register = (nombres, apellidos, email, contrasenia) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/register`, {
        nombres,
        apellidos,
        email,
        contrasenia,
      })
      .then((res) => {
        let info = res.data;
        setInfo(info);
        AsyncStorage.setItem("userInfo", JSON.stringify(info));
        setIsLoading(false);
        console.log(info);
      })
      .catch((e) => {
        console.log(`Fallo al registrar ${e}`);
        Alert.alert("Falló al registrar");
        setIsLoading(false);
      });
  };

  const login = (email, contrasenia) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL}/login`, {
        email,
        contrasenia,
      })
      .then((res) => {
        let info = res.data;
        console.log(info);
        setInfo(info);
        AsyncStorage.setItem("userInfo", JSON.stringify(info));
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`Falló al iniciar sesion ${e}`);
        Alert.alert("Falló al iniciar sesion");
        setIsLoading(false);
      });
  };

  const logout = () => {
    setIsLoading(true);

    axios
      .get(
        `${BASE_URL}/log_out`,
        {},
        {
          headers: { Authorization: `Bearer ${info.jwt_secret}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        AsyncStorage.removeItem("info");
        setInfo({});
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`Falló al cerrar sesion ${e}`);
        Alert.alert("Falló al cerrar sesion");
        setIsLoading(false);
      });
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);
      let info = await AsyncStorage.getItem("info");
      info = JSON.parse(info);

      if (info) {
        setInfo(info);
      }
      setSplashLoading(false);
    } catch (error) {
      setSplashLoading(false);
      Alert.alert("Error al cerrar sesion");
    }
  };

  useEffect(() => {
    isLoggedIn;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        info,
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
