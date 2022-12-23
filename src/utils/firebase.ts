import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdWipOJO9IdyQwPsEOKA-CdbeOSu80MsY",
  authDomain: "ethiopian-national-lottery.firebaseapp.com",
  projectId: "ethiopian-national-lottery",
  storageBucket: "ethiopian-national-lottery.appspot.com",
  messagingSenderId: "564788194860",
  appId: "1:564788194860:web:3538a6f376bdf4ef502b89",
};
export const errorSplitter = (err: any) => {
  if (typeof err == "object") err = JSON.stringify(err.code);

  switch (true) {
    case err.includes("(auth/weak-password)."):
      return "Password should be at least 6 characters.";

    case err.includes("auth/email-already-in-use"):
      return "Email already taken.";

    case err.includes("auth/internal-error"):
      return "Something went wrong.";

    case err.includes("auth/invalid-email"):
      return "Invalid email. Enter a valid email.";

    case err.includes("auth/invalid-phone-number"):
      return "Invalid phone number.";

    case err.includes("auth/phone-number-already-exists"):
      return "Phone number already taken.";

    case err.includes("auth/user-not-found"):
      return "User couldn't be found.";

    default:
      return err;
  }
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
