import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// css
import "../css/List.css";

// actions
import {
  cleanData,
  requestApiData,
  updatePage,
  selectedUser,
} from "../redux/actions/UserActions";

export default function List() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(requestApiData());
    return () => dispatch(cleanData());
  }, []);

  // get list of users in a page
  const getList = (page) => {
    dispatch(updatePage(page));
  };

  // navigate to userdetails page
  const UserDetails = (user) => {
    dispatch(selectedUser(user));
    navigate(`/user/${user.login.username}`);
  };
  return (
    <div className="users">
      {users.loading && <span className="loading">Loading</span>}
      {!users.loading && !users?.error && (
        <div>
          <div className="container">
            {users.subList?.map((user, index) => (
              <div
                key={index}
                className="card"
                onClick={() => UserDetails(user)}
              >
                <img src={user.picture.large} alt="Loading" />
                <span className="name">{`Name: ${user.name.title} ${user.name.first} ${user.name.last}`}</span>
                <span className="email">{`Email: ${user.email}`}</span>
              </div>
            ))}
          </div>
          <div className="buttons">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => (
              <span
                key={key}
                className={`${key === users.page ? "selected" : ""}`}
                onClick={() => getList(key)}
              >
                {key}
              </span>
            ))}
          </div>
        </div>
      )}
      {!users.loading && users.error !== "" && (
        <div className="loading">{users.error}</div>
      )}
    </div>
  );
}
