import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import React from "react";

// import { Box } from "@/components/ui/box";
import { CircleIcon } from "@/components/ui/icon";
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
        </Center>

        <FormsExamples2></FormsExamples2>
      </ScrollView>
    </Center>
  );
}
