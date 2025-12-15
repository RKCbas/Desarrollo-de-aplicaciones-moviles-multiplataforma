import { Stack } from 'expo-router';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';

export default function RootLayout() {
  return (
    <GluestackUIProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3b82f6', // bg-blue-500
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: '600',
          },
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{ 
            title: 'Blog',
            headerShown: true 
          }} 
        />
        <Stack.Screen 
          name="view-post" 
          options={{ 
            title: 'Post',
            headerShown: true,
            presentation: 'card'
          }} 
        />
        <Stack.Screen 
          name="add-post" 
          options={{ 
            title: 'Add Post',
            headerShown: true,
            presentation: 'modal',
            headerStyle: {
              backgroundColor: '#10b981', // bg-green-500
            },
          }} 
        />
      </Stack>
    </GluestackUIProvider>
  );
}