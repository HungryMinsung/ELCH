import { ImageBackground, StyleSheet } from "react-native";
import { Background } from "../../assets/index";

function BackgroundImg({ children }) {
  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
      source={Background}
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    position: "absolute",
  },
});

export default BackgroundImg;
