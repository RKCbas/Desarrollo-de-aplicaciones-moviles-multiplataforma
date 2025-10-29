import React, { useEffect, useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet, Text } from "react-native";
import Header from "./components/header";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    console.log("🔁 Renderizando LoginScreen...");
  });

  const handleLogin = () => {
    if (username === "" || password === "") {
      Alert.alert("Error", "Por favor ingresa usuario y contraseña");
    } else {
      Alert.alert("¡Login exitoso!", `Bienvenido ${username}`);
      setLogged(true);
    }
  };

  return (
    <View style={styles.container}>
      
      {/* Mi componente */}
      <Header/> 

      <View style={styles.loginContainer}>
        <Text style={[styles.sectionTitle, styles.normal]}>Iniciar Sesión</Text>

        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Button title="Sign in" onPress={handleLogin} disabled={logged} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Contenedor general
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },

  // Contenedor de títulos
  titleContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "blue",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  // Texto de títulos
  titleText: {
    color: "white",
    fontSize: 24,
    marginLeft: 3,
  },

  // Texto de sección (como "Iniciar Sesión")
  sectionTitle: {
    fontSize: 26,
    marginBottom: 30,
  },

  // Variaciones tipográficas
  bold: {
    fontWeight: "700",
  },
  normal: {
    fontWeight: "400",
  },

  // Contenedor del login
  loginContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
  },

  // Campos de entrada
  input: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
});

export default LoginScreen;
