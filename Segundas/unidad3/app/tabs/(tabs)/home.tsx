import EditScreenInfo from '@/components/EditScreenInfo';
import { Button, ButtonText } from '@/components/ui/button';
import { Center } from '@/components/ui/center';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { useRouter } from 'expo-router';

export default function Tab2() {
  
  const router = useRouter()

  const handleLogout = () => {
    router.replace('/')
  }

  return (
    <Center className="flex-1">
      <Heading className="font-bold text-2xl">Home Screen</Heading>
      <Divider className="my-[30px] w-[80%]" />
      
      
    </Center>
  );
}
