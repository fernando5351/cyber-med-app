import React from "react";
import "react-native-gesture-handler";
import { AuthProvider } from "./src/context/AuthUser";
import { AppNav } from "./src/routes/AppNav";

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}
