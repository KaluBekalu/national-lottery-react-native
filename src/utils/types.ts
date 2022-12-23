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

export type ILotteries = [ILottery] | any;

export type ILottery = {
  id?: string;
  name: string;
  image: string;
  description: string;
  startDate: string;
  drawDate: string;
  endDate: string;
};

export type LotteryFormProps = {
  editData?: ILottery;
  fetchLotteries: any;
  setModalShown: any;
};

export type IWinningNumbers = {
  id?: string;
  lotteryId: string;
  numbers: string;
  prize: string;
  endNumber: string;
};
export type WinningNumberFormProps = {
  lotteryId: string;
  winningNumbers?: IWinningNumbers;
  fetchWinningNumbers: any;
  setModalShown: any;
};
