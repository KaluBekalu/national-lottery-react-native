import { View } from "react-native";
import { LotteryCard } from "./LotteryCard";

export const Lotteries = () => {
  return (
    <View>
      {[
        {
          key: 0,
          title: "መደበኛ / Medebgna",
          status: "በሽያጭ ላይ",
        },
        {
          key: 1,
          title: "መደበኛ / Medebgna",
          status: "በሽያጭ ላይ",
        },
        {
          key: 2,
          title: "መደበኛ / Medebgna",
          status: "በሽያጭ ላይ",
        },
        {
          key: 3,
          title: "መደበኛ / Medebgna",
          status: "በሽያጭ ላይ",
        },
        {
          key: 4,
          title: "መደበኛ / Medebgna",
          status: "በሽያጭ ላይ",
        },
        {
          key: 5,
          title: "መደበኛ / Medebgna",
          status: "በሽያጭ ላይ",
        },
      ].map((i) => {
        return <LotteryCard key={i.key} item={i} />;
      })}
    </View>
  );
};
