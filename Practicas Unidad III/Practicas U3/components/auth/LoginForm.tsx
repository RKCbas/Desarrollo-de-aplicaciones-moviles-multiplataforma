import React, { useState } from "react";
import { Box } from "@/components/ui/box";
import { Input, InputField, InputSlot } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { router } from "expo-router";
import { Heading } from "../ui/heading";
import { Icon, EyeIcon, EyeOffIcon } from "../ui/icon";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  isLoading?: boolean;
}

export function LoginForm({ onSubmit, isLoading }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    onSubmit(email, password);
  };

  return (
    <Box className="w-full max-w-md bg-background-0 backdrop-blur-md rounded-2xl p-8 shadow-lg">
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
          <Text className="mb-2 font-medium">Correo electrónico</Text>
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
          <Text className="mb-2 font-medium">Contraseña</Text>
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
              {showPassword ? (
                <Icon
                  as={EyeIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
              ) : (
                <Icon
                  as={EyeOffIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
              )}
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
        <Button size="lg" className="rounded-lg mt-2" onPress={handleSubmit}>
          <ButtonText>Iniciar Sesión</ButtonText>
        </Button>
      </VStack>

      {/* Registro */}
      <Box className="items-center mt-6">
        <Text className="text-typography-500 text-sm">
          ¿No tienes cuenta?{" "}
          <Text
            className="text-primary-500 font-semibold"
            onPress={() => router.push("/register")}
          >
            Regístrate
          </Text>
        </Text>
      </Box>
    </Box>
  );
}
