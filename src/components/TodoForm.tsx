import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

import { ITodos } from "../interfaces/todo-interfaces";

interface TodoFormProps {
  editId: string;
  setEditId: (id: string) => void;
  enteredTitle: string;
  setEnteredTitle: (e: string) => void;
  todos: Array<ITodos>;
  setTodos: (todos: Array<ITodos>) => void;
}

const TodoForm = (props: TodoFormProps) => {
  const { editId, setEditId, enteredTitle, setEnteredTitle, todos, setTodos } =
    props;

  const [isError, setIsError] = useState(false);

  const titleChangeHandler = (e: string) => {
    setEnteredTitle(e);
  };

  const cancelEditHandler = () => {
    setEditId("");
    setEnteredTitle("");
  };

  const submitTodoHandler = () => {
    const newTodo = {
      id: uuidv4(),
      title: enteredTitle,
      completed: false,
    };

    if (enteredTitle === "") return setIsError(true);

    if (editId === "") {
      setTodos([...todos, newTodo]);
    } else {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === editId) {
          return {
            ...todo,
            title: enteredTitle,
          };
        } else {
          return todo;
        }
      });
      setTodos(updatedTodos);
    }

    setEditId("");
    setEnteredTitle("");
  };

  useEffect(() => {
    if (enteredTitle.length > 0) setIsError(false);
  }, [enteredTitle.length]);

  return (
    <div className="mb-5 grid grid-flow-row-dense grid-cols-12 grid-rows-2 sm:grid-rows-1">
      <input
        type="text"
        name="title"
        id="title"
        placeholder="What's your plan today?"
        value={enteredTitle}
        onChange={(e) => titleChangeHandler(e.target.value)}
        className={`${
          editId !== "" ? "sm:col-span-8" : "sm:col-span-10"
        } col-span-12 rounded-md p-3 mb-3 sm:mb-0`}
      />
      {editId !== "" && (
        <button
          onClick={cancelEditHandler}
          className="border-purple-700 border-1 bg-white text-purple-700  rounded-xl ms-2 col-span-6 sm:col-span-2"
        >
          Cancel
        </button>
      )}
      <button
        onClick={submitTodoHandler}
        className={`bg-purple-700 text-smz  text-white rounded-xl sm:ms-2 sm:col-span-2 ${
          editId === "" ? "col-span-12" : "col-span-6"
        }`}
      >
        <p>{editId === "" ? "Add Todo" : "Update Todo"}</p>
      </button>

      {isError && (
        <span className="col-span-12 text-red-500 text-sm ms-2 mt-1 font-bold">
          Input field cannot be empty!
        </span>
      )}
    </div>
  );
};

export default TodoForm;
