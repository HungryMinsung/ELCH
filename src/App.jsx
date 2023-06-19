import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import HomeScreen from "./pages/home";
import StudentScreen from "./pages/student";
import BottomTab from "./components/common/bottomTab";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
        <Stack.Screen name="ELCH" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
