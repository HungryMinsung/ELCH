import react from "react";
import { ImageBackground, StyleSheet, Dimensions } from "react-native";
import { BackGround } from "../../assets/index";

const { width, height } = Dimensions.get("screen");

function BackGroundImg({ children }) {
  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
      source={BackGround}
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: "center",
    position: "absolute",
  },
});

export default BackGroundImg;
