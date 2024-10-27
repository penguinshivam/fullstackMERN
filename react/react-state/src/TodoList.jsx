import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){

    let[todos, setTodos] = useState([{task:"Sample task" , id:uuidv4()}]);
    let[newTodo, setNewTodo] = useState("");

    let addNewTask =()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos, {task : newTodo , id: uuidv4()}];
    });
        setNewTodo("");
    }

    let updateTodoValue =(event)=>{
        setNewTodo(event.target.value);
    }

    let deleteTodo =(id)=>{
        setTodos(todos.filter((todo)=> todo.id != id));
    };
    
    let upperCaseAll=()=>{
        setTodos( (prevTodos)=>(
            prevTodos.map((todo)=>{
                return{
                    ...todo,
                    task: todo.task.toUpperCase()
                };
            })
        ))
    };

    return (
        <div>
            <p> Todo List</p>
            <input placeholder ="add a task"  value={newTodo} onChange={updateTodoValue} ></input>
            <button onClick={addNewTask}> Add Task</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h4>Task Todo</h4>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key = {todo.id}>
                        <span>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
                <button onClick={upperCaseAll}>Upper Case All</button>
        </div>
    )
}