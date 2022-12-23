import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { DataContext } from "../context/DataContext";
import { getLotteries } from "../utils/lotteries";
import { ILotteries, ILottery } from "../utils/types";
import { Loading } from "./Loading";
import { LotteryCard } from "./LotteryCard";

export const Lotteries = ({ navigation }) => {
  const { lotteries, loadingLotteries } = useContext(DataContext);

  if (loadingLotteries) return <Loading />;

  return (
    <View>
      {lotteries.map((i: ILottery) => {
        return <LotteryCard navigation={navigation} key={i.id} item={i} />;
      })}
    </View>
  );
};
