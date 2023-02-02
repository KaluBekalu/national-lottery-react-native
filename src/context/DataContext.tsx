import { View, Text } from "react-native";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getLotteries,
  getLotteryEntries,
  getNews,
  getRegulations,
  getStories,
  getWinnigNumbers,
} from "../utils/lotteries";
import {
  DataContextTypes,
  ILotteries,
  ILottery,
  INews,
  INewsList,
  IRegulations,
  IStory,
  IStoryList,
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
  const [stories, setStories] = useState<IStoryList>([]);
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
      Promise.all(
        res.map(async (i) => {
          let lotteryEntries = await getLotteryEntries(i.id);
          return { ...i, lotteryEntries };
        })
      ).then((result) => {
        setLotteries(result as ILotteries);
      });
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
  const fetchStories = async () => {
    setLoadingLotteries(true);
    let res = await getStories(() => setLoadingLotteries(false));
    if (res) {
      let l: IStoryList = [];
      res.forEach((i) => {
        l.push({ id: i.id, ...i.data() } as IStory);
      });
      setStories(l);
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
    fetchStories();
    fetchRegulations();
    fetchWinningNumbersList();
  };

  useEffect(() => {
    fetchLotteries();
    fetchNews();
    fetchStories();
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
          stories,
          regulations,
          setStories,
          fetchStories,
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
