import AnimatedLottieView from "lottie-react-native";
import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { DataContext } from "../context/DataContext";
import { getLotteries } from "../utils/lotteries";
import { ILotteries, ILottery } from "../utils/types";
import { LotteryCard } from "./LotteryCard";

export const Lotteries = () => {
  const [loading, setLoading] = useState(false);
  const { lotteries, loadingLotteries } = useContext(DataContext);

  if (loadingLotteries) return <Loading />;

  return (
    <View>
      {lotteries.map((i) => {
        return <LotteryCard key={i.id} item={i} />;
      })}
    </View>
  );
};

const Loading = ({ size = 60 }: { size?: number }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <AnimatedLottieView
        style={{ width: size }}
        autoPlay
        source={require("../../assets/spin.json")}
        loop
      />
    </View>
  );
};
