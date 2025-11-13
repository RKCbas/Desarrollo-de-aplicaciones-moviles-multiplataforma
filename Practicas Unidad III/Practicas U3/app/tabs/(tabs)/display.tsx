import { ScrollView, RefreshControl } from "react-native";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHead,
  TableData,
  TableCaption,
} from "@/components/ui/table";
import { useState } from "react";
import { Badge, BadgeIcon, BadgeText } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react-native";
import {
  Toast,
  ToastTitle,
  ToastDescription,
  useToast,
} from "@/components/ui/toast";
import { CheckCircle } from "lucide-react-native";

export default function DisplayLayout() {
  const [refreshing, setRefreshing] = useState(false);
  const toast = useToast();

  const onRefresh = () => {
    setRefreshing(true);
    // Simular carga de datos
    setTimeout(() => {
      setRefreshing(false);
      console.log("Datos actualizados");
    }, 2000);
  };

  const handleAddToCart = () => {
    toast.show({
      placement: "bottom",
      duration: 3000,
      render: ({ id }) => {
        return (
          <Toast nativeID={id} action="success" variant="solid" className="p-4">
            <VStack space="xs">
              <HStack space="sm" className="items-center">
                <CheckCircle size={20} color="white" strokeWidth={2.5} />
                <ToastTitle className="text-white">
                  ¡Producto agregado!
                </ToastTitle>
              </HStack>
              <ToastDescription className="text-white ml-7">
                Cotton Kurta se agregó correctamente al carrito
              </ToastDescription>
            </VStack>
          </Toast>
        );
      },
    });
  };

  return (
    <ScrollView
      className="flex-1 bg-background-0"
      showsVerticalScrollIndicator={false}
      // Pull to refresh
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      // Opciones de estilo
      contentContainerStyle={{
        padding: 20,
        paddingBottom: 40, // Espacio extra al final
      }}
      // Comportamiento del scroll
      bounces={true} // Efecto de rebote (iOS)
      bouncesZoom={true}
      alwaysBounceVertical={false}
      // Rendimiento
      removeClippedSubviews={true}
      scrollEventThrottle={16}
      // Callbacks útiles
      onScrollBeginDrag={() => console.log("Usuario empezó a hacer scroll")}
      onScrollEndDrag={() => console.log("Usuario dejó de hacer scroll")}
      onMomentumScrollEnd={() => console.log("Scroll terminó")}
    >
      {/* Header opcional */}
      <VStack space="md" className="mb-6">
        <Heading size="2xl">Mi Tienda</Heading>
        <Text className="text-typography-500">
          Descubre nuestros productos destacados
        </Text>
      </VStack>

      {/* Tabla con Card de producto */}
      <Card className="p-5 rounded-lg max-w-[360px] mx-auto mb-6">
        <Image
          source={{
            uri: "https://gluestack.github.io/public-blog-video-assets/saree.png",
          }}
          className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
          alt="image"
        />
        <Text className="text-sm font-normal mb-2 text-typography-700">
          Fashion Clothing
        </Text>
        <VStack className="mb-6">
          <Heading size="md" className="mb-4">
            Cotton Kurta
          </Heading>
          <Text size="sm">
            Floral embroidered notch neck thread work cotton kurta in white and
            black.
          </Text>
        </VStack>

        {/* Precio */}
        <HStack className="items-center justify-between mb-4">
          <VStack>
            <Text size="xs" className="text-typography-500 line-through">
              $999
            </Text>
            <Heading size="lg" className="text-primary-500">
              $799
            </Heading>
          </VStack>
          <Box className="bg-success-100 px-3 py-1 rounded-full">
            <Text size="sm" className="text-success-700 font-semibold">
              20% OFF
            </Text>
          </Box>
        </HStack>

        <Box className="flex-col sm:flex-row">
          <Button
            className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1"
            onPress={handleAddToCart}
          >
            <ButtonText size="sm">Add to cart</ButtonText>
          </Button>
          <Button
            variant="outline"
            className="px-4 py-2 border-outline-300 sm:flex-1"
          >
            <ButtonText size="sm" className="text-typography-600">
              Wishlist
            </ButtonText>
          </Button>
        </Box>
      </Card>

      {/* Sección de tabla */}
      <VStack space="md" className="mb-6">
        <Heading size="lg">Miembros Recientes</Heading>
        <Card className="p-5 rounded-lg max-w-[360px] m-3">
          <Box className="rounded-lg bg-background-50">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email Address</TableHead>
                  <TableHead>ST</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableData>Rajesh Kumar</TableData>
                  <TableData className="font-normal">
                    rajesh@example.com
                  </TableData>
                  <TableData>
                    <Badge
                      size="sm"
                      action="warning"
                      className="w-fit justify-center"
                    >
                      <BadgeText>sold out</BadgeText>
                      <BadgeIcon as={ShoppingCart} className="ml-2" />
                    </Badge>
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableData>Priya Sharma</TableData>
                  <TableData className="font-normal">
                    priya@example.com
                  </TableData>
                  <TableData>
                    <Badge
                      size="sm"
                      action="warning"
                      className="w-fit justify-center"
                    >
                      <BadgeText>sold out</BadgeText>
                      <BadgeIcon as={ShoppingCart} className="ml-2" />
                    </Badge>
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableData>Ravi Patel</TableData>
                  <TableData className="font-normal">
                    ravi@example.com
                  </TableData>
                  <TableData>
                    <Badge
                      size="sm"
                      action="warning"
                      className="w-fit justify-center"
                    >
                      <BadgeText>sold out</BadgeText>
                      <BadgeIcon as={ShoppingCart} className="ml-2" />
                    </Badge>
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableData>Ananya Gupta</TableData>
                  <TableData className="font-normal">
                    ananya@example.com
                  </TableData>
                  <TableData className="font-normal">1234567890</TableData>
                </TableRow>
                <TableRow>
                  <TableData>Arjun Singh</TableData>
                  <TableData className="font-normal">
                    arjun@example.com
                  </TableData>
                  <TableData>
                    <Badge
                      size="sm"
                      action="warning"
                      className="w-fit justify-center"
                    >
                      <BadgeText>sold out</BadgeText>
                      <BadgeIcon as={ShoppingCart} className="ml-2" />
                    </Badge>
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableData>Nisha Verma</TableData>
                  <TableData className="font-normal">
                    nisha@example.com
                  </TableData>
                  <TableData>
                    <Badge
                      size="sm"
                      action="warning"
                      className="w-fit justify-center"
                    >
                      <BadgeText>sold out</BadgeText>
                      <BadgeIcon as={ShoppingCart} className="ml-2" />
                    </Badge>
                  </TableData>
                </TableRow>
              </TableBody>
              <TableCaption className="font-normal">
                Showing recent membership details
              </TableCaption>
            </Table>
          </Box>
        </Card>
      </VStack>
    </ScrollView>
  );
}

/* 
============================================
🎯 MEJORAS AGREGADAS
============================================

1. ✅ Ícono de carrito (ShoppingCart) en los badges de la tabla
2. ✅ Card del producto encapsulada en una tabla
3. ✅ Toast de éxito al agregar al carrito
4. ✅ Hook useToast para manejar notificaciones
5. ✅ Función handleAddToCart con evento onPress

============================================
📱 COMPONENTES NUEVOS USADOS
============================================

- ShoppingCart: Ícono de lucide-react-native
- Toast, ToastTitle, ToastDescription: Para notificaciones
- useToast: Hook para mostrar toasts

============================================
💡 CÓMO FUNCIONA EL TOAST
============================================

1. Se importa useToast hook
2. Se inicializa: const toast = useToast()
3. Se muestra con toast.show() configurando:
   - placement: posición (top, bottom, etc)
   - duration: tiempo en ms
   - render: componente Toast personalizado
   - action: tipo (success, error, warning, info)

============================================
*/
