import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo} from "../features/todo/todoSlice";
import { marksAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  function doneHandler(id) {
    console.log("done",id);
    dispatch(marksAsDone(id));
    console.log(todos);
  };
  return (
    <>
      <AddForm />
      <h2>Todo List App</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            &nbsp;&nbsp;
            <button onClick={() => doneHandler(todo.id)}>Mark As Done</button>
            &nbsp;&nbsp;
            {/* <button onClick={() => deleteHandler(todo.id)}>Delete</button> */}
          </li>
        ))}
      </ul>
    </>
  );
}
