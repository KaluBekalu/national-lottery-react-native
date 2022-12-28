import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import DrawerNavigator from "./src/navigations/DrawerNavigation";
import DataContextProvider, { DataContext } from "./src/context/DataContext";
import { useFonts } from "expo-font";
import OnBoardingNavigation from "./src/navigations/OnBoardingNavigation";
import { CardStyleInterpolators } from "@react-navigation/stack";
import "./i18n.config";

// Stack
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./src/navigations/routes";
import Tickets from "./src/screens/Tickets";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useState } from "react";
import { Loading } from "./src/components/Loading";
import { useTranslation } from "react-i18next";
import { StatusBar } from "expo-status-bar";
const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    lexend: require("./assets/fonts/Lexend.ttf"),
  });

  return (
    <>
      <StatusBar hidden />
      {fontsLoaded ? (
        <DataContextProvider>
          <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
              <AppNav />
            </SafeAreaView>
          </NavigationContainer>
        </DataContextProvider>
      ) : null}
    </>
  );
}

const AppNav = () => {
  const { setLanguage } = useContext(DataContext);
  const [onboardingDone, setOnboardingDone] = useState(false);
  const [ready, setReady] = useState(false);
  const { i18n } = useTranslation();

  const getItemsLocalstorage = async () => {
    let lan = await AsyncStorage.getItem("language");
    let onb = await AsyncStorage.getItem("onboarding");
    setLanguage(lan || "en");
    i18n.changeLanguage(lan);
    setOnboardingDone(Boolean(onb) || false);
    setReady(true);
  };

  const resetLocalStorage = async () => {
    let lan = await AsyncStorage.removeItem("language");
    let onb = await AsyncStorage.removeItem("onboarding");
  };

  useEffect(() => {
    getItemsLocalstorage();
    // resetLocalStorage();
    return () => {};
  }, []);

  if (!ready) return <Loading />;

  return (
    <>
      <StatusBar hidden={false} />

      <Stack.Navigator
        initialRouteName={
          onboardingDone ? routes.drawer : routes.onboarding_nav
        }
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen
          name={routes.onboarding_nav}
          component={OnBoardingNavigation}
        />
        <Stack.Screen name={routes.drawer} component={DrawerNavigator} />
      </Stack.Navigator>
    </>
  );
};
