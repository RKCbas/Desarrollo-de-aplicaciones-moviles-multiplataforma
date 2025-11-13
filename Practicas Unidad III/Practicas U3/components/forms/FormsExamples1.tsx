import { Divider } from "@/components/ui/divider";
import { HStack } from "@/components/ui/hstack";
import { CheckIcon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";

import {
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import React from "react";
import { LinkText } from "@/components/ui/link";
import { Link } from "expo-router";
import { Pressable } from "react-native";
// import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";

export default function FormsExamples1() {
  const [values, setValues] = React.useState(["Eng"]);

  const [pressText, setPressText] = React.useState("Press me");

  return (
    <Center>
      <Text className="pb-4 text-center">Check Box</Text>
      <CheckboxGroup
        value={values}
        onChange={(keys) => {
          setValues(keys);
        }}
      >
        <HStack space="2xl">
          <Checkbox value="Illustration">
            <CheckboxIndicator>
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Illustration</CheckboxLabel>
          </Checkbox>
          <Checkbox value="Animation">
            <CheckboxIndicator>
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Animation</CheckboxLabel>
          </Checkbox>
          <Checkbox value="Typography">
            <CheckboxIndicator>
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Typography</CheckboxLabel>
          </Checkbox>
        </HStack>
      </CheckboxGroup>

      <Divider className="my-5 w-[80%]" />
      <Text className="pb-4 text-center">Link</Text>
      <Link href="https://gluestack.io/">
        <LinkText className="text-center">gluestack</LinkText>
      </Link>

      <Divider className="my-5 w-[80%]" />
      <Text className="pb-4 text-center">Pressable</Text>

      <Center>
        <Pressable
          onPress={() => {
            console.log("Hell, Button Pressed");
            setPressText("Pressed");
          }}
          className="p-5 bg-primary-500 rounded-lg "
        >
          <Text className="text-typography-0">{pressText}</Text>
        </Pressable>
      </Center>

      <Divider className="my-5 w-[80%]" />
      <Text className="pb-4 text-center">Radio</Text>

    </Center>
  );
}
