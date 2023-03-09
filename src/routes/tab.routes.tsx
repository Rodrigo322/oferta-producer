import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Bank, House } from "phosphor-react-native";
import { Home } from "../screens/Home";
import { MyBanks } from "../screens/MyBanks";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#075E55",
          height: 85,
        },
        tabBarStyle: {
          backgroundColor: "#075E55",
          height: 70,
          borderTopWidth: 1,
          borderTopColor: "#019972",
        },
        headerTintColor: "#075E55",
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#ccc",
        tabBarShowLabel: false,
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <House color={color} size={30} weight="fill" />
          ),
        }}
      />

      <Screen
        name="MyBanks"
        component={MyBanks}
        options={{
          tabBarIcon: ({ color }) => (
            <Bank color={color} size={30} weight="fill" />
          ),
        }}
      />
    </Navigator>
  );
}
