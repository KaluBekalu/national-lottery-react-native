import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db, errorSplitter } from "./firebase";

export const getLotteries = async (cb?: Function) => {
  try {
    const res = await getDocs(collection(db, "lotteries"));
    cb && cb();
    return res.docs;
  } catch (err: any) {
    console.log("Failure", err, "error");
    return false;
  }
};
export const getWinnigNumbers = async (cb?: Function) => {
  try {
    const q = query(
      collection(db, "winningNumbers"),
      orderBy("endNumber", "asc")
    );
    let res = await getDocs(q);
    return res.docs;
  } catch (err: any) {
    console.log("Failure", err, "error");
    return false;
  }
};

export const getLotteryById = async (id: string, cb?: Function) => {
  try {
    const res = await getDoc(doc(db, "lotteries", id));
    cb && cb();
    return res.data();
  } catch (err: any) {
    console.log("Failure", errorSplitter(err.message), "error");
    return false;
  }
};