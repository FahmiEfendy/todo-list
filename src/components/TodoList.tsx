import React, { useEffect, useState } from "react";

import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import TodoFilter from "./TodoFilter";
import { ITodos } from "../interfaces/todo-interfaces";

interface TodoListProps {
  todos: Array<ITodos>;
  setTodos: (todos: Array<ITodos>) => void;
}

const TodoList = (props: TodoListProps) => {
  const { todos, setTodos } = props;

  const [editId, setEditId] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");

  useEffect(() => {
    const selectedTodo = todos.find((todo) => todo.id === editId);

    if (!selectedTodo) return;

    setEnteredTitle(selectedTodo.title);
  }, [editId, todos]);

  return (
    <React.Fragment>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        editId={editId}
        setEditId={setEditId}
        enteredTitle={enteredTitle}
        setEnteredTitle={setEnteredTitle}
      />
      <TodoFilter setTodos={setTodos} />
      <TodoItem setEditId={setEditId} todos={todos} setTodos={setTodos} />
    </React.Fragment>
  );
};

export default TodoList;
