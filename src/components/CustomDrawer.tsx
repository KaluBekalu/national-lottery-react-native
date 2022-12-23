import React, { useContext } from "react";
import { Image, StyleSheet, ScrollView } from "react-native";
import * as Linking from "expo-linking";

import { View, Text, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "../constants/colors";
import { DataContext } from "../context/DataContext";
import routes from "../navigations/routes";
import CText from "./CText";

const CustomDrawer = ({ navigation }) => {
  const { fetchPosts } = useContext(DataContext);

  const menuOptions = [
    {
      key: 0,
      route: routes.home,
      title: "መነሻ ገፅ",
      icon: () => <Icon2 name="home" size={25} color={colors.white} />,
    },
    {
      key: 1,
      route: routes.check_lotto_nav,
      title: "ቁጥሮን ይፈትሹ",
      icon: () => (
        <Icon2 name="check-decagram" size={25} color={colors.white} />
      ),
    },
    {
      key: 2,
      route: routes.tickets,
      title: "አሸናፊ ቁጥሮች",
      icon: () => (
        <Icon2 name="format-list-numbered" size={25} color={colors.white} />
      ),
    },
    {
      key: 3,
      route: routes.check_lotto_nav,
      title: "የሎተሪ መውጫ ቀኖች",
      icon: () => <Icon name="calendar" size={25} color={colors.white} />,
    },
    {
      key: 4,
      route: routes.check_lotto_nav,
      title: "ዜና እና መረጃዎች",
      icon: () => <Icon2 name="newspaper" size={25} color={colors.white} />,
    },
    {
      key: 5,
      route: routes.testimonials,
      title: "የአሸናፊዎች ታሪክ",
      icon: () => <Icon2 name="nature-people" size={25} color={colors.white} />,
    },
    {
      key: 6,
      route: routes.contact_us,
      title: "ያግኙን",
      icon: () => <Icon2 name="phone" size={25} color={colors.white} />,
    },
    {
      key: 7,
      route: routes.check_lotto_nav,
      title: "ደንብና መመሪያዎች",
      icon: () => (
        <Icon2 name="format-list-bulleted" size={25} color={colors.white} />
      ),
    },
    {
      key: 8,
      route: routes.check_lotto_nav,
      title: "ቅንብር",
      icon: () => <Icon name="setting" size={25} color={colors.white} />,
    },
  ];

  return (
    <ScrollView
      style={{
        backgroundColor: colors.primary,
        flex: 1,
      }}
    >
      <View
        style={{
          alignItems: "center",
          width: "90%",
          borderRadius: 10,
          alignSelf: "center",
          paddingTop: 15,
          paddingBottom: 5,
        }}
      >
        <View
          style={{
            backgroundColor: colors.white,
            width: 150,
            elevation: 10,
            height: 150,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 150,
          }}
        >
          <Image
            resizeMode="contain"
            style={{ width: "100%" }}
            source={require("../../assets/icon.png")}
          />
        </View>
      </View>

      <View
        style={{
          height: 3,
          width: "92%",
          backgroundColor: colors.lightPrimary,
          alignSelf: "center",
          borderRadius: 10,
        }}
      />
      <View style={{}}>
        {menuOptions.map((option) => {
          return (
            <DrawerButton
              key={option.key}
              route={option.route}
              navigation={navigation}
              title={option.title}
              LeftIcon={option.icon}
            />
          );
        })}
      </View>

      <View
        style={{
          marginTop: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CText style={{ color: colors.white }} content="Contacts" />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity onPress={() => Linking.openURL("https://expo.dev")}>
            <Icon3
              name="phone"
              style={{ fontSize: 30, color: colors.white, margin: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL("https://expo.dev")}>
            <Icon3
              name="telegram"
              style={{ fontSize: 30, color: colors.white, margin: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL("https://expo.dev")}>
            <Icon3
              name="facebook-official"
              style={{ fontSize: 30, color: colors.white, margin: 20 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CustomDrawer;

const DrawerButton = ({
  route,
  navigation,
  title,
  LeftIcon,
  active = false,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        route && navigation.navigate(route);
      }}
      style={{
        flexDirection: "row",
        marginVertical: 5,
        backgroundColor: active ? colors.subtleWhite : colors.transparent,
        paddingHorizontal: 30,
        marginHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: "center",
      }}
    >
      <LeftIcon />
      <CText
        content={title}
        style={{ marginLeft: 10, color: colors.white, fontSize: 17 }}
      />
      <Icon
        name="right"
        color={colors.white}
        size={17}
        style={{ marginLeft: "auto" }}
      />
    </TouchableOpacity>
  );
};
