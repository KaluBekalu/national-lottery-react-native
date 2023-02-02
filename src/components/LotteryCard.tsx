import { View, TouchableOpacity, Image, ToastAndroid } from "react-native";
import CText from "./CText";
import colors from "../constants/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ILottery } from "../utils/types";
import { trimText } from "../utils/functions";
import { useNavigation } from "@react-navigation/native";
import routes from "../navigations/routes";
import { useTranslation } from "react-i18next";

export type LotteryCardPropTypes = {
  item: ILottery;
  navigation: any;
};
export const LotteryCard = ({ item, navigation }: LotteryCardPropTypes) => {
  const { t } = useTranslation();

  const showToast = () => {
    ToastAndroid.show(t("lottery_not_drawn_yet"), ToastAndroid.SHORT);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        if (Date.parse(item?.drawDate) > Date.now()) {
          return showToast();
        }
        navigation.navigate(routes.check_lotto_nav, {
          screen: routes.check_lotto,
          params: { lotteryId: item.id },
        });
      }}
      activeOpacity={0.5}
      style={{
        flexDirection: "row",
        marginVertical: 3,
        backgroundColor: colors.white,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{ uri: item?.image }}
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            marginRight: 10,
          }}
        />
        <View>
          <CText content={trimText(item.name, 25)} />

          <CText
            content={
              Date.parse(item?.drawDate) > Date.now()
                ? t("on_sale")
                : t("drawn")
            }
            style={{ fontSize: 12, color: colors.grey, fontStyle: "italic" }}
          />
        </View>
      </View>
      <Icon name="arrow-right" size={30} color={colors.primary} />
    </TouchableOpacity>
  );
};
