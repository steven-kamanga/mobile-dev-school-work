import {
  Camera,
  CameraType,
  CameraView,
  useCameraPermissions,
} from "expo-camera"; // Import Camera here
import { useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as MediaLibrary from "expo-media-library";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";

export default function Capture() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<any>(null);

  async function handleCapture() {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);

      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status === "granted") {
        const asset = await MediaLibrary.createAssetAsync(data.uri);
        await MediaLibrary.createAlbumAsync("YourAlbumName", asset, false);
      }
    }
  }

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission}>
          <ButtonText>Request Permission</ButtonText>
        </Button>
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <Box className="flex-1">
      <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
        <Box
          className="flex-1 bg-transparent m-16 flex-row justify-center items-end
        "
        >
          <Button
            className="mr-2"
            action="primary"
            variant="outline"
            onPress={toggleCameraFacing}
          >
            <ButtonText>Flip Camera</ButtonText>
          </Button>
          <Button action="primary" variant="outline" onPress={handleCapture}>
            <ButtonText>Capture</ButtonText>
          </Button>
        </Box>
      </CameraView>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
