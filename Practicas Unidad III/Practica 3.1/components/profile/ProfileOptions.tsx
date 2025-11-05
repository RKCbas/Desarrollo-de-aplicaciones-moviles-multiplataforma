import React from "react";

import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Button } from "@/components/ui/button";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function ProfileOptions() {
  const router = useRouter();

  return (
    <VStack space="sm" className="mb-6">
      <Heading size="md" className="mb-2">
        Opciones
      </Heading>

      <Button
        variant="outline"
        className="justify-start"
        onPress={() => router.push("/tabs/home")}
      >
        <HStack space="md" className="items-center flex-1">
          <FontAwesome name="cog" size={20} color="#666" />
          <Text>Configuración</Text>
        </HStack>
        <FontAwesome name="chevron-right" size={16} color="#999" />
      </Button>

      <Button
        variant="outline"
        className="justify-start"
        onPress={() => console.log("Ayuda")}
      >
        <HStack space="md" className="items-center flex-1">
          <FontAwesome name="question-circle" size={20} color="#666" />
          <Text>Ayuda</Text>
        </HStack>
        <FontAwesome name="chevron-right" size={16} color="#999" />
      </Button>

      <Button
        variant="outline"
        className="justify-start"
        onPress={() => console.log("Privacidad")}
      >
        <HStack space="md" className="items-center flex-1">
          <FontAwesome name="shield" size={20} color="#666" />
          <Text>Privacidad</Text>
        </HStack>
        <FontAwesome name="chevron-right" size={16} color="#999" />
      </Button>
    </VStack>
  );
}
