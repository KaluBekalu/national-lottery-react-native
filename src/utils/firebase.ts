import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAc5rtMSsXkP6nZwHpOandKqlIBxVqHJZk",
  authDomain: "amref-b37c7.firebaseapp.com",
  projectId: "amref-b37c7",
  storageBucket: "amref-b37c7.appspot.com",
  messagingSenderId: "692949853158",
  appId: "1:692949853158:web:f33470f958adcefb04ac27",
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
