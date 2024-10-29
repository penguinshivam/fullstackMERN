import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "Sample task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    if (newTodo != "") {
      setTodos((prevTodos) => {
        return [...todos, { task: newTodo, id: uuidv4(), isDone: false }];
      });
      setNewTodo("");
    }
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let isDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  let isDoneAll = () => {
    setTodos((todos) =>
      todos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addNewTask();
    }
  };

  return (
    <div>
      <p> Todo List</p>
      <input
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue}
        onKeyDown={handleKeyPress}
      ></input>
      &nbsp; &nbsp; &nbsp;
      <button onClick={addNewTask}> Add Task</button>
      <br />
      <hr />
      <h3 style={{display:todos.length>0 ? "none": "inline"}}>Add some task to Start</h3>
      <h4 style={{display:todos.length>0 ? "inline":"none"}}> Task Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.isDone ? "line-through" : "none",
              }}
            >
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            &nbsp;&nbsp;
            <button onClick={() => isDone(todo.id)}>Mark as Done </button>
          </li>
        ))}
      </ul>
      <br></br>
      <button onClick={isDoneAll} style={{display:todos.length>0 ? "inline":"none"}}>Mark all done </button>
    </div>
  );
}
