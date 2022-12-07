type LoginInputs = {
  email: string;
  password: string;
};
type RegisterInputs = {
  email: string;
  name: string;
  gender: string;
  password: string;
  role: string;
  profession: string;
  region: string;
  organization: string;
};

import { FirebaseError, initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  deleteUser,
  sendPasswordResetEmail,
  signOut,
  User,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAc5rtMSsXkP6nZwHpOandKqlIBxVqHJZk",
  authDomain: "amref-b37c7.firebaseapp.com",
  projectId: "amref-b37c7",
  storageBucket: "amref-b37c7.appspot.com",
  messagingSenderId: "692949853158",
  appId: "1:692949853158:web:f33470f958adcefb04ac27",
};

const errorSplitter = (err: any) => {
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
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async (cb: Function) => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err: any) {
    cb(
      {
        title: "Error",
        description: errorSplitter(err.message),
        type: "Error",
      },
      false
    );
    console.error(err);
  }
};

const logInWithEmailAndPassword = async (
  { email, password }: LoginInputs,
  cb: any
) => {
  try {
    let res = await signInWithEmailAndPassword(auth, email, password);
    cb(
      {
        title: "Success",
        description: "Logged in successfully",
        type: "Success",
      },
      false
    );
  } catch (err: any) {
    console.error(err);
    cb(
      { title: "Error", description: "Invalid credentials", type: "Error" },
      false
    );
  }
};

const registerWithEmailAndPassword = async (
  {
    name,
    email,
    role = "user",
    gender,
    password,
    profession,
    region,
    organization,
  }: RegisterInputs,
  cb: any
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      role,
      gender,
      email,
      profession,
      region,
      organization,
    });
    console.log("", "User added successfully!", "success");
    cb(
      {
        title: "Success",
        description: "Registered successfully",
        type: "Success",
      },
      false
    );
  } catch (err: any) {
    console.log(errorSplitter(err));
    cb(
      {
        title: "Error",
        description: errorSplitter(err.message),
        type: "Error",
      },
      false
    );
  }
};

const sendPasswordReset = async (email: string, cb: Function) => {
  try {
    await sendPasswordResetEmail(auth, email);
    cb(
      {
        title: "Success",
        description:
          "Email sent, please check your email inbox or spam folder and follow the instruction.",
        type: "Success",
      },
      false
    );
  } catch (err: any) {
    cb(
      {
        title: "Error",
        description: errorSplitter(err.message),
        type: "Error",
      },
      false
    );
    console.log("Failure", errorSplitter(err.message), "error");
  }
};

const getUserInfo = async (id: string) => {
  try {
    const q = query(collection(db, "users"), where("uid", "==", id));

    return (await getDocs(q)).docs[0].data();
  } catch (err: any) {
    console.log("Failure", errorSplitter(err.message), "error");
    return false;
  }
};
const getPosts = async (cb: Function) => {
  try {
    const res = await getDocs(collection(db, "posts"));
    cb();
    return res;
  } catch (err: any) {
    console.log("Failure", errorSplitter(err.message), "error");
    return false;
  }
};

const getUsers = async () => {
  try {
    const q = query(collection(db, "users"));
    return await (
      await getDocs(q)
    ).docs;
  } catch (err: any) {
    console.log("Failure", errorSplitter(err.message), "error");
  }
};

const updateUser = async (data: any, id: string, cb: any) => {
  try {
    const ref = doc(db, "users", id);
    await updateDoc(ref, {
      name: data.name,
      role: data.role,
      // email: data.email,
    }).then((res) => {
      cb();
    });
  } catch (err: any) {
    console.log("Failure", errorSplitter(err.message), "error");
  }
};

const deleteUserFunc = async (user: User, cb: any) => {
  try {
    // await deleteUser(user);
    const ref = doc(db, "users", user.uid);
    await deleteDoc(ref).then((res) => {
      cb();
    });
  } catch (err: any) {
    console.log(err);
    console.log("Failure", err.message, "error");
  }
};

const imageUpload = (formData: any) => {
  console.log(formData);
  const res = { data: { url: "https://picsum.photos/200" } };
  return res;
};

const createPost = async (data: any, cb: any) => {
  try {
    return await addDoc(collection(db, "posts"), data).then((res) => {
      cb();
      console.log("Success", "Added post Successfully", "success");
    });
  } catch (err: any) {
    cb();
    console.log("Failure", errorSplitter(err.message), "error");
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,

  // New
  getPosts,
  // From Admin
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  getUserInfo,
  getUsers,
  updateUser,
  deleteUserFunc,
  imageUpload,
  createPost,
};
