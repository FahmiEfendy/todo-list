import React from "react";

import { ITodos } from "../interfaces/todo-interfaces";

interface TodoItemProps {
  setEditId: (id: string) => void;
  todos: Array<ITodos>;
  setTodos: (todos: Array<ITodos>) => void;
}

const TodoItem = (props: TodoItemProps) => {
  const { setEditId, todos, setTodos } = props;

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

  const deleteTodoHandler = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  };

  const editTodoHandler = (id: string) => {
    setEditId(id);
  };

  return (
    <React.Fragment>
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

export default TodoItem;
