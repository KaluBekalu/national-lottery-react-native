import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../constants/colors";
import { StyleProp, ViewStyle } from "react-native";

interface IGradientTypes {
  children: any;
  style?: StyleProp<ViewStyle>;
  gradColors?: any;
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

export default function Gradient({
  children,
  style,
  gradColors = [colors.lightBlue, colors.primary],
  start = { x: 0, y: 0 },
  end = { x: 0.4, y: 0 },
}: IGradientTypes) {
  return (
    <LinearGradient
      colors={[...gradColors]}
      start={{ ...start }}
      end={{ ...end }}
      style={style}
    >
      {children}
    </LinearGradient>
  );
}
