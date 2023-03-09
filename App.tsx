import { StatusBar } from "expo-status-bar";
import React from "react";
import { AuthProvider } from "./src/contexts/AuthContext";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar style="light" translucent backgroundColor="#005047" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}
