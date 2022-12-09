import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import DrawerNavigator from "./src/navigations/DrawerNavigation";
import DataContextProvider from "./src/context/DataContext";
import { useFonts } from "expo-font";
import Onboarding from "./src/screens/ChooseLanguage";
import OnBoardingNavigation from "./src/navigations/OnBoardingNavigation";
import { CardStyleInterpolators } from "@react-navigation/stack";

// Stack
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./src/navigations/routes";
const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    lexend: require("./assets/fonts/Lexend.ttf"),
  });

  return (
    <>
      {fontsLoaded ? (
        <DataContextProvider>
          <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
              {/* <AppNav /> */}
              <DrawerNavigator />
            </SafeAreaView>
          </NavigationContainer>
        </DataContextProvider>
      ) : null}
    </>
  );
}

const AppNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name={routes.onboardingNav}
        component={OnBoardingNavigation}
      />
      <Stack.Screen name={routes.drawer} component={DrawerNavigator} />
    </Stack.Navigator>
  );
};
