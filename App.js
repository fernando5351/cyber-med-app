import React from "react";
import "react-native-gesture-handler";
import { AuthProvider } from "./src/context/AuthContext";
import { AppNav } from "./src/navigations/AppNav";

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}
