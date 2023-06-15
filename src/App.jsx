import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CustomHeader } from "../src/components/common/customHeader";

import SignIn from "./pages/signIn";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          // options={{ headerShown: false }}
          options={{
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
          }}
          name="ELCH"
          component={SignIn}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
