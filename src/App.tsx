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
    <div className="container max-w-4xl flex flex-col mx-auto my-10 rounded-xl py-10 px-5 bg-zinc-400">
      <h1 className="text-3xl font-bold text-center my-5">Todo List</h1>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
