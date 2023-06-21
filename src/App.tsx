import { useState } from "react";

import "./App.css";
import TodoList from "./components/TodoList";

const todosArray = [
  {
    id: "1",
    title: "Title 1",
    completed: false,
  },
  {
    id: "2",
    title: "Title 2",
    completed: true,
  },
  {
    id: "3",
    title: "Title 3",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(todosArray);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Todo List App</h1>
      <h3>What's your plan for today?</h3>
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
