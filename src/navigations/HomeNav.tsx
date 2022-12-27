import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { useTranslation } from "react-i18next";
import { StatusBar } from "react-native";
import HeaderLeft from "../components/HeaderLeft";
import colors from "../constants/colors";
import ChooseLanguage from "../screens/ChooseLanguage";
import ContactUs from "../screens/ContactUs";
import { Home } from "../screens/Home";
import News from "../screens/News";
import NewsDetails from "../screens/NewsDetails";
import Onboarding from "../screens/Onboarding";
import Settings from "../screens/Settings";
import Testimonials from "../screens/Testimonials";
import Tickets from "../screens/Tickets";
import { CheckLottoNav } from "./CheckLottoNav";
import { headerStyle } from "./DrawerNavigation";
import routes from "./routes";

const Stack = createStackNavigator();

export default function HomeNav({ navigation }) {
  const { t } = useTranslation();
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: headerStyle,
          headerTintColor: colors.white,
          headerTitleAlign: "center",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen
          options={{
            headerTitle: t("national_lottery"),
            headerLeft: () => (
              <HeaderLeft navigation={navigation} icon={"menu"} />
            ),
          }}
          name={routes.home}
          component={Home}
        />
        <Stack.Screen
          name={routes.news_details}
          options={{ headerTitle: t("news_details") }}
          component={NewsDetails}
        />
        <Stack.Screen
          name={routes.tickets}
          options={{ headerTitle: t("lot_number_filter") }}
          component={Tickets}
        />
        <Stack.Screen
          name={routes.check_lotto_nav}
          options={{ headerTitle: t("lottery_numbers") }}
          component={CheckLottoNav}
        />
        <Stack.Screen
          name={routes.testimonials}
          options={{ headerTitle: t("winners_story") }}
          component={Testimonials}
        />
        <Stack.Screen
          name={routes.news}
          options={{ headerTitle: t("news") }}
          component={News}
        />
        <Stack.Screen
          name={routes.contact_us}
          options={{ headerTitle: t("contact_us") }}
          component={ContactUs}
        />
        <Stack.Screen
          name={routes.settings}
          options={{ headerTitle: t("settings") }}
          component={Settings}
        />
      </Stack.Navigator>
    </>
  );
}
