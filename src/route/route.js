import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import UserList from "../components/UserList";
import UserDetails from "../components/UserDetails";
import NoResult from "../components/NoResult";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";
import TodoItem from "../components/TodoItem";
export default function AppRoutes() {
  const auth = useSelector((state) => state.auth);
  return (
    <Router>
      {auth.isAuthenticated ? (
        <>
          <Header />
          <Routes>
            <Route exact path="/todo/:id" element={<TodoItem />} />
            <Route exact path="/add" element={<AddTodo />} />
            <Route exact path="/graphql" element={<TodoList />} />
            <Route exact path="/user/:userid" element={<UserDetails />} />
            <Route exact path="/" element={<UserList />} />
            <Route path="*" element={<NoResult />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      )}
    </Router>
  );
}
