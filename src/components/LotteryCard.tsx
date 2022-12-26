import { View, TouchableOpacity, Image } from "react-native";
import CText from "./CText";
import colors from "../constants/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ILottery } from "../utils/types";
import { trimText } from "../utils/functions";
import { useNavigation } from "@react-navigation/native";
import routes from "../navigations/routes";

export type LotteryCardPropTypes = {
  item: ILottery;
  navigation: any;
};
export const LotteryCard = ({ item, navigation }: LotteryCardPropTypes) => {
  return (
    <TouchableOpacity
      onPress={() => {
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
              Date.parse(item?.drawDate) > Date.now() ? "በሽያጭ ላይ" : "እጣ የወጣ"
            }
            style={{ fontSize: 12, color: colors.grey, fontStyle: "italic" }}
          />
        </View>
      </View>
      <Icon name="arrow-right" size={30} color={colors.primary} />
    </TouchableOpacity>
  );
};
