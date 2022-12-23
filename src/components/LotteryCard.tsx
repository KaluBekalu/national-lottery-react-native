import { View, TouchableOpacity } from "react-native";
import CText from "./CText";
import colors from "../constants/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const LotteryCard = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        marginVertical: 3,
        backgroundColor: colors.white,
        marginHorizontal: 10,
        padding: 10,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            backgroundColor: colors.primary,
            width: 50,
            height: 50,
            borderRadius: 50,
            marginRight: 10,
          }}
        />
        <View>
          <CText content={item.title} />
          <CText
            content={item.status}
            style={{ fontSize: 12, color: colors.grey }}
          />
        </View>
      </View>
      <Icon name="arrow-right" size={30} color={colors.primary} />
    </TouchableOpacity>
  );
};
