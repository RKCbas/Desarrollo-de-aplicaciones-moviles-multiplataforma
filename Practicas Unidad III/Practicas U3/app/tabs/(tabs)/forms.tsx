import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import React from "react";
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
// import { Box } from "@/components/ui/box";
import { AlertCircleIcon, CircleIcon } from "@/components/ui/icon";
import { HStack } from "@/components/ui/hstack";
import FormsExamples1 from "@/components/forms/FormsExamples1";
import { Dimensions, ScrollView } from "react-native";
import FormsExamples2 from "@/components/forms/FormsExamples2";
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from "@/components/ui/radio";
import { Center } from "@/components/ui/center";

export default function FormsScreen() {
  const [rValues, setRValues] = React.useState("Cash On Delivery");
  return (
    <Center className="flex-1 items-center mt-10 justify-start">
      <Heading className="font-bold text-2xl">Forms Screen</Heading>
      <Divider className="my-5 w-[80%]" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FormsExamples1></FormsExamples1>

        <Center>
          <FormControl
            isRequired
            isInvalid={!rValues}
            size="sm"
            className="max-w-[200px] w-full"
          >
            <FormControlLabel>
              <FormControlLabelText>Select one</FormControlLabelText>
            </FormControlLabel>
            <RadioGroup value={rValues} onChange={setRValues}>
              <HStack space="2xl" className="mt-2">
                <Radio value="Credit Card">
                  <RadioIndicator>
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Credit Card</RadioLabel>
                </Radio>
                <Radio value="">
                  <RadioIndicator>
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Nothing</RadioLabel>
                </Radio>
                
              </HStack>
            </RadioGroup>
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>Mandatory field</FormControlErrorText>
            </FormControlError>
          </FormControl>
        </Center>

        <FormsExamples2></FormsExamples2>
      </ScrollView>
    </Center>
  );
}
