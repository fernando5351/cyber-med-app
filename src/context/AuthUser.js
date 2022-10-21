import React, { createContext, useState, useEffect } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const AuthUser = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [userToken, setUsertoken] = useState("");

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
        let userToken = res.data;
        setUsertoken(userToken);
        AsyncStorage.setItem("userToken", JSON.stringify(userToken));
        setIsLoading(false);
        console.log(userToken);
      })
      .catch((e) => {
        Alert.alert("Error", "Algo salio mal ;(");
        console.log(e);
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
        let userToken = res.data;
        setUsertoken(userToken);
        AsyncStorage.setItem("userToken", JSON.stringify(userToken));
        setIsLoading(false);
        console.log(userToken);
      })
      .catch((e) => {
        Alert.alert("Error", "Algo salio mal ;(");
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
    /*     return () => {
      removeEventListener("userToken", userToken)
    } */
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
