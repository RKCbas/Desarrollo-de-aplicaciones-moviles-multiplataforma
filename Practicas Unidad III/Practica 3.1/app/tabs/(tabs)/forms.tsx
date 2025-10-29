import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { CheckIcon, ChevronDownIcon, CircleIcon } from "@/components/ui/icon";
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
import {
  RadioGroup,
  Radio,
  RadioIndicator,
  RadioIcon,
  RadioLabel,
} from "@/components/ui/radio";
import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem } from "@/components/ui/select";

export default function FormsScreen() {
  const [values, setValues] = React.useState(["Eng"]);
  const [rValues, setRValues] = React.useState("Cash On Delivery");

  return (
    <Center className="flex-1">
      <Heading className="font-bold text-2xl">Forms Screen</Heading>
      <Divider className="my-5 w-[80%]" />

      <Text className="pb-4">Check Box</Text>
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
      <Text className="pb-4">Link</Text>
      <Link href="https://gluestack.io/">
        <LinkText>gluestack</LinkText>
      </Link>

      <Divider className="my-5 w-[80%]" />
      <Text className="pb-4">Pressable</Text>

      <Pressable
        onPress={() => console.log("Hello")}
        className="p-5 bg-primary-500 rounded-lg "
      >
        <Text className="text-typography-0">Press me</Text>
      </Pressable>

      <Divider className="my-5 w-[80%]" />
      <Text className="pb-4">Pressable</Text>

      <RadioGroup value={rValues} onChange={setRValues}>
        <HStack space="2xl">
          <Radio value="Credit Card">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>Credit Card</RadioLabel>
          </Radio>
          <Radio value="Cash On Delivery">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>Cash On Delivery</RadioLabel>
          </Radio>
        </HStack>
      </RadioGroup>

      <Divider className="my-5 w-[80%]" />
      <Text className="pb-4">Select</Text>
      <Select>
        <SelectTrigger variant="outline" size="md">
          <SelectInput placeholder="Select option" />
          <SelectIcon className="mr-3" as={ChevronDownIcon} />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="UX Research" value="ux" />
            <SelectItem label="Web Development" value="web" />
            <SelectItem
              label="Cross Platform Development Process"
              value="Cross Platform Development Process"
            />
            <SelectItem label="UI Designing" value="ui" isDisabled={true} />
            <SelectItem label="Backend Development" value="backend" />
          </SelectContent>
        </SelectPortal>
      </Select>
      
    </Center>
  );
}
