import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CustomHeader } from "../src/components/common/customHeader";
import { ImageBackground, View, Image, Dimensions } from "react-native";
import { BackGround } from "../src/assets/index";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Home from "./pages/home";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: "transparent",
          },
          // gestureEnabled: false,
        }}
        initialRouteName="로그인"
      >
        <Stack.Screen
          options={{
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
          }}
          name="로그인"
          component={SignIn}
        />
        <Stack.Screen
          options={{
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
          }}
          name="회원가입"
          component={SignUp}
        />
        <Stack.Screen
          options={{
            headerBackVisible: false,
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
          }}
          name="ELCH"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
