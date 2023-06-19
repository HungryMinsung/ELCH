import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { OpenBook, CheckImg } from "../../assets/index";
import BackGroundImg from "../../components/common/backGroundImg";

function Home() {
  return (
    <BackGroundImg>
      <View>
        <Text style={styles.titleText}>
          Electronics{"\n"} 검사를{"\n "} 더{" "}
          <Text style={styles.titleText.textPurple}>쉽고</Text>
          {"\n  "} 더 <Text style={styles.titleText.textPurple}>빠르게</Text>
        </Text>
      </View>
      <View style={styles.selectBox}>
        <View style={styles.checker}>
          <Text style={styles.checker.text}>기기 검사하기</Text>
          <TouchableOpacity style={styles.checker.circle}>
            <CheckImg />
          </TouchableOpacity>
        </View>

        <View style={styles.manage}>
          <Text style={styles.manage.text}>학생 관리하기</Text>
          <TouchableOpacity style={styles.manage.circle}>
            <OpenBook />
          </TouchableOpacity>
        </View>
      </View>
    </BackGroundImg>
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
      fontSize: 30,
      fontWeight: "bold",
    },
  },
  selectBox: {
    width: 300,
    height: 400,
    marginTop: 50,
    backgroundColor: "none",
    borderColor: "#fff",
    borderWidth: 3,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  checker: {
    width: 300,
    height: 200,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    text: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#fff",
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
    },
    image: {
      width: 50,
      height: 50,
    },
  },
  manage: {
    width: 300,
    height: 200,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    alignItems: "center",
    text: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#fff",
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
    },
    image: {
      width: 50,
      height: 50,
    },
  },
});

export default Home;
