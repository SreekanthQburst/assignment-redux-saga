import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLazyQuery, useQuery, NetworkStatus } from "@apollo/react-hooks";

// query
import { GET_TODO_LIST } from "../graphql/query";
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

  const [getUserList, { loading, data, error, networkStatus }] = useLazyQuery(
    GET_TODO_LIST,
    {
      notifyOnNetworkStatusChange: true,
    }
  );
  // const { loading, error, data } = useQuery(GET_TODO_LIST);
  if (networkStatus === NetworkStatus.refetch) console.log("Refetching!");
  if (loading) console.log(loading);
  if (error) console.log(error);
  if (data) console.log(data);

  useEffect(() => {
    getUserList();
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
