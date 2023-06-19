import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { OpenBook, CheckImg } from "../../assets/index";
import BackgroundImg from "../../components/common/backgroundImg";

function HomeScreen({ navigation }) {
  return (
    <BackgroundImg>
      <Text style={styles.titleText}>
        기기 검사를{"\n  "}더{" "}
        <Text style={styles.titleText.textPurple}>쉽고</Text>
        {"\n    "}더 <Text style={styles.titleText.textPurple}>빠르게</Text>
      </Text>
      <View style={styles.selectBox}>
        <Text
          onPress={() => navigation.navigate("check")}
          style={styles.checker}
        >
          기기 검사하기
        </Text>
        <TouchableOpacity style={styles.circle}>
          <CheckImg />
        </TouchableOpacity>

        <Text style={styles.manage}>학생 관리하기</Text>
        <TouchableOpacity style={styles.circle}>
          <OpenBook />
        </TouchableOpacity>
      </View>
    </BackgroundImg>
  );
}

const styles = StyleSheet.create({
  titleText: {
    marginTop: 50,
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textPurple: {
      color: "#6F47DD",
    },
  },
  selectBox: {
    width: 300,
    height: 400,
    backgroundColor: "none",
    borderColor: "#fff",
    borderWidth: 3,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  circle: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 50,
    marginTop: 15,
    borderColor: "#6F47DD",
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  checker: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  manage: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    circle: {
      width: 100,
      height: 100,
      backgroundColor: "#fff",
      borderRadius: 50,
      marginTop: 15,
      borderColor: "#6F47DD",
      borderWidth: 3,
      justifyContent: "center",
      alignItems: "center",
    },
  },
});

export default HomeScreen;
