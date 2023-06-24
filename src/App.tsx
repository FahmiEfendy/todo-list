import { useState } from "react";

import "./App.css";
import TodoList from "./components/TodoList";

const todosArray = [
  {
    id: "1",
    title: "Mopping",
    completed: false,
  },
  {
    id: "2",
    title: "Study for final exam",
    completed: false,
  },
  {
    id: "3",
    title: "Read self development book",
    completed: false,
  },
  {
    id: "4",
    title: "Go to grocery shop",
    completed: true,
  },
  {
    id: "5",
    title: "Take Molly to park",
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = useState(todosArray);

  return (
    <div className="container max-w-4xl flex flex-col mx-auto my-10 rounded-xl py-10 px-5 bg-black backdrop-filter backdrop-blur-lg bg-opacity-20 drop-shadow-2xl">
      <h1 className="text-3xl font-bold text-center my-5 text-white">
        Todo List
      </h1>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
