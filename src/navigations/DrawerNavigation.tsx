import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import routes from "./routes";
import { Home } from "../screens/Home";
import CustomDrawer from "../components/CustomDrawer";
import { StatusBar } from "react-native";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({}) {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar
        hidden={false}
        backgroundColor="white"
        barStyle="dark-content"
      />
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer navigation={navigation} />}
        screenOptions={{}}
      >
        <Drawer.Screen
          name={routes.home}
          options={{ headerTitle: routes.home }}
          component={Home}
        />
      </Drawer.Navigator>
    </>
  );
}
