import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "../contants/actionTypes";
import { Signin, Signout, Signup } from "../../api";

function* SigninUser(params) {
  try {
    const response = yield call(
      Signin,
      params.payload.email,
      params.payload.password
    );
    yield put({
      type: ActionTypes.LOGIN,
      payload: { token: response.user.accessToken, email: response.user.email },
    });
  } catch (e) {
    yield put({
      type: ActionTypes.AUTHERROR,
      payload: e?.message ?? "Something went wrong",
    });
  }
}

function* SignupUser(params) {
  try {
    const response = yield call(
      Signup,
      params.payload.email,
      params.payload.password
    );
    yield put({
      type: ActionTypes.LOGIN,
      payload: { token: response.user.accessToken, email: response.user.email },
    });
  } catch (e) {
    yield put({
      type: ActionTypes.AUTHERROR,
      payload: e?.message ?? "Something went wrong",
    });
  }
}
function* SignoutUser() {
  try {
    yield call(Signout);
    yield put({
      type: ActionTypes.LOGOUT,
    });
  } catch (e) {
    console.log(e);
  }
}
// watch actions
export function* watchSignin() {
  yield takeEvery(ActionTypes.REQUESTLOGIN, SigninUser);
}
export function* watchSignup() {
  yield takeEvery(ActionTypes.REQUESTSIGNUP, SignupUser);
}
export function* watchSignout() {
  yield takeEvery(ActionTypes.REQUESTLOGOUT, SignoutUser);
}
