import { View, TouchableOpacity, Linking, Platform } from "react-native";
import React from "react";
import CText from "../components/CText";
import {} from "react-native-gesture-handler";
import colors from "../constants/colors";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FAIcons from "react-native-vector-icons/FontAwesome";

const ContactUs = () => {
  const contacts = [
    {
      icon: "phone",
      value: "+251111553387",
      link:
        Platform.OS === "android"
          ? "tel:+251111553387"
          : "telprompt:+251111553387",
    },
    {
      icon: "facebook",
      value: "https://m.facebook.com/National Lottery Administration",
      link: "https://m.facebook.com",
    },
    {
      icon: "telegram",
      value: "https://t.me/national_lottery",
      link: "https://t.me/national_lottery",
    },
  ];

  return (
    <View style={{ padding: 10 }}>
      <CText
        content="Contact us"
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginVertical: 10,
          fontSize: 25,
        }}
      />
      <View style={{}}>
        {contacts.map((contact) => {
          return (
            <TouchableOpacity
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
