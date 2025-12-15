import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { useColorScheme } from '@/components/useColorScheme';
import { Slot, usePathname } from 'expo-router';
import { Fab, FabIcon } from '@/components/ui/fab';
import { MoonIcon, SunIcon } from '@/components/ui/icon';
import { AppSplash } from '@/components/new/Splash';

export {
  ErrorBoundary,
} from 'expo-router';

// 🔒 Mantener splash nativa
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  const [showCustomSplash, setShowCustomSplash] = useState(true);

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    const prepare = async () => {
      // ⛔ QUITA splash nativa YA
      await SplashScreen.hideAsync();

      // ⏳ Mantén splash custom visible
      setTimeout(() => {
        setShowCustomSplash(false);
      }, 2500);
    };

    if (fontsLoaded) {
      prepare();
    }
  }, [fontsLoaded]);


  if (showCustomSplash) {
    return <AppSplash />;
  }

  return <RootLayoutNav />;
}


function RootLayoutNav() {
  const pathname = usePathname();
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');

  return (
    <GluestackUIProvider mode={colorMode}>
      <ThemeProvider value={colorMode === 'dark' ? DarkTheme : DefaultTheme}>
        <Slot />

        {pathname === '/tabs/settings' && (
          <Fab
            onPress={() =>
              setColorMode(colorMode === 'dark' ? 'light' : 'dark')
            }
            className="m-6"
            size="lg"
          >
            <FabIcon as={colorMode === 'dark' ? MoonIcon : SunIcon} />
          </Fab>
        )}
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
