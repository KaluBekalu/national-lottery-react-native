import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CText from "../components/CText";
import colors from "../constants/colors";
import routes from "../navigations/routes";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { width, height } = Dimensions.get("screen");

export default function ChooseLanguage({ navigation }) {
  return (
    <ImageBackground
      style={[
        StyleSheet.absoluteFill,
        {
          justifyContent: "flex-end",
          alignItems: "center",
          paddingVertical: 100,
        },
      ]}
      source={require("../../assets/splash-screen.png")}
    >
      {[
        { key: 0, title: "አማርኛ", value: "am" },
        { key: 1, title: "English", value: "en" },
      ].map((b) => {
        return (
          <Button
            key={b.key}
            title={b.title}
            onPress={async () => {
              await AsyncStorage.setItem("language", b.value);
              navigation.navigate(routes.onboarding);
            }}
          />
        );
      })}
    </ImageBackground>
  );
}

const Button = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        style={{
          padding: 15,
          margin: 5,
          borderWidth: 0.8,
          borderColor: colors.white,
          width: width - 100,
          borderRadius: 20,
          alignItems: "center",
        }}
        colors={[colors.transparent, colors.subtleWhite, colors.transparent]}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 0.3, y: 1 }}
      >
        <CText
          content={title}
          style={{ fontWeight: "bold", color: colors.white, fontSize: 20 }}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};
