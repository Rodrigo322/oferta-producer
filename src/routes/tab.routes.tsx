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
          backgroundColor: "#181A20",
          height: 85,
        },
        tabBarStyle: {
          backgroundColor: "#181A20",
          height: 70,
          borderTopWidth: 1,
          borderTopColor: "#019972",
        },
        headerTintColor: "#181A20",
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
