import { Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Button, ButtonText, ButtonIcon } from '@/components/ui/button';
import { Trash2 } from 'lucide-react-native';


export default function ViewPostScreen() {
  const router = useRouter();

  const { title } = useLocalSearchParams<{ title?: string }>();

  return (
    <Box className="flex-1 bg-red-100">
      <VStack className="flex-1 items-center justify-center p-8" space="xl">
        <Text className="text-3xl font-light text-gray-700 mb-4">
          {title}
        </Text>
        
    

      </VStack>
    </Box>
  );
}