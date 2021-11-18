import { all } from "redux-saga/effects";
import { watchSignin, watchSignout, watchSignup } from "./authSaga";
import { watchUserSaga } from "./userSaga";

export default function* Saga() {
  yield all([watchUserSaga(), watchSignup(), watchSignin(), watchSignout()]);
}
