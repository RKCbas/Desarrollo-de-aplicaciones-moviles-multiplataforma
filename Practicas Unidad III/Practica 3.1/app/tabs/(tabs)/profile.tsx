// app/(tabs)/profile.tsx - VERSIÓN COMPLETA CON GALERÍA
import React, { useState } from "react";
import { ScrollView, Image, Pressable, Dimensions } from "react-native";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Button, ButtonText, ButtonIcon } from "@/components/ui/button";
import {
  Avatar,
  AvatarImage,
  AvatarFallbackText,
} from "@/components/ui/avatar";
import { Divider } from "@/components/ui/divider";
import { Badge, BadgeText } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { EditIcon, ShareIcon } from "@/components/ui/icon";
import ProfileOptions from "@/components/profile/ProfileOptions";
import { Grid, GridItem } from "@/components/ui/grid";
import { Spinner } from "@/components/ui/spinner";

const { width } = Dimensions.get("window");
const imageSize = (width - 48) / 3;

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleLogout = () => {
    logout();
    router.replace("/");
  };

  const handleEditProfile = () => {
    console.log("Editar perfil");
  };

  const userData = {
    name: user?.name || "Usuario",
    email: user?.email || "usuario@ejemplo.com",
    avatar: null,
    memberSince: "2024",
    bio: "Desarrollador apasionado por React Native y Gluestack UI",
    stats: {
      projects: 12,
      followers: 234,
      following: 89,
    },
    badges: ["Premium", "Verificado", "Early Adopter"],
  };

  // Imágenes de la galería
  const galleryImages = [
    { id: 1, url: "https://picsum.photos/400/400?random=1", likes: 234 },
    { id: 2, url: "https://picsum.photos/400/400?random=2", likes: 189 },
    { id: 3, url: "https://picsum.photos/400/400?random=3", likes: 567 },
    { id: 4, url: "https://picsum.photos/400/400?random=4", likes: 123 },
    { id: 5, url: "https://picsum.photos/400/400?random=5", likes: 345 },
    { id: 6, url: "https://picsum.photos/400/400?random=6", likes: 678 },
    { id: 7, url: "https://picsum.photos/400/400?random=7", likes: 234 },
    { id: 8, url: "https://picsum.photos/400/400?random=8", likes: 456 },
    { id: 9, url: "https://picsum.photos/400/400?random=9", likes: 789 },
  ];

  return (
    <ScrollView
      className="flex-1 bg-background-0"
      showsVerticalScrollIndicator={false}
    >
      {/* Header con gradient */}
      <Box className="bg-primary-500 h-32 relative" />

      {/* Avatar y nombre */}
      <Box className="px-6 -mt-16">
        <VStack space="md" className="items-center">
          {/* Avatar */}
          <Box className="bg-white rounded-full p-2 shadow-lg">
            <Avatar size="2xl">
              {userData.avatar ? (
                <AvatarImage source={{ uri: userData.avatar }} />
              ) : (
                <AvatarFallbackText>{userData.name}</AvatarFallbackText>
              )}
            </Avatar>
          </Box>

          {/* Nombre y email */}
          <VStack space="xs" className="items-center">
            <Heading size="xl" className="text-center">
              {userData.name}
            </Heading>
            <Text className="text-typography-500 text-center">
              {userData.email}
            </Text>
            <HStack space="sm" className="mt-2">
              {userData.badges.map((badge, index) => (
                <Badge key={index} size="sm" variant="solid" action="info">
                  <BadgeText>{badge}</BadgeText>
                </Badge>
              ))}
            </HStack>
          </VStack>

          {/* Bio */}
          {userData.bio && (
            <Text className="text-center text-typography-600 mt-2 max-w-sm">
              {userData.bio}
            </Text>
          )}

          {/* Stats */}
          <HStack space="2xl" className="mt-4 justify-center">
            <VStack space="xs" className="items-center">
              <Heading size="lg">{userData.stats.projects}</Heading>
              <Text size="sm" className="text-typography-500">
                Proyectos
              </Text>
            </VStack>
            <VStack space="xs" className="items-center">
              <Heading size="lg">{userData.stats.followers}</Heading>
              <Text size="sm" className="text-typography-500">
                Seguidores
              </Text>
            </VStack>
            <VStack space="xs" className="items-center">
              <Heading size="lg">{userData.stats.following}</Heading>
              <Text size="sm" className="text-typography-500">
                Siguiendo
              </Text>
            </VStack>
          </HStack>

          {/* Botones de acción */}
          <HStack space="md" className="mt-4">
            <Button size="md" className="flex-1" onPress={handleEditProfile}>
              <ButtonIcon as={EditIcon} />
              <ButtonText className="ml-2">Editar Perfil</ButtonText>
            </Button>
            <Button
              size="md"
              variant="outline"
              onPress={() => console.log("Compartir perfil")}
            >
              <ButtonIcon as={ShareIcon} />
            </Button>
          </HStack>
        </VStack>

        <Divider className="my-6" />

        {/* 🖼️ GALERÍA */}
        <VStack space="md" className="mb-6">
          <HStack className="items-center justify-between">
            <VStack>
              <Heading size="md">Galería</Heading>
              <Text size="sm" className="text-typography-500">
                {galleryImages.length} fotos
              </Text>
            </VStack>
            <Pressable onPress={() => console.log("Ver todas")}>
              <HStack space="xs" className="items-center">
                <Text size="sm" className="text-primary-500 font-semibold">
                  Ver todas
                </Text>
                <FontAwesome name="arrow-right" size={12} color="#667eea" />
              </HStack>
            </Pressable>
          </HStack>
          {/* Grid de imágenes */}
          <Box className="flex-row flex-wrap gap-2">
            <Grid
              className="gap-4"
              _extra={{
                className: "grid-cols-3",
              }}
            >
              {/* Primeras 2 imágenes arriba */}
              {galleryImages.slice(0, 1).map((image) => (
                <GridItem
                  key={image.id}
                  _extra={{
                    className: "col-span-3",
                  }}
                >
                  <Pressable
                    onPress={() => {
                      setSelectedImage(
                        selectedImage === image.id ? null : image.id
                      );
                      console.log("Imagen:", image.id);
                    }}
                  >
                    <Box
                      className="rounded-xl overflow-hidden bg-gray-200 relative"
                      style={{ width: "100%", height: imageSize }}
                    >
                      <Image
                        source={{ uri: image.url }}
                        style={{ width: "100%", height: "100%" }}
                        resizeMode="cover"
                      />

                      {/* Overlay al seleccionar */}
                      {selectedImage === image.id && (
                        <Box className="absolute inset-0 bg-black/50 items-center justify-center">
                          <VStack space="xs" className="items-center">
                            <FontAwesome name="heart" size={24} color="white" />
                            <Text className="text-white text-sm font-bold">
                              {image.likes}
                            </Text>
                          </VStack>
                        </Box>
                      )}
                    </Box>
                  </Pressable>
                </GridItem>
              ))}

              {/* Grid anidado con las demás imágenes */}
              <GridItem
                _extra={{
                  className: "col-span-3",
                }}
              >
                <Grid
                  className="gap-4"
                  _extra={{
                    className: "grid-cols-3",
                  }}
                >
                  {galleryImages.slice(1).map((image) => (
                    <GridItem
                      key={image.id}
                      _extra={{
                        className: "col-span-1",
                      }}
                    >
                      <Pressable
                        onPress={() => {
                          setSelectedImage(
                            selectedImage === image.id ? null : image.id
                          );
                          console.log("Imagen:", image.id);
                        }}
                      >
                        <Box
                          className="rounded-xl overflow-hidden bg-gray-200 relative"
                          style={{ width: imageSize, height: imageSize }}
                        >
                          <Image
                            source={{ uri: image.url }}
                            style={{ width: "100%", height: "100%" }}
                            resizeMode="cover"
                          />

                          {/* Overlay al seleccionar */}
                          {selectedImage === image.id && (
                            <Box className="absolute inset-0 bg-black/50 items-center justify-center">
                              <VStack space="xs" className="items-center">
                                <FontAwesome
                                  name="heart"
                                  size={24}
                                  color="white"
                                />
                                <Text className="text-white text-sm font-bold">
                                  {image.likes}
                                </Text>
                              </VStack>
                            </Box>
                          )}
                        </Box>
                      </Pressable>
                    </GridItem>
                  ))}
                </Grid>
              </GridItem>
            </Grid>
          </Box>
        </VStack>

        <Divider className="my-6" />

        {/* Información adicional */}
        <VStack space="md" className="mb-6">
          <Heading size="md" className="mb-2">
            Información
          </Heading>

          <HStack space="md" className="items-center py-3">
            <Box className="w-10 h-10 items-center justify-center bg-primary-100 rounded-full">
              <FontAwesome name="envelope" size={18} color="#667eea" />
            </Box>
            <VStack className="flex-1">
              <Text size="sm" className="text-typography-500">
                Email
              </Text>
              <Text className="font-medium">{userData.email}</Text>
            </VStack>
          </HStack>

          <HStack space="md" className="items-center py-3">
            <Box className="w-10 h-10 items-center justify-center bg-primary-100 rounded-full">
              <FontAwesome name="calendar" size={18} color="#667eea" />
            </Box>
            <VStack className="flex-1">
              <Text size="sm" className="text-typography-500">
                Miembro desde
              </Text>
              <Text className="font-medium">{userData.memberSince}</Text>
            </VStack>
          </HStack>

          <HStack space="md" className="items-center py-3">
            <Box className="w-10 h-10 items-center justify-center bg-primary-100 rounded-full">
              <FontAwesome name="map-marker" size={18} color="#667eea" />
            </Box>
            <VStack className="flex-1">
              <Text size="sm" className="text-typography-500">
                Ubicación
              </Text>
              <Text className="font-medium">México</Text>
            </VStack>
          </HStack>
        </VStack>

        <Divider className="my-6" />

        {/* Opciones */}
        {/* <VStack space="sm" className="mb-6">
          <Heading size="md" className="mb-2">Opciones</Heading>

          <Button 
            variant="outline" 
            className="justify-start"
            onPress={() => router.push('/tabs/home')}
          >
            <HStack space="md" className="items-center flex-1">
              <FontAwesome name="cog" size={20} color="#666" />
              <Text>Configuración</Text>
            </HStack>
            <FontAwesome name="chevron-right" size={16} color="#999" />
          </Button>

          <Button 
            variant="outline" 
            className="justify-start"
            onPress={() => console.log('Ayuda')}
          >
            <HStack space="md" className="items-center flex-1">
              <FontAwesome name="question-circle" size={20} color="#666" />
              <Text>Ayuda</Text>
            </HStack>
            <FontAwesome name="chevron-right" size={16} color="#999" />
          </Button>

          <Button 
            variant="outline" 
            className="justify-start"
            onPress={() => console.log('Privacidad')}
          >
            <HStack space="md" className="items-center flex-1">
              <FontAwesome name="shield" size={20} color="#666" />
              <Text>Privacidad</Text>
            </HStack>
            <FontAwesome name="chevron-right" size={16} color="#999" />
          </Button>

        </VStack> */}

        <ProfileOptions></ProfileOptions>

        <Divider className="my-6" />
        <Spinner size="large" color="grey" />
        <Divider className="my-6" />
        {/* Botón de cerrar sesión */}
        <Button action="negative" className="mb-8" onPress={handleLogout}>
          <ButtonText className="ml-2">Cerrar Sesión</ButtonText>
        </Button>
      </Box>
    </ScrollView>
  );
}
