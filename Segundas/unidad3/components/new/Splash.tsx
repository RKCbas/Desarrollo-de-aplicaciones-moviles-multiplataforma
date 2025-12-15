import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";


export function AppSplash() {
  return (
    <Box className="flex-1 items-center justify-center bg-[#0A3D91]">
      {/* Logo */}
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        }}
        alt="React Logo"
        className="w-32 h-32"
        resizeMode="contain"
      />

      <Text className="text-white text-4xl font-bold">About React</Text>
    </Box>
  );
}
