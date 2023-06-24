import { useState } from "react";

import TodoList from "./components/TodoList";
import { todosArray } from "./data/todosArray";

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
