import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Container, Grid, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TodoList(props) {
  const navigate = useNavigate();

  const [todoEditing, setTodoEditing] = useState(null);
  const [todoTitle, setTodoTitle] = useState("");

  const viewTodoListHandler = (todoList) => {
    console.log(todoList);
    setTodoEditing(null);
  };

  const editTodoListHandler = (no) => {
    setTodoEditing(no);
  };

  const editTodoTitleHandler = (no) => {
    const updatedTodoList = props.todoList.map((todoList) => {
      if (todoList.no === no) {
        todoList.title = todoTitle;
      }
      return todoList;
    });
    props.setTodoList(updatedTodoList);
    setTodoEditing(null);
  };

  const deleteTodoListHandler = (no) => {
    props.setTodoList(props.todoList.filter((todoList) => todoList.no !== no));
    setTodoEditing(null);
  };

  const addTodoListHandler = () => {
    navigate("/todoform");
  };

  const styles = {
    container: {
      backgroundColor: "#1F1F1F",
      borderRadius: "15px",
      color: "#FFFFFF",
      fontSize: 20,
      fontFamily: "Roboto, sans-serif",
    },
    title: {
      paddingTop: 50,
      textAlign: "center",
      fontSize: 42,
    },
    list: {
      backgroundColor: "#4B4B4B",
      marginTop: 5,
      alignItems: "center",
      paddingBottom: 2,
      borderRadius: "15px",
    },
    icon: {
      color: "white",
    },
    buttonContainer: {
      textAlign: "center",
    },
    button: {
      borderRadius: "15px",
      padding: "20px 40px",
      border: "none",
      fontSize: 20,
      fontFamily: "Roboto, sans-serif",
      cursor: "pointer",
      backgroundColor: "#A892EE",
      color: "#FFFFFF",
      marginTop: 50,
      marginBottom: 50,
    },
  };

  return (
    <Container maxWidth="xl" style={styles.container}>
      <form onSubmit={addTodoListHandler}>
        <h1 style={styles.title}>Todo List</h1>
        <div>
          <ul style={{ listStyleType: "none" }}>
            {props.todoList
              .sort((a, b) => a.no - b.no)
              .map((todoList) => (
                <li key={todoList.no}>
                  <Grid container spacing={2} sx={styles.list}>
                    <Grid item xs={0.2}>
                      {todoList.no}
                    </Grid>
                    {todoEditing === todoList.no ? (
                      <Grid item xs={1.8}>
                        <TextField
                          variant="standard"
                          style={{
                            backgroundColor: "white",
                            width: 130,
                            height: 25,
                            border: "none",
                          }}
                          onChange={(e) => {
                            setTodoTitle(e.target.value);
                          }}
                        />
                        <button
                          onClick={() => editTodoTitleHandler(todoList.no)}
                        >
                          Edit Title
                        </button>
                      </Grid>
                    ) : (
                      <Grid item xs={1.8}>
                        {todoList.title}
                      </Grid>
                    )}
                    <Grid item xs={2.5}>
                      {todoList.description}
                    </Grid>
                    <Grid item xs={1.25}>
                      {todoList.category}
                    </Grid>
                    <Grid item xs={1.25}>
                      {todoList.scope}
                    </Grid>
                    <Grid item xs={2.3}>
                      {todoList.deadline.toLocaleString()}
                    </Grid>
                    <Grid item xs={1.2}>
                      {todoList.status}
                    </Grid>
                    <Grid item xs={1.5}>
                      <IconButton
                        onClick={() => viewTodoListHandler(todoList)}
                        style={styles.icon}
                      >
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => editTodoListHandler(todoList.no)}
                        style={styles.icon}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => deleteTodoListHandler(todoList.no)}
                        style={styles.icon}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </li>
              ))}
          </ul>
        </div>
        <div style={styles.buttonContainer}>
          <button style={styles.button} type="submit">
            Add Todo List
          </button>
        </div>
      </form>
    </Container>
  );
}
