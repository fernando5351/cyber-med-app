import React, { createContext, useState, useEffect } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const AuthUser = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [userToken, setUsertoken] = useState("");
  let URL = `https://lovely-lace-production.up.railway.app`;

  const register = (nombres, apellidos, email, contrasenia) => {
    setIsLoading(true);
    axios
      .post(`${URL}/register`, {
        nombres,
        apellidos,
        email,
        contrasenia,
      })
      .then((res) => {
        let userToken = res.data;
        if (userToken === "El usuario ya esta registrado") {
          Alert.alert("Error", "Usuario ya existente");
        } else {
          setUsertoken(userToken);
          AsyncStorage.setItem("userToken", JSON.stringify(userToken));
          console.log(userToken);
        }
        setIsLoading(false);
      })
      .catch((e) => {
        Alert.alert("Ups!", "Algo salio mal, intentelo de nuevo");
        console.log(e);
        setIsLoading(false);
      });
  };

  const login = (email, contrasenia) => {
    setIsLoading(true);
    axios
      .post(`${URL}/login`, {
        email,
        contrasenia,
      })
      .then((res) => {
        let userToken = res.data;
        if (
          userToken ===
          "No se encontro ningún usuario con el correo espedificado"
        ) {
          Alert.alert("Alerta", "Email no encontrado");
        } else {
          if (userToken === "Contraseña incorrecta") {
            Alert.alert("Alerta", "Contraseña incorrecta");
          } else {
            setUsertoken(userToken);
            AsyncStorage.setItem("userToken", JSON.stringify(userToken));
            console.log(userToken);
          }
        }
        setIsLoading(false);
      })
      .catch((e) => {
        Alert.alert("Ups!", "Algo salio mal, intentelo de nuevo");
        console.log(e);
        setIsLoading(false);
      });
  };

  const logOut = () => {
    setIsLoading(true);
    AsyncStorage.removeItem("userToken");
    setUsertoken("");
    setIsLoading(false);
  };

  const IsLoggedIn = async () => {
    try {
      setSplashLoading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      userToken = JSON.parse(userToken);

      if (userToken) {
        setUsertoken(userToken);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    IsLoggedIn();
  }, []);

  return (
    <AuthUser.Provider
      value={{
        userToken,
        isLoading,
        splashLoading,
        register,
        login,
        logOut,
      }}
    >
      {children}
    </AuthUser.Provider>
  );
};
