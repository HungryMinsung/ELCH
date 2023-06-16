import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { BackGround } from "../../assets";

function SignUp() {
  return (
    <ImageBackground source={BackGround} style={styles.background}>
      <Text style={styles.text}>Sign Up</Text>
      <TextInput placeholder="ID" style={styles.textInput}></TextInput>
      <TextInput placeholder="Password" style={styles.textInput}></TextInput>
      <TextInput
        placeholder="Password check"
        style={styles.textInput}
      ></TextInput>
      <TextInput
        placeholder="Organization name"
        style={styles.textInput}
      ></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.button.text}>Submit</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    marginTop: 150,
  },
  background: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  textInput: {
    width: 280,
    height: 50,
    marginTop: 30,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: 10,
  },
  button: {
    width: 120,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#6F47DD",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 30,
    marginBottom: 15,
    text: {
      fontSize: 15,
      color: "#fff",
      fontWeight: "bold",
    },
  },
});
export default SignUp;
