import { createStackNavigator } from "@react-navigation/stack";
import ChooseLanguage from "../screens/ChooseLanguage";
import Onboarding from "../screens/Onboarding";
import routes from "./routes";

const Stack = createStackNavigator();

export default function OnBoardingNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.chooseLanguage} component={ChooseLanguage} />
      <Stack.Screen name={routes.onboarding} component={Onboarding} />
    </Stack.Navigator>
  );
}
