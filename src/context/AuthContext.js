import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../api/connection";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [userInfo, setuserInfo] = useState({});
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
        let userInfo = res.data;
        setuserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
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
        let userInfo = res.data;
        console.log(userInfo);
        setuserInfo(userInfo);
        AsyncStorage.setItem(
          "userInfo",
          JSON.stringify({ ...userInfo, isLoggedIn: true })
        );
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
          headers: { Authorization: `Bearer ${userInfo.jwt_secret}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        AsyncStorage.removeItem("userInfo");
        setuserInfo({});
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
      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setuserInfo(userInfo);
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
