import { createStackNavigator } from "@react-navigation/stack";
import { TransitionSpec } from "@react-navigation/stack/lib/typescript/src/types";
import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";

const MyTransition: TransitionSpec = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const { Screen, Navigator } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
        transitionSpec: {
          open: MyTransition,
          close: MyTransition,
        },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}
