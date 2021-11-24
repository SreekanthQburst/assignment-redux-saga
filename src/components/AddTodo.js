import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useMutation } from "@apollo/react-hooks";

// query
import { NEW_TODO } from "../graphql/mutation";
// css
import "../css/AddTodo.css";

export default function AddTodo() {
  const navigate = useNavigate();
  const [newTodo, setnewTodo] = useState("");

  const [addTodo, { data, loading, error }] = useMutation(NEW_TODO);

  const save = async () => {
    const response = await addTodo({ variables: { text: newTodo } });
    if (response) navigate("/graphql");
  };
  return (
    <div>
      {loading ? (
        <span className="loading">Loading</span>
      ) : (
        <div className="add-todo">
          {/* <input
        placeholder="id"
        onChange={(e) => {
          setnewTodo({ ...newTodo, id: e.target.value });
        }}
      /> */}
          <textarea
            placeholder="content"
            onChange={(e) => {
              setnewTodo(e.target.value);
            }}
          />
          <button className="save" onClick={save}>
            Save
          </button>
        </div>
      )}
    </div>
  );
}
