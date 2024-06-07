import { Box } from "@/components/ui/box";
import React, { useEffect, useState } from "react";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "react-native";

const PlayAudio = () => {
  const [sound, setSound] = useState<Sound | undefined>();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/gvng.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <Box className="flex-1 mt-2 items-center">
      <Button onPress={playSound} action="positive" variant="outline">
        <ButtonText className="  text-typography-950">Play audio</ButtonText>
      </Button>
    </Box>
  );
};

export default PlayAudio;
