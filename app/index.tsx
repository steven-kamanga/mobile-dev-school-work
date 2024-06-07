import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { router } from "expo-router";
import { ScrollView, Text } from "react-native";
import * as Linking from "expo-linking";

export default function Page() {
  return (
    <Box className="flex-1 w-full bg-primary-950 items-center">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Button
          onPress={() => router.push("play-audio")}
          action="negative"
          className="mb-2 mt-2 bg-blue-500"
          variant="outline"
        >
          <ButtonText className=" text-typography-950">Play audio</ButtonText>
        </Button>
        <Button
          className="mb-2 bg-blue-500"
          onPress={() => router.push("play-video")}
          action="negative"
          variant="outline"
        >
          <ButtonText>Play Video</ButtonText>
        </Button>
        <Button
          className="mb-2 bg-blue-500"
          onPress={() => router.push("capture")}
          action="negative"
          variant="outline"
        >
          <ButtonText>Capture Image Using camera</ButtonText>
        </Button>
        <Button
          className="mb-2 bg-blue-500"
          onPress={() => router.push("call-number")}
          action="negative"
          variant="outline"
        >
          <ButtonText>Call A number</ButtonText>
        </Button>
        <Button
          className="mb-2 bg-blue-500"
          onPress={() => router.push("send-sms")}
          action="negative"
          variant="outline"
        >
          <ButtonText>Send a Text</ButtonText>
        </Button>
        <Button
          className="mb-2 bg-blue-500"
          onPress={() => router.push("text-to-speech")}
          action="negative"
          variant="outline"
        >
          <ButtonText>Text to Speech</ButtonText>
        </Button>
        <Button
          className="mb-2 bg-blue-500"
          onPress={() => {
            Linking.openURL(
              "https://www.reddit.com/r/FlutterDev/comments/15pz2mg/after_4_years_in_flutter_i_am_disappointed/"
            );
          }}
          action="negative"
          variant="outline"
        >
          <ButtonText>Redirect User</ButtonText>
        </Button>
        <Button
          className="mb-2 bg-blue-500"
          onPress={() => router.push("restaurant-form")}
          action="negative"
          variant="outline"
        >
          <ButtonText>Restaurant Form</ButtonText>
        </Button>
      </ScrollView>
    </Box>
  );
}
