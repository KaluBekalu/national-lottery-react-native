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
import { useTranslation } from "react-i18next";
import Settings from "../screens/Settings";
import HomeNav from "./HomeNav";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({}) {
  const navigation = useNavigation();
  const { t } = useTranslation();

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
            headerStyle: headerStyle,

            unmountOnBlur: true,
          };
        }}
      >
        <Drawer.Screen
          name={routes.home_nav}
          options={{ headerShown: false, headerTitle: t("national_lottery") }}
          component={HomeNav}
        />
        {/* <Drawer.Screen
          name={routes.tickets}
          options={{ headerTitle: t("lot_number_filter") }}
          component={Tickets}
        />
        <Drawer.Screen
          name={routes.check_lotto_nav}
          options={{ headerTitle: t("lottery_numbers") }}
          component={CheckLottoNav}
        />
        <Drawer.Screen
          name={routes.testimonials}
          options={{ headerTitle: t("winners_story") }}
          component={Testimonials}
        /> */}
        {/* <Drawer.Screen
          name={routes.news_details}
          options={{ headerTitle: t("admas_digital_Lottery") }}
          component={NewsDetails}
        /> */}
        {/* <Drawer.Screen
          name={routes.contact_us}
          options={{ headerTitle: t("contact_us") }}
          component={ContactUs}
        />
        <Drawer.Screen
          name={routes.settings}
          options={{ headerTitle: t("settings") }}
          component={Settings}
        /> */}
      </Drawer.Navigator>
    </>
  );
}

export const headerStyle = {
  backgroundColor: colors.primary,
  elevation: 20,
  shadowColor: colors.black,
};
