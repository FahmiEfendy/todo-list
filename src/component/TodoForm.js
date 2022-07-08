import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Chip,
  Container,
  Grid,
  TextField,
  TextareaAutosize,
} from "@mui/material";

export default function TodoForm(props) {
  const navigate = useNavigate();

  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todoCategory, setTodoCategory] = useState("");
  const [todoScope, setTodoScope] = useState("");
  const [todoDeadline, setTodoDeadline] = useState("");
  const [todoStatus, setTodoStatus] = useState("");

  const inputTodoTitleHandler = (e) => {
    setTodoTitle(e.target.value);
  };
  const inputTodoDescriptionHandler = (e) => {
    setTodoDescription(e.target.value);
  };
  const inputTodoCategoryHandler = (e) => {
    setTodoCategory(e.target.value);
  };
  const inputTodoScopeHandler = (e) => {
    setTodoScope(e.target.value);
  };
  const inputTodoDeadlineHandler = (e) => {
    setTodoDeadline(e.target.value);
  };
  const inputTodoStatusHandler = (e) => {
    setTodoStatus(e.target.textContent);
  };

  const addTodoListHandler = (e) => {
    e.preventDefault();

    const todo = {
      no: props.todoList.length + 1,
      title: todoTitle,
      description: todoDescription,
      category: todoCategory,
      scope: todoScope,
      deadline: new Date(todoDeadline),
      status: todoStatus,
    };
    setTodoTitle("");
    setTodoDescription("");
    setTodoDeadline("");
    props.onGetTodo(todo);
    navigate("/");
  };

  const cancelTodoListHandler = () => {
    navigate("/");
  };

  const styles = {
    container: {
      backgroundColor: "#1F1F1F",
      borderRadius: "15px",
      paddingBottom: 100,
      paddingLeft: 50,
      fontFamily: "Roboto, sans-serif",
      color: "#FFFFFF",
      fontSize: 20,
    },
    title: {
      paddingTop: 50,
      textAlign: "center",
      fontSize: 42,
    },
    formContainer: {
      backgroundColor: "#4B4B4B",
      marginTop: 5,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "15px",
      paddingTop: 30,
    },
    chip: {
      width: 150,
      height: 40,
      backgroundColor: "white",
      marginRight: 20,
      fontSize: 16,
    },
    button: {
      borderRadius: "15px",
      padding: "20px 40px",
      border: "none",
      fontSize: 20,
      fontFamily: "Roboto, sans-serif",
      cursor: "pointer",
      marginTop: 20,
      marginBottom: 50,
      backgroundColor: "#A892EE",
      color: "#FFFFFF",
      marginLeft: 100,
    },
  };

  return (
    <Container maxWidth="xl" style={styles.container}>
      <h1 style={styles.title}>Todo Form</h1>
      <Grid container spacing={3} style={styles.formContainer}>
        {/* Title */}
        <Grid item xs={3.5} />
        <Grid item xs={1}>
          <label>Title</label>
        </Grid>
        <Grid item xs={7.5}>
          <TextField
            required
            variant="outlined"
            style={{
              backgroundColor: "white",
              width: 500,
            }}
            onChange={inputTodoTitleHandler}
            value={todoTitle}
          />
        </Grid>
        {/* Description */}
        <Grid item xs={3.5} />
        <Grid item xs={1}>
          <label>Description</label>
        </Grid>
        <Grid item xs={7.5}>
          <TextareaAutosize
            onChange={inputTodoDescriptionHandler}
            value={todoDescription}
            style={{
              width: 480,
              height: 100,
              fontSize: 20,
              padding: 10,
              fontFamily: "Roboto, sans-serif",
            }}
          />
        </Grid>
        {/* Category */}
        <Grid item xs={3.5} />
        <Grid item xs={1}>
          <label>Category</label>
        </Grid>
        <Grid item xs={2}>
          <input
            type="radio"
            name="category"
            value="Task"
            onChange={inputTodoCategoryHandler}
            style={{ marginRight: 15 }}
          />
          <label>Task</label>
        </Grid>
        <Grid item xs={5.5}>
          <input
            type="radio"
            name="category"
            value="Reminder"
            onChange={inputTodoCategoryHandler}
            style={{ marginRight: 15 }}
          />
          <label>Reminder</label>
        </Grid>
        {/* Deadline */}
        <Grid item xs={3.5} />
        <Grid item xs={1}>
          <label>Deadline</label>
        </Grid>
        <Grid item xs={7.5}>
          <input
            type="date"
            onChange={inputTodoDeadlineHandler}
            value={todoDeadline}
            style={{
              width: 490,
              height: 50,
              fontSize: 18,
              paddingLeft: 10,
            }}
          />
        </Grid>
        {/* Scope */}
        <Grid item xs={3.5} />
        <Grid item xs={1}>
          <label>Scope</label>
        </Grid>
        <Grid item xs={7.5}>
          <select
            name="scope"
            onChange={inputTodoScopeHandler}
            style={{
              width: 505,
              height: 50,
              fontSize: 18,
              paddingLeft: 10,
            }}
          >
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="College">College</option>
          </select>
        </Grid>
        {/* Status */}
        <Grid item xs={3.5} />
        <Grid item xs={1}>
          <label>Status</label>
        </Grid>
        <Grid item xs={7.5}>
          <Chip
            label="To-Do"
            variant="outlined"
            onClick={inputTodoStatusHandler}
            style={styles.chip}
          />
          <Chip
            label="In-Progress"
            variant="outlined"
            onClick={inputTodoStatusHandler}
            style={styles.chip}
          />
          <Chip
            label="Done"
            variant="outlined"
            onClick={inputTodoStatusHandler}
            style={styles.chip}
          />
        </Grid>
        {/* Button */}
        <Grid item xs={2}>
          <button onClick={cancelTodoListHandler} style={styles.button}>
            Cancel
          </button>
        </Grid>
        <Grid item xs={3}>
          <button
            type="submit"
            onClick={addTodoListHandler}
            style={styles.button}
          >
            Add Todo List
          </button>
        </Grid>
      </Grid>
    </Container>
  );
}
