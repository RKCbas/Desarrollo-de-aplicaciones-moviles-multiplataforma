import React, { useState } from "react";
// import { ScrollView } from "react-native";

import { useRouter } from "expo-router";

import Gradient from "@/assets/icons/Gradient";
// import Logo from "@/assets/icons/Logo";

import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
// import { Icon } from "@/components/ui/icon";
import { Input, InputField, InputSlot } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Alert } from "react-native";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // TODO: Receive the name from the backend
    if (email === "" || password === "") {
      Alert.alert("Error", "Por favor ingresa usuario y contraseña");
    } else {
      Alert.alert("¡Login exitoso!", `Bienvenido ${email}`);
      router.replace('/tabs/tab1')
    }
  };

  return (
    <Box className="flex-1 bg-background-0 h-[100vh]">
      {/* Gradient de fondo */}
      <Box className="absolute h-[500px] w-[500px] lg:w-[700px] lg:h-[700px]">
        <Gradient />
      </Box>

      {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
        <Box className="flex-1 justify-center items-center px-6 py-20">
          
          {/* Contenedor del formulario */}
          <Box className="w-full max-w-md bg-background-0/80 backdrop-blur-md rounded-2xl p-8 shadow-lg">
            
            {/* Logo y título */}
            <Box className="items-center mb-8">
              {/* <Box className="mb-4">
                <Logo />
              </Box> */}
              <Heading size="2xl" className="text-center mb-2">
                Bienvenido
              </Heading>
              <Text className="text-center text-typography-500">
                Inicia sesión para continuar
              </Text>
            </Box>

            {/* Formulario */}
            <VStack space="lg" className="w-full">
              
              {/* Email Input */}
              <Box>
                <Text className="mb-2 font-medium">
                  Correo electrónico
                </Text>
                <Input className="rounded-lg">
                  <InputField
                    placeholder="tu@email.com"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </Input>
              </Box>

              {/* Password Input */}
              <Box>
                <Text className="mb-2 font-medium">
                  Contraseña
                </Text>
                <Input className="rounded-lg">
                  <InputField
                    placeholder="••••••••"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    type={showPassword ? "text" : "password"}
                  />
                  <InputSlot 
                    className="pr-3"
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Text className="text-lg">
                      {showPassword ? "👁️" : "🙈"}
                    </Text>
                  </InputSlot>
                </Input>
              </Box>

              {/* Olvidé mi contraseña */}
              <Box className="items-end">
                <Text className="text-primary-500 text-sm">
                  ¿Olvidaste tu contraseña?
                </Text>
              </Box>

              {/* Botón de Login */}
              <Button
                size="lg"
                className="rounded-lg mt-2"
                onPress={handleLogin}
              >
                <ButtonText>Iniciar Sesión</ButtonText>
              </Button>

            </VStack>

            {/* Registro */}
            <Box className="items-center mt-6">
              <Text className="text-typography-500 text-sm">
                ¿No tienes cuenta?{" "}
                <Text className="text-primary-500 font-semibold" onPress={() => router.push('/register')}>
                  Regístrate
                </Text>
              </Text>
            </Box>

          </Box>

        </Box>
      {/* </ScrollView> */}
    </Box>
  );
}