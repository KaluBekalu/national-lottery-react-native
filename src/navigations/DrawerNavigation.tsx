import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import routes from "./routes";
import { Home } from "../screens/Home";
import CustomDrawer from "../components/CustomDrawer";
import { StatusBar } from "react-native";
import colors from "../constants/colors";
import CheckLotto from "../screens/CheckLotto";
import { LinearGradient } from "expo-linear-gradient";
import WinnerLoser from "../screens/WinnerLoser";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({}) {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar
        hidden={false}
        backgroundColor={colors.primary}
        barStyle="light-content"
      />
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer navigation={navigation} />}
        screenOptions={{
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 20,
            shadowColor: colors.black,
          },
        }}
      >
        <Drawer.Screen
          name={routes.winner_loser}
          options={{ headerTitle: "ብሔራዊ ሎተሪ አስተዳደር" }}
          component={WinnerLoser}
        />
        <Drawer.Screen
          name={routes.check_lotto}
          options={{ headerTitle: "የእጣ ቁጥሮች" }}
          component={CheckLotto}
        />
        <Drawer.Screen
          name={routes.home}
          options={{ headerTitle: "ብሔራዊ ሎተሪ አስተዳደር" }}
          component={Home}
        />
      </Drawer.Navigator>
    </>
  );
}
