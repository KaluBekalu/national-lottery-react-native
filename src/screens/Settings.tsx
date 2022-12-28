import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import DropDown from "../components/DropDown";
import CText from "../components/CText";
import { useTranslation } from "react-i18next";
import colors from "../constants/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Settings = () => {
  const { i18n, t } = useTranslation();

  return (
    <View
      style={{ marginTop: 30, alignItems: "center", justifyContent: "center" }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>{t("language")}</Text>
      <View
        style={{ marginTop: 10, flexDirection: "row", paddingHorizontal: 20 }}
      >
        <TouchableOpacity
          style={{
            marginRight: 10,
            borderWidth: 2,
            paddingVertical: 5,
            paddingHorizontal: 15,
            flex: 1,
            borderRadius: 5,
            borderColor: i18n.language === "am" ? colors.primary : colors.grey,
          }}
          onPress={async () => {
            await AsyncStorage.setItem("language", "am");
            i18n.changeLanguage("am");
          }}
        >
          <CText
            style={{
              color: i18n.language === "am" ? colors.primary : colors.grey,
            }}
            content="አማርኛ"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginRight: 10,
            borderWidth: 2,
            paddingVertical: 5,
            paddingHorizontal: 15,
            flex: 1,
            borderRadius: 5,
            borderColor: i18n.language == "en" ? colors.primary : colors.grey,
          }}
          onPress={async () => {
            await AsyncStorage.setItem("language", "en");
            i18n.changeLanguage("en");
          }}
        >
          <CText
            style={{
              color: i18n.language == "en" ? colors.primary : colors.grey,
            }}
            content="English"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
