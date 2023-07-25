import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BagSimple,
  Bank,
  House,
  Storefront,
  UserGear,
} from "phosphor-react-native";
import { useTabContext } from "../contexts/TabContext";
import { Home } from "../screens/Home";
import { MyBanks } from "../screens/MyBanks";
import { Settings } from "../screens/settings";
import { CreateProduct } from "../screens/CreateProduct";
import { Orders } from "../screens/Orders";
import { DetailsOrders } from "../screens/DetailsOrders";
import { AddressProfile } from "../screens/AddressProfile";
import { Profile } from "../screens/Profile";
import { ResetPassword } from "../screens/ResetPassword";

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
            name="Orders"
            component={Orders}
            options={{
              tabBarIcon: ({ color }) => (
                <Storefront color={color} size={30} weight="fill" />
              ),
            }}
          />

          <Screen
            name="DetailsOrders"
            component={DetailsOrders}
            options={{
              tabBarButton: () => null,
            }}
          />

          <Screen
            name="AddressProfile"
            component={AddressProfile}
            options={{
              tabBarButton: () => null,
            }}
          />

          <Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarButton: () => null,
            }}
          />

          <Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{
              tabBarButton: () => null,
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
