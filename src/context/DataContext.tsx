import { View, Text } from "react-native";
import React, { createContext, useContext, useEffect, useState } from "react";
import { getLotteries, getWinnigNumbers } from "../utils/lotteries";
import {
  DataContextTypes,
  ILotteries,
  ILottery,
  IWinningNumbers,
  IWinningNumbersList,
} from "../utils/types";

export const DataContext = createContext<any>([]);

const DataContextProvider = ({ children }) => {
  const [loadingLotteries, setLoadingLotteries] = useState(false);
  const [loadingNumbers, setLoadingNumbers] = useState(false);
  const [lotteries, setLotteries] = useState<ILotteries | []>([]);
  const [winningNumbersList, setWinningNumbersList] =
    useState<IWinningNumbersList>([]);

  const fetchLotteries = async () => {
    setLoadingLotteries(true);
    let res = await getLotteries(() => setLoadingLotteries(false));
    if (res) {
      let l: ILotteries = [];
      res.forEach((i) => {
        l.push({ id: i.id, ...i.data() } as ILottery);
      });
      setLotteries(l);
    }
  };

  const fetchWinningNumbersList = async () => {
    setLoadingNumbers(true);
    let res = await getWinnigNumbers(() => setLoadingNumbers(false));
    if (res) {
      let l: IWinningNumbersList = [];
      res.forEach((i) => {
        l.push({ id: i.id, ...i.data() } as IWinningNumbers);
      });
      setWinningNumbersList(l);
    }
  };

  const reload = () => {
    fetchLotteries();
    fetchWinningNumbersList();
  };

  useEffect(() => {
    fetchLotteries();
    fetchWinningNumbersList();
    return () => {};
  }, []);
  return (
    <DataContext.Provider
      value={
        {
          lotteries,
          loadingLotteries,
          loadingNumbers,
          winningNumbersList,
          refreshing: loadingLotteries || loadingNumbers,
          reload,
          setWinningNumbersList,
          setLoadingNumbers,
          setLotteries,
          setLoadingLotteries,
          fetchLotteries,
        } as DataContextTypes
      }
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
