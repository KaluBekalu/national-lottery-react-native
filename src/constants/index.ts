import { Platform } from "react-native";

export var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const contacts = [
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
