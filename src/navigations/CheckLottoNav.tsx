import { CardStyleInterpolators } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";
import CheckLotto from "../screens/CheckLotto";
import WinnerLoser from "../screens/WinnerLoser";
import routes from "./routes";

const Stack = createStackNavigator();

export const CheckLottoNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name={routes.check_lotto} component={CheckLotto} />
      <Stack.Screen name={routes.winner_loser} component={WinnerLoser} />
    </Stack.Navigator>
  );
};
