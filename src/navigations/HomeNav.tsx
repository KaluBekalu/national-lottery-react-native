import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { useTranslation } from "react-i18next";
import HeaderLeft from "../components/HeaderLeft";
import colors from "../constants/colors";
import ContactUs from "../screens/ContactUs";
import { Home } from "../screens/Home";
import News from "../screens/News";
import NewsDetails from "../screens/NewsDetails";
import Procalimations from "../screens/Regulations";
import Settings from "../screens/Settings";
import Stories from "../screens/Stories";
import StoryDetails from "../screens/StoryDetails";
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
          name={routes.storys}
          options={{ headerTitle: t("storys") }}
          component={Stories}
        />
        <Stack.Screen
          name={routes.story_details}
          options={{ headerTitle: t("story_details") }}
          component={StoryDetails}
        />

        <Stack.Screen
          name={routes.news}
          options={{ headerTitle: t("news") }}
          component={News}
        />
        <Stack.Screen
          name={routes.news_details}
          options={{ headerTitle: t("news_details") }}
          component={NewsDetails}
        />

        <Stack.Screen
          name={routes.contact_us}
          options={{ headerTitle: t("contact_us") }}
          component={ContactUs}
        />
        <Stack.Screen
          name={routes.proclimations}
          options={{ headerTitle: t("rules_and_regulations") }}
          component={Procalimations}
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
