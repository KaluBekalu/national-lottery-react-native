import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { DataContext } from "../context/DataContext";
import { getLotteries } from "../utils/lotteries";
import { ILotteries, ILottery } from "../utils/types";
import { Loading } from "./Loading";
import { LotteryCard } from "./LotteryCard";
import { NoData } from "./NoData";

export const Lotteries = ({ navigation }) => {
  const { lotteries, loadingLotteries } = useContext(DataContext);
  const { t } = useTranslation();

  if (loadingLotteries) return <Loading />;
  return (
    <View>
      {lotteries.length ? (
        <>
          {lotteries.map((i: ILottery) => {
            return <LotteryCard navigation={navigation} key={i.id} item={i} />;
          })}
        </>
      ) : (
        <NoData message={t("no_lottery_to_view")} />
      )}
    </View>
  );
};
