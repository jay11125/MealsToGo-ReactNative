import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import * as firebase from "firebase";
import { ThemeProvider } from "styled-components/native";
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyBixofaQ7Yu4wrgIIic7EbtPGcMOXc5md0",
  authDomain: "meals-to-go-37aeb.firebaseapp.com",
  projectId: "meals-to-go-37aeb",
  storageBucket: "meals-to-go-37aeb.appspot.com",
  messagingSenderId: "866145313454",
  appId: "1:866145313454:web:007f68fa032f0518f4033f",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
