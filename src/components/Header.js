import React from "react";
import "../css/Header.css";

import { useSelector, useDispatch } from "react-redux";
import { requestLogout } from "../redux/actions/UserActions";

export default function Header() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const logoutuser = () => {
    dispatch(requestLogout());
  };
  return (
    <div className="header">
      <span className="user">{auth.email}</span>
      <span className="logout" onClick={() => logoutuser()}>
        Logout
      </span>
    </div>
  );
}
