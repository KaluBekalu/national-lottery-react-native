import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import routes from "./routes";
import { Home } from "../screens/Home";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({}) {
  const navigation = useNavigation();

  return (
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
  );
}
