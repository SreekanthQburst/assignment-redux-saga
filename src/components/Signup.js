import React, { useState } from "react";
import "../css/Login.css";
import { useDispatch } from "react-redux";

import { requestSignup } from "../redux/actions/UserActions";

export default function Signup() {
  const dispatch = useDispatch();
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
    // name: "",
  });

  const signup = () => {
    dispatch(requestSignup(credentials));
  };
  return (
    <div className="login">
      {/* <div>
        <input
          placeholder="Name"
          onChange={(e) =>
            setcredentials({ ...credentials, name: e.target.value })
          }
        />
      </div> */}
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
      <div className="button" onClick={() => signup()}>
        Signup
      </div>
    </div>
  );
}
