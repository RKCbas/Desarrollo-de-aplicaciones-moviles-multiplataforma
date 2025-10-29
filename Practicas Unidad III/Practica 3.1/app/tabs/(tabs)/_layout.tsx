// app/(tabs)/_layout.tsx
import React, { useCallback } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

interface TabBarIconProps {
  readonly name: React.ComponentProps<typeof FontAwesome>['name'];
  readonly color: string;
  readonly focused?: boolean;
}

function TabBarIcon({ name, color, focused }: TabBarIconProps) {
  return (
    <FontAwesome 
      name={name}
      size={focused ? 26 : 22}
      color={color}
      style={{ marginBottom: -3 }} 
    />
  );
}

export const createTabBarIcon = (iconName: React.ComponentProps<typeof FontAwesome>['name']) => {
  return ({ color, focused }: { color: string; focused: boolean }) => (
    <TabBarIcon 
      name={iconName} 
      color={color}
      focused={focused}
    />
  );
};

export default function TabLayout() {
  // Memoizar las funciones de iconos con diferentes iconos
  const tab1Icon = useCallback(createTabBarIcon('user'), []);
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