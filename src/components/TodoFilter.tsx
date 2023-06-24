import { useEffect, useState } from "react";

import { todosArray } from "../data/todosArray";
import { ITodos } from "../interfaces/todo-interfaces";

interface TodoFilterProps {
  setTodos: (todos: Array<ITodos>) => void;
}

const TodoFilter = (props: TodoFilterProps) => {
  const { setTodos } = props;

  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    if (activeFilter === "To Be Done") {
      setTodos(todosArray.filter((todo: ITodos) => !todo.completed));
    } else if (activeFilter === "Completed") {
      setTodos(todosArray.filter((todo: ITodos) => todo.completed));
    } else {
      setActiveFilter("All");
      setTodos(todosArray);
    }
  }, [activeFilter, setTodos]);

  return (
    <div className="flex ms-auto mt-3 mb-1 text-white">
      <button
        className={`rounded-l-lg sm:px-6 px-4 pb-2 pt-2.5 text-xs uppercase hover:bg-purple-900 ${
          activeFilter === "All" ? "bg-purple-900" : "bg-purple-400"
        }`}
        onClick={() => {
          setActiveFilter("All");
        }}
      >
        All
      </button>
      <button
        className={`sm:px-6 px-4 pb-2 pt-2.5 text-xs uppercase hover:bg-purple-900 ${
          activeFilter === "To Be Done" ? "bg-purple-900" : "bg-purple-400"
        }`}
        onClick={() => {
          setActiveFilter("To Be Done");
        }}
      >
        To Be Done
      </button>
      <button
        className={`rounded-r-lg sm:px-6 px-4 pb-2 pt-2.5 text-xs uppercase hover:bg-purple-900 ${
          activeFilter === "Completed" ? "bg-purple-900" : "bg-purple-400"
        }`}
        onClick={() => {
          setActiveFilter("Completed");
        }}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;
