import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CustomHeader } from "../src/components/common/customHeader";
import { ImageBackground, View } from "react-native";
import { BackGround } from "../src/assets/index";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="로그인">
        <Stack.Screen
          // options={{ headerShown: false }}
          options={{
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
          }}
          name="로그인"
          component={SignIn}
        />

        <Stack.Screen
          // options={{ headerShown: false }}
          options={{
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
          }}
          name="회원가입"
          component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
