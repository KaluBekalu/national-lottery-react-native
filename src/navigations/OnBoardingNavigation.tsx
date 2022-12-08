import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { StatusBar } from "react-native";
import ChooseLanguage from "../screens/ChooseLanguage";
import Onboarding from "../screens/Onboarding";
import routes from "./routes";

const Stack = createStackNavigator();

export default function OnBoardingNavigation() {
  return (
    <>
      <StatusBar hidden />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name={routes.chooseLanguage} component={ChooseLanguage} />
        <Stack.Screen name={routes.onboarding} component={Onboarding} />
      </Stack.Navigator>
    </>
  );
}
