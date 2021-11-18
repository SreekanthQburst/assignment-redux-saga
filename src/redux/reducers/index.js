import { combineReducers } from "redux";
import { authReducer, listReducer, SelectedUserReducer } from "./reducer";

const reducers = combineReducers({
  auth: authReducer,
  users: listReducer,
  selectedUser: SelectedUserReducer,
});
export default reducers;
