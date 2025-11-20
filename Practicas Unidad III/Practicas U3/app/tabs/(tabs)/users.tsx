import React, { useState, useEffect } from "react";
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { ref, onValue, push, set } from "firebase/database";
import { db } from "@/components/config/config";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Button, ButtonText } from "@/components/ui/button";
import { ScrollView } from "react-native";
import { Spinner } from "@/components/ui/spinner";
import { Card } from "@/components/ui/card";
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@/components/ui/modal";
import { Input, InputField } from "@/components/ui/input";
import { Icon, CloseIcon } from "@/components/ui/icon";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from "@/components/ui/select";
import { ChevronDownIcon } from "lucide-react-native";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}

export default function users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [saving, setSaving] = useState(false);

  // Estados del formulario
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    const usersRef = ref(db, "users");

    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const usersArray = Object.values(data) as User[];
        setUsers(usersArray);
      } else {
        setUsers([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleCreateUser = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Limpiar el formulario
    setFirstName("");
    setLastName("");
    setEmail("");
    setGender("");
    setIpAddress("");
  };

  const handleSaveUser = async () => {
    // Validación básica
    if (!firstName || !lastName || !email || !gender) {
      alert("Por favor completa todos los campos obligatorios");
      return;
    }

    setSaving(true);

    try {
      const usersRef = ref(db, "users");
      const newUserRef = push(usersRef);

      // Generar un ID único basado en timestamp
      const newId = Date.now();

      const newUser: User = {
        id: newId,
        first_name: firstName,
        last_name: lastName,
        email: email,
        gender: gender,
        ip_address: ipAddress || "0.0.0.0",
      };

      await set(newUserRef, newUser);

      // Cerrar modal y limpiar
      handleCloseModal();
      alert("Usuario creado exitosamente");
    } catch (error) {
      console.error("Error al crear usuario:", error);
      alert("Error al crear el usuario");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Box className="flex-1 bg-white">
      <Box className="w-full px-4 mt-4">
        <Button
          size="lg"
          variant="solid"
          className="w-full bg-primary-500 rounded-xl"
          onPress={handleCreateUser}
        >
          <ButtonText className="text-white font-semibold">
            Crear Usuario
          </ButtonText>
        </Button>
      </Box>

      {/* Lista de usuarios */}
      <ScrollView className="flex-1 px-4 py-4">
        {loading ? (
          <Box className="flex-1 justify-center items-center py-10">
            <Spinner size="large" className="text-primary-500" />
          </Box>
        ) : users.length === 0 ? (
          <Box className="flex-1 justify-center items-center py-10">
            <Text size="lg" className="text-typography-500">
              No hay usuarios registrados
            </Text>
          </Box>
        ) : (
          <VStack space="md" className="mb-10">
            {users.map((user) => (
              <Card key={user.id} size="md" variant="elevated" className="p-4">
                <VStack space="sm">
                  <HStack className="justify-between items-center">
                    <Heading size="md">
                      {user.first_name} {user.last_name}
                    </Heading>
                    <Box
                      className={`px-2 py-1 rounded-full ${
                        user.gender === "Male" ? "bg-blue-100" : "bg-pink-100"
                      }`}
                    >
                      <Text
                        size="xs"
                        className={
                          user.gender === "Male"
                            ? "text-blue-600"
                            : "text-pink-600"
                        }
                      >
                        {user.gender}
                      </Text>
                    </Box>
                  </HStack>

                  <VStack space="xs">
                    <HStack space="xs">
                      <Text
                        size="sm"
                        className="text-typography-600 font-medium"
                      >
                        Email:
                      </Text>
                      <Text size="sm" className="text-typography-800">
                        {user.email}
                      </Text>
                    </HStack>

                    <HStack space="xs">
                      <Text
                        size="sm"
                        className="text-typography-600 font-medium"
                      >
                        IP:
                      </Text>
                      <Text size="sm" className="text-typography-800">
                        {user.ip_address}
                      </Text>
                    </HStack>

                    <HStack space="xs">
                      <Text
                        size="sm"
                        className="text-typography-600 font-medium"
                      >
                        ID:
                      </Text>
                      <Text size="sm" className="text-typography-800">
                        {user.id}
                      </Text>
                    </HStack>
                  </VStack>
                </VStack>
              </Card>
            ))}
          </VStack>
        )}
      </ScrollView>

      {/* Modal para crear usuario */}
      <Modal isOpen={showModal} onClose={handleCloseModal} size="lg">
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Crear Nuevo Usuario</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <VStack space="lg">
              <VStack space="xs">
                <Text size="sm" className="font-medium">
                  Nombre *
                </Text>
                <Input>
                  <InputField
                    placeholder="Ingresa el nombre"
                    value={firstName}
                    onChangeText={setFirstName}
                  />
                </Input>
              </VStack>

              <VStack space="xs">
                <Text size="sm" className="font-medium">
                  Apellido *
                </Text>
                <Input>
                  <InputField
                    placeholder="Ingresa el apellido"
                    value={lastName}
                    onChangeText={setLastName}
                  />
                </Input>
              </VStack>

              <VStack space="xs">
                <Text size="sm" className="font-medium">
                  Email *
                </Text>
                <Input>
                  <InputField
                    placeholder="correo@ejemplo.com"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </Input>
              </VStack>

              <VStack space="xs">
                <Text size="sm" className="font-medium">
                  Género *
                </Text>
                <Select selectedValue={gender} onValueChange={setGender}>
                  <SelectTrigger variant="outline" size="md">
                    <SelectInput placeholder="Selecciona el género" />
                    <SelectIcon className="mr-3" as={ChevronDownIcon} />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent>
                      <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                      </SelectDragIndicatorWrapper>
                      <SelectItem label="Masculino" value="Male" />
                      <SelectItem label="Femenino" value="Female" />
                    </SelectContent>
                  </SelectPortal>
                </Select>
              </VStack>

              <VStack space="xs">
                <Text size="sm" className="font-medium">
                  Dirección IP (opcional)
                </Text>
                <Input>
                  <InputField
                    placeholder="192.168.1.1"
                    value={ipAddress}
                    onChangeText={setIpAddress}
                  />
                </Input>
              </VStack>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <HStack space="md" className="w-full">
              <Button
                variant="outline"
                action="secondary"
                onPress={handleCloseModal}
                className="flex-1"
                isDisabled={saving}
              >
                <ButtonText>Cancelar</ButtonText>
              </Button>
              <Button
                action="primary"
                onPress={handleSaveUser}
                className="flex-1"
                isDisabled={saving}
              >
                {saving ? (
                  <Spinner size="small" className="text-white" />
                ) : (
                  <ButtonText>Guardar</ButtonText>
                )}
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
