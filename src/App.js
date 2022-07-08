import React, { useState } from "react";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const initialTodoList = [
    {
      no: 1,
      title: "Task 1",
      description: "Task 1 Description",
      category: "Task",
      scope: "Personal",
      deadline: new Date(2022, 5, 7),
      status: "To-Do",
    },
    {
      no: 2,
      title: "Reminder 2",
      description: "Reminder 2 Description",
      category: "Reminder",
      scope: "Work",
      deadline: new Date(2022, 4, 28),
      status: "In-Progress",
    },
    {
      no: 3,
      title: "Task 2",
      description: "Task 2 Description",
      category: "Task",
      scope: "College",
      deadline: new Date(2022, 3, 12),
      status: "Done",
    },
  ];

  const [todoList, setTodoList] = useState(initialTodoList);

  const addTodoListHandler = (todo) => {
    setTodoList((prevTodoList) => {
      return [todo, ...prevTodoList];
    });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/todoform"
          element={
            <TodoForm todoList={todoList} onGetTodo={addTodoListHandler} />
          }
        />
        <Route
          path="/"
          element={<TodoList todoList={todoList} setTodoList={setTodoList} />}
        />
      </Routes>
    </Router>
  );
}
