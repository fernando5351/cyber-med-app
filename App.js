import React from "react";
import "react-native-gesture-handler";
//Gestor de la App
import { AppNav } from "./src/routes/AppNav";
//Providers para pasarela de pago y de usuario
import { AuthProvider } from "./src/context/AuthUser";

export default function App() {
  return (
    <AuthProvider>
        <AppNav />
    </AuthProvider>
  );
}
