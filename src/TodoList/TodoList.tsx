import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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

  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (e: string) => {
    setEnteredTitle(e);
  };

  const addTodoHandler = () => {
    const newTodo = {
      id: uuidv4(),
      title: enteredTitle,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setEnteredTitle("");
  };

  const deleteTodoHandler = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

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
        <button onClick={addTodoHandler}>Add Todo</button>
      </div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <p>{todo.title}</p>
            <button onClick={() => deleteTodoHandler(todo.id)}>x</button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default TodoList;
