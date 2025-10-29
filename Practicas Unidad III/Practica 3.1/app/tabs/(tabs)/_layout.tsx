// app/(tabs)/_layout.tsx
import React, { useCallback } from 'react';

import { Tabs } from 'expo-router';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { createTabBarIcon } from '@/components/shared/tabBarIcon';

export default function TabLayout() {
  // Memoizar las funciones de iconos con diferentes iconos
  const tab1Icon = useCallback(createTabBarIcon('home'), []);
  const tab2Icon = useCallback(createTabBarIcon('user'), []);
  
  // Otras opciones de iconos populares:
  // 'home', 'user', 'cog', 'search', 'bell', 'heart', 
  // 'compass', 'map', 'inbox', 'list', 'bars', 'book'

  return (
    <Tabs
      screenOptions={{
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarActiveTintColor: '#667eea',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#f0f0f0',
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: tab1Icon,
        }}
      />
      <Tabs.Screen
        name="forms"
        options={{
          title: 'Forms',
          tabBarIcon: tab2Icon,
        }}
      />
    </Tabs>
  );
}