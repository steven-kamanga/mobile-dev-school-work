import React from "react";
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from "@/components/ui/radio";
import { HStack } from "@/components/ui/hstack";
import { CircleIcon } from "@/components/ui/icon";
import { Text } from "react-native";

interface RadioFormSectionProps {
  value: string;
  onChange: (value: string) => void;
}

const RadioFormSection: React.FC<RadioFormSectionProps> = ({
  value,
  onChange,
}) => {
  return (
    <RadioGroup className="mb-2" value={value} onChange={onChange}>
      <HStack space="sm">
        <Radio size="sm" value="halaal">
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
          <RadioLabel>Halaal</RadioLabel>
        </Radio>
        <Radio size="sm" value="malaal">
          <RadioIndicator>
            <RadioIcon as={CircleIcon} />
          </RadioIndicator>
          <RadioLabel>Malaal</RadioLabel>
        </Radio>
      </HStack>
    </RadioGroup>
  );
};

export default RadioFormSection;
