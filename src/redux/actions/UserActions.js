import { ActionTypes } from "../contants/actionTypes";

// auth
export const requestLogin = (payload) => {
  return {
    type: ActionTypes.REQUESTLOGIN,
    payload: payload,
  };
};
export const requestSignup = (payload) => {
  console.log(payload);
  return {
    type: ActionTypes.REQUESTSIGNUP,
    payload: payload,
  };
};
export const requestLogout = () => {
  return { type: ActionTypes.REQUESTLOGOUT };
};
export const authError = (error) => {
  return { type: ActionTypes.AUTHERROR, payload: error };
};

// list of users
export const requestApiData = () => {
  return { type: ActionTypes.REQUEST_API };
};
export const updatePage = (page) => {
  return { type: ActionTypes.UPDATE_PAGE, payload: page };
};
export const cleanData = () => {
  return { type: ActionTypes.CLEAN_DATA };
};

// selected user
export const selectedUser = (user) => {
  return {
    type: ActionTypes.SELECTED_USER,
    payload: user,
  };
};
