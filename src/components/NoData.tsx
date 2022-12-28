import { View } from "react-native";
import Lottie from "lottie-react-native";
import CText from "./CText";
import colors from "../constants/colors";
import { t } from "i18next";

export const NoData = ({ message }: { message?: string }) => {
  return (
    <View
      style={{
        flex: 1,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Lottie
        autoPlay
        style={{ width: 150 }}
        source={require("../../assets/no-data.json")}
      />
      <CText
        style={{ color: colors.grey }}
        content={message || t("no_data_available")}
      />
    </View>
  );
};
