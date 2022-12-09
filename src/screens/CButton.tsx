import React from "react";
import {
  Dimensions,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import CText from "../components/CText";
import colors from "../constants/colors";

const { width, height } = Dimensions.get("window");

interface IButton {
  title?: string;
  onPress?: any;
  style?: ViewStyle;
  textStyle?: StyleProp<TextStyle>;
}

export const CButton = ({
  onPress,
  title = "Button",
  style,
  textStyle,
}: IButton) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[
        {
          backgroundColor: colors.lightBlue,
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
          width: width * 0.9,
          alignSelf: "center",
          bottom: -30,
          borderRadius: 5,
          elevation: 10,
        },
        { ...style },
      ]}
    >
      <CText
        content={title}
        style={[
          {
            fontWeight: "bold",
            color: colors.white,
            margin: 5,
          },
          textStyle,
        ]}
      />
    </TouchableOpacity>
  );
};
