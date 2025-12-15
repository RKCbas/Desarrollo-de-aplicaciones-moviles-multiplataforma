import React from "react";
// import { ScrollView } from "react-native";

import { useRouter } from "expo-router";

// import Logo from "@/assets/icons/Logo";

import { Box } from "@/components/ui/box";
// import { Icon } from "@/components/ui/icon";
import { Alert } from "react-native";
import { LoginForm } from "@/components/new/LoginForm";

export default function Home() {
  const router = useRouter();

  const handleLogin = (email: string, password: string) => {
    if (email === "" || password === "") {
      Alert.alert("Error", "Por favor ingresa usuario y contraseña");
    } else {
      Alert.alert("¡Login exitoso!", `Bienvenido ${email}`);
      router.replace("/tabs/home");
    }
  };

  return (
    <Box className="flex-1 bg-background-0 h-[100vh]">
      {/* Gradient de fondo */}
      <Box className="absolute h-[500px] w-[500px] lg:w-[700px] lg:h-[700px]">
        {/* <Gradient /> */}
      </Box>

      {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
      <Box className="flex-1 justify-center items-center px-6 py-20">
          {/* Contenedor del formulario */}
        <LoginForm onSubmit={handleLogin}></LoginForm>
      </Box>
      {/* </ScrollView> */}
    </Box>
  );
}
