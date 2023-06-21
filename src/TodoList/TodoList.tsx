import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";

interface ITodos {
  id: string;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Array<ITodos>;
  setTodos: (todos: Array<ITodos>) => void;
}

const TodoList = (props: TodoListProps) => {
  const { todos, setTodos } = props;

  const [editId, setEditId] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (e: string) => {
    setEnteredTitle(e);
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

  const deleteTodoHandler = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  };

  const completeTodoHandler = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });

    setTodos(updatedTodos);
  };

  const editTodoHandler = (id: string) => {
    setEditId(id);
  };

  const cancelEditHandler = () => {
    setEditId("");
    setEnteredTitle("");
  };

  useEffect(() => {
    const selectedTodo = todos.find((todo) => todo.id === editId);

    if (!selectedTodo) return;

    setEnteredTitle(selectedTodo.title);
  }, [editId, todos]);

  return (
    <React.Fragment>
      <div>
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
      </div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <button onClick={() => completeTodoHandler(todo.id)}>O</button>
            <p className={`${todo.completed && "line-through"}`}>
              {todo.title}
            </p>
            <button onClick={() => editTodoHandler(todo.id)}>E</button>
            <button onClick={() => deleteTodoHandler(todo.id)}>X</button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default TodoList;
