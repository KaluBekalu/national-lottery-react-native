export type IAdmin = {
  id: string;
  key: string;
  role: string;
  uid: string;
  name: string;
  email: string;
};
export type IUser = {
  id: string;
  uid: string;
  key: string;
  email: string;
  name: string;
  role: string;
};

export type DataContextTypes = {
  lotteries: ILotteries;
  winningNumbersList: IWinningNumbersList;
  loadingLotteries: boolean;
  setLotteries: React.Dispatch<any>;
  setWinningNumbersList: React.Dispatch<any>;
  setLoadingLotteries: React.Dispatch<React.SetStateAction<boolean>>;
  fetchLotteries: Function;
};

export type ILotteries = [ILottery] | any;
export type IWinningNumbersList = [IWinningNumbers] | any;

export type ILottery = {
  id?: string;
  name: string;
  image: string;
  description: string;
  startDate: string;
  drawDate: string;
  endDate: string;
  lotteryEntries: ILotteryEntries;
};

export type ILotteryEntries = {
  id: string;
  winningNumbers: [IWinningNumbers];
  name: string;
  startDate: string;
  status: string;
  drawDate: string;
  lotteryId: string;
  expiryDate: string;
  endDate: string;
  fileUrl?: string;
};

export type LotteryFormProps = {
  editData?: ILottery;
  fetchLotteries: any;
  setModalShown: any;
};

export type IWinningNumbers = {
  id?: string;
  endNumber: string;
  lotteryId: string;
  numbers: [INumber];
};

export type INumber = {
  number: string;
  prize: string;
};

// NEWS
export type INews = {
  id?: string;
  title: string;
  image: string;
  description: string;
  status: "Published" | "Draft";
};

export type INewsList = [INews] | any;

// STORIES
export type IStory = {
  id?: string;
  title: string;
  image: string;
  description: string;
  status: "Published" | "Draft";
};

export type IStoryList = [IStory] | any;

// Regulationss
export type IRegulation = {
  id?: string;
  title: string;
  description: string;
  status: "Published" | "Draft";
};

export type IRegulations = [IRegulations] | any;
