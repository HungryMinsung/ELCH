import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { HomeIcon, OpenBook, CheckImg } from "../../assets/index";
import HomeScreen from "../../pages/home";
import StudentScreen from "../../pages/student";
import CheckScreen from "../../pages/check";
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#6F47DD",
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          title: "검사",
          tabBarIcon: ({ color, size }) => (
            <CheckImg size={size} color={color} />
          ),
        }}
        name="check"
        component={CheckScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          title: "홈",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          title: "학생 관리",
          tabBarIcon: ({ size, color }) => (
            <OpenBook size={size} color={color} />
          ),
        }}
        name="Student"
        component={StudentScreen}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
