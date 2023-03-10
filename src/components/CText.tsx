import { StyleProp, TextStyle, StyleSheet, Text, View } from "react-native";
import React from "react";

type TextTypes = {
  content: string;
  style?: StyleProp<TextStyle>;
};

const CText = ({ content, style = {} }: TextTypes) => {
  return (
    <Text style={[{ fontFamily: "lexend", fontSize: 18 }, style]}>
      {content}
    </Text>
  );
};

export default CText;

const styles = StyleSheet.create({});
