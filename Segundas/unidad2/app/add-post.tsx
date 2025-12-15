import { useLayoutEffect } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { useRouter, useNavigation } from 'expo-router';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Save, X } from 'lucide-react-native';
import { useLocalSearchParams } from 'expo-router';


export default function AddPostScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  const { title } = useLocalSearchParams<{ title?: string }>();


  useLayoutEffect(() => {
    navigation.setOptions({
      // 🔹 Botón izquierdo
      headerLeft: () => (
        <TouchableOpacity onPress={() => router.back()}>
          <X color="#ffffff" size={22} style={{ marginLeft: 15 }} />
        </TouchableOpacity>
      ),

      // 🔹 Botón derecho
      headerRight: () => (
        <TouchableOpacity onPress={handleSave}>
          <Save color="#ffffff" size={22} style={{ marginRight: 15 }} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleSave = () => {
    Alert.alert('Post saved', 'Tu post fue guardado correctamente');
    router.back();
  };

  return (
    <Box className="flex-1 bg-green-100">
      <VStack className="flex-1 items-center justify-center p-8" space="xl">
        <Text className="text-3xl font-light text-gray-700">
          {title}
        </Text>
      </VStack>
    </Box>
  );
}
