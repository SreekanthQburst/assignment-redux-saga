import React, { useState } from "react";
import "../css/Login.css";

import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { requestLogin } from "../redux/actions/UserActions";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [credentials, setcredentials] = useState({ email: "", password: "" });

  const signin = () => {
    dispatch(requestLogin(credentials));
  };

  //   const signin = async (email, password) => {
  //     try {
  //       const response = await signInWithEmailAndPassword(
  //         getAuth(),
  //         email,
  //         password
  //       );
  //       dispatch(
  //         login(
  //           response.user.accessToken,
  //           response.user.email,
  //           response.user.displayName
  //         )
  //       );
  //     } catch (error) {
  //       dispatch(authError(error.message));
  //     }
  //   };

  return (
    <div className="login">
      <div>
        <input
          placeholder="Email"
          onChange={(e) =>
            setcredentials({ ...credentials, email: e.target.value })
          }
        />
      </div>
      <div>
        <input
          placeholder="Password"
          onChange={(e) =>
            setcredentials({ ...credentials, password: e.target.value })
          }
        />
      </div>
      <span className="error">{auth.error}</span>
      <div className="create-account" onClick={() => navigate("/signup")}>
        Create an account?
      </div>
      <div className="button" onClick={() => signin()}>
        Signin
      </div>
    </div>
  );
}
