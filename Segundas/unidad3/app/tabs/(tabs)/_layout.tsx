// app/(tabs)/_layout.tsx
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Drawer } from "expo-router/drawer";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { 
  AlertDialog, 
  AlertDialogBackdrop, 
  AlertDialogContent, 
  AlertDialogHeader, 
  AlertDialogBody, 
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { useRouter } from "expo-router";

// Componente para los iconos del drawer
interface DrawerIconProps {
  readonly name: React.ComponentProps<typeof FontAwesome>["name"];
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

const createDrawerIcon = (
  iconName: React.ComponentProps<typeof FontAwesome>["name"]
) => {
  return ({
    color,
    size,
    focused,
  }: {
    color: string;
    size: number;
    focused: boolean;
  }) => (
    <DrawerIcon name={iconName} color={color} size={size} focused={focused} />
  );
};

// Custom Drawer Content con botón de logout
function CustomDrawerContent(props: any) {
  const [showLogoutDialog, setShowLogoutDialog] = React.useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    // Aquí implementa tu lógica de cerrar sesión
    // Por ejemplo: limpiar AsyncStorage, tokens, etc.
    try {
      // await AsyncStorage.clear();
      // await SecureStore.deleteItemAsync('userToken');
      
      setShowLogoutDialog(false);
      
      // Navegar a la pantalla de login
      router.replace('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <>
      <DrawerContentScrollView {...props}>
        {/* Items normales del drawer */}
        <DrawerItemList {...props} />
        
        {/* Botón de Cerrar Sesión */}
        <DrawerItem
          label="Cerrar Sesión"
          icon={({ color, size }) => (
            <DrawerIcon name="sign-out" color="#dc2626" size={size} />
          )}
          labelStyle={{
            color: "#dc2626",
            fontSize: 16,
            marginLeft: 0,
          }}
          style={{
            borderRadius: 8,
            marginHorizontal: 10,
            marginVertical: 4,
          }}
          onPress={() => setShowLogoutDialog(true)}
        />
      </DrawerContentScrollView>

      {/* Alert Dialog de Confirmación */}
      <AlertDialog isOpen={showLogoutDialog} onClose={() => setShowLogoutDialog(false)}>
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading size="lg">Cerrar Sesión</Heading>
          </AlertDialogHeader>
          
          <AlertDialogBody>
            <Text size="md">
              ¿Estás seguro que deseas cerrar sesión?
            </Text>
          </AlertDialogBody>
          
          <AlertDialogFooter>
            <Button
              variant="outline"
              action="secondary"
              onPress={() => setShowLogoutDialog(false)}
            >
              <ButtonText>Cancelar</ButtonText>
            </Button>
            
            <Button
              action="negative"
              onPress={handleLogout}
            >
              <ButtonText>Cerrar Sesión</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        // Header
        headerShown: useClientOnlyValue(false, true),
        headerStyle: {
          backgroundColor: "#667eea",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 18,
        },

        // Drawer
        drawerActiveTintColor: "#667eea",
        drawerInactiveTintColor: "#999",
        drawerActiveBackgroundColor: "#f0f0ff",
        drawerStyle: {
          backgroundColor: "#fff",
          width: 280,
        },
        drawerLabelStyle: {
          fontSize: 16,
          marginLeft: 0,
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
          title: "Home",
          drawerLabel: "Home",
          drawerIcon: createDrawerIcon("home"),
        }}
      />

      <Drawer.Screen
        name="settings"
        options={{
          title: "Settings",
          drawerLabel: "Settings",
          drawerIcon: createDrawerIcon("cog"),
        }}
      />
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

Logout:
- 'sign-out', 'power-off'

============================================
*/