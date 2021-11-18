import instance from "./instance";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// auth apis
export const Signup = async (email, password) => {
  return await createUserWithEmailAndPassword(getAuth(), email, password);
};

export const Signin = async (email, password) => {
  return await signInWithEmailAndPassword(getAuth(), email, password);
};

export const Signout = async () => {
  return await signOut(getAuth());
};

// user apis
export const getUserList = async (number) => {
  return await instance.get(`/?results=${number}`);
};
