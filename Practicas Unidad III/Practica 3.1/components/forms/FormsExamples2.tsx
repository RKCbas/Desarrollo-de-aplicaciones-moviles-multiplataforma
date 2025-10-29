import { Divider } from "@/components/ui/divider";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";

import React, { useState } from "react";

import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@/components/ui/slider";
import { Center } from "@/components/ui/center";
import { Switch } from "@/components/ui/switch";
// import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";

import { Textarea, TextareaInput } from "@/components/ui/textarea";

import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from "@/components/ui/select";
import { ChevronDownIcon, AlertCircleIcon } from "@/components/ui/icon";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
} from "@/components/ui/form-control";

export default function FormsExamples2() {
  const [allowNotifications, setAllowNotifications] = useState(false);
  const [publicProfile, setPublicProfile] = useState(true);

  const [selectedColor, setSelectedColor] = useState("");
  const [textValue, setTextValue] = useState("");


  return (
    <Center>
      <Divider className="my-5 w-[80%]" />
      <Text className="pb-4 text-center">Select</Text>

      <FormControl isRequired isInvalid={!selectedColor}>
        <FormControlLabel>
          <FormControlLabelText>
            Choose your favorite color
          </FormControlLabelText>
        </FormControlLabel>
        <Select selectedValue={selectedColor} onValueChange={setSelectedColor}>
          <SelectTrigger>
            <SelectInput placeholder="Select option" className="flex-1" />
            <SelectIcon className="mr-3" as={ChevronDownIcon} />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="Select option" value="" />
              <SelectItem label="Red" value="red" />
              <SelectItem label="Blue" value="blue" />
              <SelectItem label="Black" value="black" />
              <SelectItem label="Pink" value="pink" isDisabled={true} />
              <SelectItem label="Green" value="green" />
            </SelectContent>
          </SelectPortal>
        </Select>
        <FormControlHelper>
          <FormControlHelperText>
            You can only select one option
          </FormControlHelperText>
        </FormControlHelper>
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>Mandatory field</FormControlErrorText>
        </FormControlError>
      </FormControl>

      <Divider className="my-5 w-[80%]" />
      <Text className="pb-4 text-center">Slider</Text>

      <Center className="w-[300px] h-[50px]">
        <Slider
          defaultValue={30}
          size="md"
          orientation="horizontal"
          isDisabled={false}
          isReversed={false}
          minValue={0}
          maxValue={100}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Center>

      <Divider className="my-5 w-[80%]" />
      <Text className="pb-4 text-center">Switch</Text>

      <HStack space="2xl" className="flex-wrap">
        <VStack space="sm" className="items-center">
          <Switch
            value={allowNotifications}
            onValueChange={setAllowNotifications}
            trackColor={{ false: "#d4d4d4", true: "#525252" }}
            thumbColor="#fafafa"
            ios_backgroundColor="#d4d4d4"
          />
          <Text size="sm" className="text-center">
            Allow notifications
          </Text>
        </VStack>

        <VStack space="sm" className="items-center">
          <Switch
            value={publicProfile}
            onValueChange={setPublicProfile}
            trackColor={{ false: "#d4d4d4", true: "#525252" }}
            thumbColor="#fafafa"
            ios_backgroundColor="#d4d4d4"
          />
          <Text size="sm" className="text-center">
            Public profile
          </Text>
        </VStack>
      </HStack>

      <Divider className="my-5 w-[80%]" />
      <Text className="pb-4 text-center">TextArea</Text>

      <FormControl
        isRequired
        isInvalid={!textValue}
        size="sm"
        className="max-w-[200px] w-full"
      >
        <FormControlLabel>
          <FormControlLabelText>Write with me</FormControlLabelText>
        </FormControlLabel>
        <Textarea>
          <TextareaInput onChangeText={setTextValue} placeholder="Once upon a time..." />
        </Textarea>
        <FormControlHelper>
          <FormControlHelperText>Start your story</FormControlHelperText>
        </FormControlHelper>
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>Mandatory field</FormControlErrorText>
        </FormControlError>
      </FormControl>
      <Divider className="mb-0 mt-16 w-[80%]" />
    </Center>
  );
}
