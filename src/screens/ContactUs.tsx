import { View, TouchableOpacity, Linking, Platform } from "react-native";
import React from "react";
import CText from "../components/CText";
import {} from "react-native-gesture-handler";
import colors from "../constants/colors";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FAIcons from "react-native-vector-icons/FontAwesome";
import { useTranslation } from "react-i18next";
import { contacts } from "../constants";

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <View style={{ padding: 10 }}>
      <View style={{}}>
        {contacts.map((contact) => {
          return (
            <TouchableOpacity
              key={Math.random()}
              onPress={() => Linking.openURL(contact.link)}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <View
                style={{
                  backgroundColor: colors.primary,
                  padding: 15,
                  width: 60,
                  alignItems: "center",
                }}
              >
                <FAIcons
                  size={20}
                  name={contact.icon}
                  style={{ color: colors.white }}
                />
              </View>
              <CText content={contact.value} style={{ padding: 5 }} />
            </TouchableOpacity>
          );
        })}
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        {contacts.map((contact) => {
          return (
            <TouchableOpacity
              key={contact.icon}
              style={{
                backgroundColor: colors.primary,
                marginHorizontal: 5,
                borderRadius: 100,
                width: 50,
                alignItems: "center",
                justifyContent: "center",
                height: 50,
              }}
              onPress={() => Linking.openURL(contact.link)}
            >
              <FAIcons
                name={contact.icon}
                style={{ fontSize: 30, color: colors.white }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default ContactUs;
