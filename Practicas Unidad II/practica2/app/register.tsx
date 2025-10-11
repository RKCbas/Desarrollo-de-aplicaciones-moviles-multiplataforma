import React, { useState } from "react";
import Gradient from "@/assets/icons/Gradient";
// import Logo from "@/assets/icons/Logo";
import { Box } from "@/components/ui/box";
import { ScrollView } from "react-native";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { useRouter } from "expo-router";
import { Input, InputField, InputSlot } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    // Validaciones básicas
    if (!name || !email || !password || !confirmPassword) {
      alert("Por favor completa todos los campos");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    console.log('Registro:', { name, email, password });
    // Aquí irá tu lógica de registro
  };

  return (
    <Box className="flex-1 bg-background-0 h-[100vh]">
      {/* Gradient de fondo */}
      <Box className="absolute h-[500px] w-[500px] lg:w-[700px] lg:h-[700px]">
        <Gradient />
      </Box>

      {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
        <Box className="flex-1 justify-center items-center px-6 py-12">
          
          {/* Contenedor del formulario */}
          <Box className="w-full max-w-md bg-background-0/80 backdrop-blur-md rounded-2xl p-8 shadow-lg">
            
            {/* Logo y título */}
            <Box className="items-center mb-6">
              {/* <Box className="mb-3">
                <Logo />
              </Box> */}
              <Heading size="2xl" className="text-center mb-2">
                Crear Cuenta
              </Heading>
              <Text className="text-center text-typography-500">
                Completa tus datos para registrarte
              </Text>
            </Box>

            {/* Formulario */}
            <VStack space="md" className="w-full">
              
              {/* Nombre Input */}
              <Box>
                <Text className="mb-2 font-medium">
                  Nombre completo
                </Text>
                <Input className="rounded-lg">
                  <InputField
                    placeholder="Juan Pérez"
                    value={name}
                    onChangeText={setName}
                  />
                </Input>
              </Box>

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
                    className="pr-3 justify-center"
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Text className="text-lg">
                      {showPassword ? "👁️" : "🙈"}
                    </Text>
                  </InputSlot>
                </Input>
              </Box>

              {/* Confirm Password Input */}
              <Box>
                <Text className="mb-2 font-medium">
                  Confirmar contraseña
                </Text>
                <Input className="rounded-lg">
                  <InputField
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!showConfirmPassword}
                    type={showConfirmPassword ? "text" : "password"}
                  />
                  <InputSlot 
                    className="pr-3 justify-center"
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <Text className="text-lg">
                      {showConfirmPassword ? "👁️" : "🙈"}
                    </Text>
                  </InputSlot>
                </Input>
              </Box>

              {/* Botón de Registro */}
              <Button
                size="lg"
                className="rounded-lg mt-4"
                onPress={handleRegister}
              >
                <ButtonText>Crear Cuenta</ButtonText>
              </Button>

            </VStack>

            {/* Login */}
            <Box className="items-center mt-6">
              <Text className="text-typography-500 text-sm">
                ¿Ya tienes cuenta?{" "}
                <Text 
                  className="text-primary-500 font-semibold"
                  onPress={() => router.replace('/')}
                >
                  Inicia sesión
                </Text>
              </Text>
            </Box>

          </Box>

        </Box>
      {/* </ScrollView> */}
    </Box>
  );
}