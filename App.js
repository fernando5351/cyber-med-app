import React from "react";
import "react-native-gesture-handler";
//Gestor de la App
import { AppNav } from "./src/routes/AppNav";
//Providers para pasarela de pago y de usuario
import { StripeProvider } from "@stripe/stripe-react-native";
import { AuthProvider } from "./src/context/AuthUser";

export default function App() {
  return (
    <AuthProvider>
      <StripeProvider publishableKey="pk_test_51LrX5lL1ZhEreWQqCU8x5ZBYIkynMrMc90JWPt7ky6JVFneuF5JCw8ckJkgpjkNRPJf8FdlVMjSkCQtQHxFzIeZj00D7Dm9grW">
        <AppNav />
      </StripeProvider>
    </AuthProvider>
  );
}
