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
    <div className="mb-5 grid grid-flow-row-dense grid-cols-12">
      <input
        type="text"
        name="title"
        id="title"
        placeholder="What's your plan today?"
        value={enteredTitle}
        onChange={(e) => titleChangeHandler(e.target.value)}
        className={`${
          editId !== "" ? "col-span-8" : "col-span-10"
        } rounded-md p-3`}
      />
      {editId !== "" && (
        <button
          onClick={cancelEditHandler}
          className="border-zinc-950 border-2 bg-zinc-50 text-zinc-950  rounded-xl ms-2 col-span-2"
        >
          Cancel
        </button>
      )}
      <button
        onClick={submitTodoHandler}
        className="bg-zinc-950 text-zinc-50 rounded-xl ms-2 col-span-2"
      >
        <p>{editId === "" ? "Add Todo" : "Update Todo"}</p>
      </button>
    </div>
  );
};

export default TodoForm;
