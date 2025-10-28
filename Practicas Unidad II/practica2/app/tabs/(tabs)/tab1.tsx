import EditScreenInfo from '@/components/EditScreenInfo';
import { Button, ButtonText } from '@/components/ui/button';
import { Center } from '@/components/ui/center';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'expo-router';

export default function Tab2() {
  const { user, logout} = useAuth();

  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.replace('/')
  }

  return (
    <Center className="flex-1">
      <Heading className="font-bold text-2xl">Expo - Tab 1</Heading>
      <Divider className="my-[30px] w-[80%]" />
      <Text className="p-4">Example below to use gluestack-ui components.</Text>
      <Text className="p-4">Email: {user?.email}</Text>
      <Button onPress={handleLogout} className=''>
        <ButtonText>Cerrar Sesión</ButtonText>
      </Button>
      {/* <EditScreenInfo path="app/(app)/(tabs)/tab1.tsx" /> */}
    </Center>
  );
}
