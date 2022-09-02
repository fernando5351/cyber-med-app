import React from "react";
import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import { AuthProvider } from "./src/context/AuthContext";
import { AppNav } from "./src/navigations/AppNav";

export default function App() {
  return (
    <AuthProvider>
      <StatusBar backgroundColor="#000000" />
      <AppNav />
    </AuthProvider>
  );
}
