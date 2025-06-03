
import { ListGroup } from "react-bootstrap";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { useSelector, useDispatch } from "react-redux";



export default function TodoForm() {
  const { todo } = useSelector ((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <ListGroup.Item>
      <button onClick={() => dispatch(addTodo(todo))}
              id="wd-add-todo-click"> Add </button>
      <button onClick={() => dispatch(updateTodo(todo))}
              id="wd-update-todo-click"> Update </button>
      <input value={todo.title}
        onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value })) }/>
    </ListGroup.Item>
  );
}
