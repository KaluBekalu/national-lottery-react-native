import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import routes from "./routes";
import { Home } from "../screens/Home";
import CustomDrawer from "../components/CustomDrawer";
import { StatusBar } from "react-native";
import colors from "../constants/colors";
import CheckLotto from "../screens/CheckLotto";
import { LinearGradient } from "expo-linear-gradient";
import WinnerLoser from "../screens/WinnerLoser";
import { CheckLottoNav } from "./CheckLottoNav";
import Tickets from "../screens/Tickets";
import Testimonials from "../screens/Testimonials";
import NewsDetails from "../screens/NewsDetails";
import ContactUs from "../screens/ContactUs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

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
        screenOptions={() => {
          return {
            headerTitleStyle: { fontWeight: "bold" },
            headerTitleAlign: "center",
            headerTintColor: colors.white,
            headerStyle: {
              backgroundColor: colors.primary,
              elevation: 20,
              shadowColor: colors.black,
            },

            unmountOnBlur: true,
          };
        }}
      >
        <Drawer.Screen
          name={routes.home}
          options={{ headerTitle: "ብሔራዊ ሎተሪ አስተዳደር" }}
          component={Home}
        />
        <Drawer.Screen
          name={routes.tickets}
          options={{ headerTitle: "የእጣ ቁጥር  ማጣሪያ" }}
          component={Tickets}
        />
        <Drawer.Screen
          name={routes.check_lotto_nav}
          options={{ headerTitle: "የእጣ ቁጥሮች" }}
          component={CheckLottoNav}
        />
        <Drawer.Screen
          name={routes.testimonials}
          options={{ headerTitle: "የአሸናፊዎች ታሪክ" }}
          component={Testimonials}
        />
        <Drawer.Screen
          name={routes.news_details}
          options={{ headerTitle: "አድማስ ድጂታል ሎተሪ" }}
          component={NewsDetails}
        />
        <Drawer.Screen
          name={routes.contact_us}
          options={{ headerTitle: "ያግኙን" }}
          component={ContactUs}
        />
      </Drawer.Navigator>
    </>
  );
}

// HEADER LEFT
// headerLeft: () => {
//   return (
//     <TouchableOpacity
//       onPress={() => navigation.goBack()}
//       style={{
//         padding: 5,
//         height: "100%",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <Icon name="arrow-left" size={25} color={colors.white} />
//     </TouchableOpacity>
//   );
// },
