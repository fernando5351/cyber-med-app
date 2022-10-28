import React from "react";
import "react-native-gesture-handler";
import { StripeProvider } from "@stripe/stripe-react-native";
//Gestor de la App
import { AppNav } from "./src/routes/AppNav";
//Providers para pasarela de pago y de usuario
import { AuthProvider } from "./src/context/AuthUser";

export default function App() {
  const publishableKey = "pk_test_51LrX5lL1ZhEreWQqCU8x5ZBYIkynMrMc90JWPt7ky6JVFneuF5JCw8ckJkgpjkNRPJf8FdlVMjSkCQtQHxFzIeZj00D7Dm9grW"
  return (
    <AuthProvider>
      <StripeProvider
        publishableKey={publishableKey}
        //urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
        //merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
      >
        <AppNav />
      </StripeProvider>
    </AuthProvider>
  );
}
