// app/(tabs)/_layout.tsx
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Drawer } from 'expo-router/drawer';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// Componente para los iconos del drawer
interface DrawerIconProps {
  readonly name: React.ComponentProps<typeof FontAwesome>['name'];
  readonly color: string;
  readonly size?: number;
  readonly focused?: boolean;
}

function DrawerIcon({ name, color, size = 24, focused }: DrawerIconProps) {
  return (
    <FontAwesome 
      name={name}
      size={size}
      color={color}
      style={{ marginLeft: 5 }}
    />
  );
}

const createDrawerIcon = (iconName: React.ComponentProps<typeof FontAwesome>['name']) => {
  return ({ color, size, focused }: { color: string; size: number; focused: boolean }) => (
    <DrawerIcon 
      name={iconName} 
      color={color}
      size={size}
      focused={focused}
    />
  );
};

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        // Header
        headerShown: useClientOnlyValue(false, true),
        headerStyle: {
          backgroundColor: '#667eea',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 14
        },
        
        // Drawer
        drawerActiveTintColor: '#667eea',
        drawerInactiveTintColor: '#999',
        drawerActiveBackgroundColor: '#f0f0ff',
        drawerStyle: {
          backgroundColor: '#fff',
          width: 280,
        },
        drawerLabelStyle: {
          fontSize: 16,
          marginLeft: -10,
        },
        drawerItemStyle: {
          borderRadius: 8,
          marginHorizontal: 10,
          marginVertical: 4,
        },
      }}
    >
      <Drawer.Screen
        name="home"
        options={{
          title: ' Marco Sebastián Hernández Parada - Inicio',
          drawerLabel: 'Inicio',
          drawerIcon: createDrawerIcon('home'),
        }}
      />
      
      <Drawer.Screen
        name="forms"
        options={{
          title: ' Marco Sebastián Hernández Parada - Formularios',
          drawerLabel: 'Formularios',
          drawerIcon: createDrawerIcon('edit'),
        }}
      />

      {/* Puedes agregar más pantallas aquí */}
      {/* 
      <Drawer.Screen
        name="profile"
        options={{
          title: 'Perfil',
          drawerLabel: 'Perfil',
          drawerIcon: createDrawerIcon('user'),
        }}
      />
      
      <Drawer.Screen
        name="settings"
        options={{
          title: 'Configuración',
          drawerLabel: 'Configuración',
          drawerIcon: createDrawerIcon('cog'),
        }}
      />
      */}
    </Drawer>
  );
}

/* 
============================================
📝 ICONOS DISPONIBLES (FontAwesome)
============================================

Navegación:
- 'home', 'compass', 'map', 'globe'

Usuario:
- 'user', 'user-circle', 'users', 'id-card'

Configuración:
- 'cog', 'wrench', 'sliders'

Contenido:
- 'edit', 'file', 'folder', 'book', 'list'

Social:
- 'heart', 'star', 'comment', 'bell'

Utilidades:
- 'search', 'inbox', 'calendar', 'envelope'

============================================
*/