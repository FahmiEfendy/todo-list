import React from "react";
import { v4 as uuidv4 } from "uuid";

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

  return (
    <React.Fragment>
      <input
        type="text"
        name="title"
        id="title"
        value={enteredTitle}
        onChange={(e) => titleChangeHandler(e.target.value)}
      />
      {editId !== "" && <button onClick={cancelEditHandler}>Cancel</button>}
      <button onClick={submitTodoHandler}>
        {editId === "" ? "Add" : "Update"} Todo
      </button>
    </React.Fragment>
  );
};

export default TodoForm;
