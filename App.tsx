import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import DrawerNavigator from "./src/navigations/DrawerNavigation";
import DataContextProvider from "./src/context/DataContext";
import { useFonts } from "expo-font";
import Onboarding from "./src/screens/ChooseLanguage";
import OnBoardingNavigation from "./src/navigations/OnBoardingNavigation";

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
              {/* <DrawerNavigator /> */}
              <OnBoardingNavigation />
            </SafeAreaView>
          </NavigationContainer>
        </DataContextProvider>
      ) : null}
    </>
  );
}
