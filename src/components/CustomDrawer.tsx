import React, { useContext, useEffect, useState } from "react";
import { Alert, Image, StyleSheet, ScrollView } from "react-native";

import { View, Text, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "../constants/colors";
import { DataContext } from "../context/DataContext";
import routes from "../navigations/routes";
import { logout } from "../utils/firebase";
import CText from "./CText";

const CustomDrawer = ({ navigation }) => {
  const { fetchPosts } = useContext(DataContext);
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
        <DrawerButton
          route={undefined}
          navigation={navigation}
          active={true}
          title={"ቁጥሮን ይፈትሹ"}
          LeftIcon={() => (
            <Icon2 name="ticket" size={25} color={colors.white} />
          )}
        />
        <DrawerButton
          route={undefined}
          navigation={navigation}
          title={"ቁጥሮን ይፈትሹ"}
          LeftIcon={() => (
            <Icon2 name="ticket" size={25} color={colors.white} />
          )}
        />
        <DrawerButton
          route={undefined}
          navigation={navigation}
          title={"ቁጥሮን ይፈትሹ"}
          LeftIcon={() => (
            <Icon2 name="ticket" size={25} color={colors.white} />
          )}
        />
        <DrawerButton
          route={undefined}
          navigation={navigation}
          title={"ቁጥሮን ይፈትሹ"}
          LeftIcon={() => (
            <Icon2 name="ticket" size={25} color={colors.white} />
          )}
        />
        <DrawerButton
          route={undefined}
          navigation={navigation}
          title={"ቁጥሮን ይፈትሹ"}
          LeftIcon={() => (
            <Icon2 name="ticket" size={25} color={colors.white} />
          )}
        />
        <DrawerButton
          route={undefined}
          navigation={navigation}
          title={"ቁጥሮን ይፈትሹ"}
          LeftIcon={() => (
            <Icon2 name="ticket" size={25} color={colors.white} />
          )}
        />
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
        // navigation.navigate(route);
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
