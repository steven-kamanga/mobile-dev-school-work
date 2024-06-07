import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";

// Define a type for the status state
type PlaybackStatus = {
  isPlaying?: boolean;
};

export default function PlayVideo() {
  const video = React.useRef<Video>(null); // Specify the type of the ref for better type checking
  // Use the defined type for the initial state
  const [status, setStatus] = React.useState<PlaybackStatus>({});
  return (
    <Box className="flex-1 items-center">
      <Box>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={(statusUpdate) => {
            if (!statusUpdate.isLoaded) {
              // Handle loading error or initial loading state here
              // For example, you might want to reset the playback status state
              setStatus({});
            } else {
              // Now that we know the content is loaded, we can safely access isPlaying
              setStatus({ isPlaying: statusUpdate.isPlaying });
            }
          }}
        />
      </Box>
      <Button
        action="secondary"
        variant="outline"
        onPress={
          () =>
            status.isPlaying
              ? video.current?.pauseAsync() // Use optional chaining to safely call pauseAsync
              : video.current?.playAsync() // Use optional chaining to safely call playAsync
        }
      >
        <ButtonText>{status.isPlaying ? "Pause" : "Play"}</ButtonText>
      </Button>
    </Box>
  );
}

const styles = StyleSheet.create({
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
});
