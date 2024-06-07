import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { router } from "expo-router";
import { ScrollView, Text } from "react-native";

export default function Page() {
  return (
    <Box className="flex-1 w-full bg-primary-950 items-center">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Button
          onPress={() => router.push("play-audio")}
          action="negative"
          className="mb-2 mt-2"
          variant="outline"
        >
          <ButtonText className=" text-typography-950">Play audio</ButtonText>
        </Button>
        <Button
          className="mb-2"
          onPress={() => router.push("play-video")}
          action="negative"
          variant="outline"
        >
          <ButtonText>Play Video</ButtonText>
        </Button>
        <Button
          className="mb-2"
          onPress={() => router.push("capture")}
          action="negative"
          variant="outline"
        >
          <ButtonText>Capture Image Using camera</ButtonText>
        </Button>
        <Button
          className="mb-2"
          onPress={() => router.push("call-number")}
          action="negative"
          variant="outline"
        >
          <ButtonText>Call A number</ButtonText>
        </Button>
      </ScrollView>
    </Box>
  );
}
