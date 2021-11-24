import React from "react";
import { useParams } from "react-router";
import { useLazyQuery, useQuery, NetworkStatus } from "@apollo/react-hooks";

// query
import { GET_TODO } from "../graphql/query.js";
// css
import "../css/TodoItem.css";

export default function TodoItem() {
  const { id } = useParams();

  const { loading, data, error, networkStatus } = useQuery(GET_TODO, {
    variables: { id },
  });

  return (
    <div className="todo-item">
      {loading && <span className="loading">Loading</span>}
      {data && (
        <>
          <span className="id">ID: {data?.todo.id}</span>
          <span className="content">{data?.todo.type}</span>
        </>
      )}
      {error && <div className="loading">{error}</div>}
    </div>
  );
}
