import { View, Text } from "react-native";
import React, { createContext, useContext, useEffect, useState } from "react";
import { getLotteries } from "../utils/lotteries";
import { ILotteries, ILottery } from "../utils/types";

export const DataContext = createContext<any>([]);

const DataContextProvider = ({ children }) => {
  const [loadingLotteries, setLoadingLotteries] = useState(false);
  const [lotteries, setLotteries] = useState<any>([]);

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

  useEffect(() => {
    fetchLotteries();
    return () => {};
  }, []);
  return (
    <DataContext.Provider
      value={{
        lotteries,
        setLotteries,
        loadingLotteries,
        setLoadingLotteries,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
