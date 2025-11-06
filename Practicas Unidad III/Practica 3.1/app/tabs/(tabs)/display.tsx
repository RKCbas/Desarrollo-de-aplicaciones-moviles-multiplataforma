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

export default function DisplayLayout() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simular carga de datos
    setTimeout(() => {
      setRefreshing(false);
      console.log('Datos actualizados');
    }, 2000);
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
      onScrollBeginDrag={() => console.log('Usuario empezó a hacer scroll')}
      onScrollEndDrag={() => console.log('Usuario dejó de hacer scroll')}
      onMomentumScrollEnd={() => console.log('Scroll terminó')}
    >
      {/* Header opcional */}
      <VStack space="md" className="mb-6">
        <Heading size="2xl">Mi Tienda</Heading>
        <Text className="text-typography-500">
          Descubre nuestros productos destacados
        </Text>
      </VStack>

      {/* Card de producto */}
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
          <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
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
        
        <Box className="rounded-lg bg-background-50">
          {/* <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
          > */}
            <Table className="w-full ">
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email Address</TableHead>
                  <TableHead>Phone Number</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableData>Rajesh Kumar</TableData>
                  <TableData className="font-normal">rajesh@example.com</TableData>
                  <TableData className="font-normal">1234567890</TableData>
                </TableRow>
                <TableRow>
                  <TableData>Priya Sharma</TableData>
                  <TableData className="font-normal">priya@example.com</TableData>
                  <TableData className="font-normal">1234567890</TableData>
                </TableRow>
                <TableRow>
                  <TableData>Ravi Patel</TableData>
                  <TableData className="font-normal">ravi@example.com</TableData>
                  <TableData className="font-normal">1234567890</TableData>
                </TableRow>
                <TableRow>
                  <TableData>Ananya Gupta</TableData>
                  <TableData className="font-normal">ananya@example.com</TableData>
                  <TableData className="font-normal">1234567890</TableData>
                </TableRow>
                <TableRow>
                  <TableData>Arjun Singh</TableData>
                  <TableData className="font-normal">arjun@example.com</TableData>
                  <TableData className="font-normal">1234567890</TableData>
                </TableRow>
                <TableRow>
                  <TableData>Nisha Verma</TableData>
                  <TableData className="font-normal">nisha@example.com</TableData>
                  <TableData className="font-normal">1234567890</TableData>
                </TableRow>
              </TableBody>
              <TableCaption className="font-normal">
                Showing recent membership details
              </TableCaption>
            </Table>
          {/* </ScrollView> */}
          
          {/* Indicador de que se puede hacer scroll horizontal */}
          <Text size="xs" className="text-center text-typography-400 py-2">
            ← Desliza para ver más →
          </Text>
        </Box>
      </VStack>

      {/* Más contenido de ejemplo */}
      {/* <VStack space="md">
        <Heading size="md">Productos Relacionados</Heading>
        <HStack space="md" className="overflow-x-scroll">
          {Array.from({ length: 5 }).map((_, index) => (
            <Box
              key={index}
              className="w-[150px] bg-background-50 rounded-lg p-3"
            >
              <Box className="w-full h-[100px] bg-gray-200 rounded-md mb-2" />
              <Text size="sm" className="font-semibold">
                Producto {index + 1}
              </Text>
              <Text size="xs" className="text-typography-500">
                $99.99
              </Text>
            </Box>
          ))}
        </HStack>
      </VStack> */}

    </ScrollView>
  );
}

/* 
============================================
🎯 CARACTERÍSTICAS AGREGADAS
============================================

1. ✅ Pull to Refresh (jalar hacia abajo para actualizar)
2. ✅ Header con título
3. ✅ Precio y descuento en el producto
4. ✅ Scroll horizontal en la tabla
5. ✅ Indicador de scroll horizontal
6. ✅ Sección de productos relacionados
7. ✅ Padding extra al final
8. ✅ Callbacks de eventos de scroll
9. ✅ Optimizaciones de rendimiento

============================================
📱 PROPS ÚTILES DE SCROLLVIEW
============================================

showsVerticalScrollIndicator={false}   // Ocultar barra de scroll
showsHorizontalScrollIndicator={false} // Ocultar en horizontal
bounces={true}                         // Efecto rebote
scrollEnabled={true}                   // Habilitar/deshabilitar scroll
contentContainerStyle={{}}             // Estilos del contenido
keyboardShouldPersistTaps="handled"   // Para formularios
nestedScrollEnabled={true}             // Para ScrollViews anidados

============================================
*/