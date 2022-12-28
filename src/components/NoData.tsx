import { RefreshControl, ScrollView, View } from "react-native";
import Lottie from "lottie-react-native";
import CText from "./CText";
import colors from "../constants/colors";
import { t } from "i18next";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const NoData = ({ message }: { message?: string }) => {
  const { loadingLotteries, reload } = useContext(DataContext);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={loadingLotteries} onRefresh={reload} />
      }
      style={{
        flex: 1,
        height: "100%",
      }}
      contentContainerStyle={{
        flex: 1,
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
    </ScrollView>
  );
};
