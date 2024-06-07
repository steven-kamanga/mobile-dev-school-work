import "../global.css";
import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="play-audio/index"
        options={{
          title: "Audio Player",
        }}
      />
      <Stack.Screen
        name="play-video/index"
        options={{
          title: "Video Player",
        }}
      />
      <Stack.Screen
        name="capture/index"
        options={{
          title: "Say Cheese",
        }}
      />
    </Stack>
  );
};

export default RootLayout;
