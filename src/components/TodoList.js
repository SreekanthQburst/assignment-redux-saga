import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyQuery, useQuery, NetworkStatus } from "@apollo/react-hooks";

// query
import { GET_TODO_LIST } from "../graphql/query.js";
// css
import "../css/Todo.css";

export default function List() {
  const navigate = useNavigate();
  const [searchTerm, setsearchTerm] = useState("");

  const { loading, data, error, refetch, networkStatus } = useQuery(
    GET_TODO_LIST,
    {
      notifyOnNetworkStatusChange: true,
    }
  );
  // if (networkStatus === NetworkStatus.refetch) console.log("Refetching!");
  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="todo">
      <div className="add-btn" onClick={() => navigate("/add")}>
        Add
      </div>
      {loading && <span className="loading">Loading</span>}
      {data && (
        <div>
          <div className="container">
            {data.todos.length === 0 ? (
              <span className="loading">No data found</span>
            ) : (
              data.todos.map((item, index) => (
                <div
                  key={index}
                  className="card"
                  onClick={() => navigate(`/todo/${item.id}`)}
                >
                  <span>ID: {item.id}</span>
                  <span>{item.type}</span>
                </div>
              ))
            )}
          </div>
          <div className="buttons">
            {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => (
                <span
                  key={key}
                  className={`${key === users.page ? "selected" : ""}`}
                  onClick={() => getList(key)}
                >
                  {key}
                </span>
              ))} */}
          </div>
        </div>
      )}
      {error && <div className="loading">{error}</div>}
    </div>
  );
}
