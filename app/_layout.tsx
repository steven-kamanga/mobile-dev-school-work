import "../global.css";
import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
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
      <Stack.Screen
        name="call-number/index"
        options={{
          title: "Call Number",
        }}
      />
      <Stack.Screen
        name="send-sms/index"
        options={{
          title: "Send SMS",
        }}
      />
      <Stack.Screen
        name="text-to-speech/index"
        options={{
          title: "Text To Speech",
        }}
      />
      <Stack.Screen
        name="restaurant-form/index"
        options={{
          title: "Restaurant Form",
        }}
      />
      <Stack.Screen
        name="activities-rn-example/index"
        options={{
          title: "Activities Class Example",
        }}
      />
    </Stack>
  );
};

export default RootLayout;
