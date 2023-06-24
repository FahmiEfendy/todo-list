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
          <div
            key={todo.id}
            className="rounded-md flex py-4 px-3 my-2 bg-purple-950 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-40 drop-shadow-2xl"
          >
            <button onClick={() => completeTodoHandler(todo.id)}>
              {todo.completed ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fff"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fff"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                  <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                </svg>
              )}
            </button>
            <p
              className={`${
                todo.completed && "line-through"
              } my-auto ms-3 text-lg text-zinc-50`}
            >
              {todo.title}
            </p>
            <div className="ms-auto flex">
              {!todo.completed && (
                <button
                  onClick={() => editTodoHandler(todo.id)}
                  className="me-2 bg-zinc-50 p-1 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path>
                    <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path>
                  </svg>
                </button>
              )}
              <button
                onClick={() => deleteTodoHandler(todo.id)}
                className="bg-zinc-50 p-1 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="red"
                >
                  <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
                  <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default TodoItem;
