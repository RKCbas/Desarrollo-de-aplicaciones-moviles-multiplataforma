import { useState, useCallback, useLayoutEffect } from "react";
import { FlatList, TouchableOpacity, Text as RNText } from "react-native";
import { useRouter, useFocusEffect, useNavigation } from "expo-router";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Pressable } from "@/components/ui/pressable";
import { Fab, FabIcon } from "@/components/ui/fab";
import { Plus } from "lucide-react-native";
import { useLocalSearchParams } from 'expo-router';

export default function PostsListScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  const { title } = useLocalSearchParams<{ title?: string }>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleAddPress}>
          <RNText style={{ color: "#ffffff", fontSize: 17, marginRight: 15 }}>
            Add
          </RNText>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleAddPress = () => {
    router.push({
      pathname: "/add-post",
      params: {
        title: "Add Post Screen",
      },
    });
  };

  const handlePostPress = () => {
    router.push({
      pathname: "/view-post",
      params: {
        title: "view Post Screen",
      },
    });
  };

  return (
    <Box className="flex-1 bg-blue-100">
      <VStack className="flex-1 items-center justify-center p-8">
        <Text
          className="text-3xl font-light text-gray-700 mb-8"
          onPress={handlePostPress}
        >
          {title ?? "Posts List Screen"}
        </Text>
      </VStack>
    </Box>
  );
}
