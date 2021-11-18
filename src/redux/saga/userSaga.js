import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "../contants/actionTypes";
import { getUserList } from "../../api";

function* setUsers() {
  try {
    yield put({ type: ActionTypes.REQUEST_API_ASYNC });
    const response = yield call(getUserList, 100);
    yield put({
      type: ActionTypes.SET_USERS,
      payload: response.data.results,
    });
  } catch (e) {
    yield put({
      type: ActionTypes.ERROR,
      payload: e?.message ?? "Something went wrong",
    });
  }
}

export function* watchUserSaga() {
  yield takeEvery(ActionTypes.REQUEST_API, setUsers);
}
