import { View, Text, StyleSheet } from "react-native";

const CustomHeader = ({ props }) => {
  return (
    <View style={styles.container}>
      <Text>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "60px",
  },
});

export default CustomHeader;
