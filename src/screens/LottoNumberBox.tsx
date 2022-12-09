import React from "react";
import { View } from "react-native";
import CText from "../components/CText";
import colors from "../constants/colors";

export const LottoNumberBox = ({ content }) => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        height: 60,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
      }}
    >
      <CText
        content={content}
        style={{
          fontSize: 30,
          textAlign: "center",
          fontWeight: "bold",
          color: colors.primary,
        }}
      />
    </View>
  );
};
