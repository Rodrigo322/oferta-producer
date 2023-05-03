import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Bank, House, UserGear } from "phosphor-react-native";
import { useTabContext } from "../contexts/TabContext";
import { Home } from "../screens/Home";
import { MyBanks } from "../screens/MyBanks";
import { Settings } from "../screens/settings";
import { CreateProduct } from "../screens/CreateProduct";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  const { showTab } = useTabContext();
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
      {showTab && (
        <>
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
            name="CreateProduct"
            component={CreateProduct}
            options={{
              tabBarButton: () => null,
            }}
          />
        </>
      )}

      {!showTab && (
        <Screen
          name="MyBanks"
          component={MyBanks}
          options={{
            tabBarIcon: ({ color }) => (
              <Bank color={color} size={30} weight="fill" />
            ),
          }}
        />
      )}

      <Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <UserGear color={color} size={30} weight="fill" />
          ),
        }}
      />
    </Navigator>
  );
}
