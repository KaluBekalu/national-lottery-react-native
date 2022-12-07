import { View, Text } from "react-native";
import React, { createContext, useContext, useEffect, useState } from "react";

import { getPosts } from "../utils/firebase";

export const DataContext = createContext<any>([]);

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState<any | []>([]);

  const fetchData = async () => {};

  const initialize = async () => {};

  useEffect(() => {}, []);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
