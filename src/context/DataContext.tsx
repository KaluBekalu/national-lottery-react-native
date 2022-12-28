import { View, Text } from "react-native";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getLotteries,
  getNews,
  getRegulations,
  getWinnigNumbers,
} from "../utils/lotteries";
import {
  DataContextTypes,
  ILotteries,
  ILottery,
  INews,
  INewsList,
  IRegulations,
  IWinningNumbers,
  IWinningNumbersList,
} from "../utils/types";

export const DataContext = createContext<any>([]);

const DataContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [loadingLotteries, setLoadingLotteries] = useState(false);
  const [loadingNumbers, setLoadingNumbers] = useState(false);
  const [lotteries, setLotteries] = useState<ILotteries | []>([]);
  const [news, setNews] = useState<INewsList>([]);
  const [regulations, setRegulations] = useState<INewsList>([]);
  const [winningNumbersList, setWinningNumbersList] =
    useState<IWinningNumbersList>([]);

  const fetchRegulations = async () => {
    setLoadingLotteries(true);
    let res = await getRegulations(() => setLoadingLotteries(false));
    if (res) {
      let l: IRegulations = [];
      res.forEach((i) => {
        l.push({ id: i.id, ...i.data() } as IRegulations);
      });
      setRegulations(l);
    }
  };
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

  const fetchNews = async () => {
    setLoadingLotteries(true);
    let res = await getNews(() => setLoadingLotteries(false));
    if (res) {
      let l: INewsList = [];
      res.forEach((i) => {
        l.push({ id: i.id, ...i.data() } as INews);
      });
      setNews(l);
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
    fetchNews();
    fetchRegulations();
    fetchWinningNumbersList();
  };

  useEffect(() => {
    fetchLotteries();
    fetchNews();
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
          language,
          news,
          regulations,
          setRegulations,
          setLanguage,
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
