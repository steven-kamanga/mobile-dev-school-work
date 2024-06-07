import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { Text, TextInput } from "react-native";
import { Alert } from "react-native";

/** Example showing the implementation of Activity class from Adroid/Java
 * in React Native.
 */

const ActivitiesClass = () => {
  const [inputText, setInputText] = useState("");
  // Use effect to run some code when the component mounts and Dismounts.
  // In Android/Java, this is called onCreate and onDestroy.
  useEffect(() => {
    // Do something when the component mounts
    console.log("ActivitiesClass Mounted");

    return () => {
      // Do something when the component unmounts
      console.log("ActivitiesClass Unmounted");
    };
  });
  const handlePress = () => {
    Alert.alert("Button Pressed", `You entered: ${inputText}`);
  };

  const handleChangeText = (text: React.SetStateAction<string>) => {
    setInputText(text);
  };
  return (
    <Box className="flex-1 m-4 items-center">
      <Text>Simple Activity Class Example</Text>
      <Input className="mb-2 mt-2 w-36">
        <InputField
          className="text-typography-0"
          value={inputText}
          onChangeText={handleChangeText}
          autoCorrect={false}
          placeholder="Type something"
          type="text"
        />
      </Input>
      <Button
        action="primary"
        variant="outline"
        className="bg-blue-500 rounded-md mt-3 text-typography-950"
        onPress={() => handlePress()}
      >
        <ButtonText>Press me</ButtonText>
      </Button>
    </Box>
  );
};

export default ActivitiesClass;
