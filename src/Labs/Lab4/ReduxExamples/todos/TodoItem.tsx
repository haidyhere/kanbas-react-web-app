import { ListGroup } from "react-bootstrap";
import { deleteTodo, setTodo } from "./todosReducer";
import { useDispatch } from "react-redux";

export default function TodoItem({ todo }: {
  todo: { id: string; title: string };

}) {
    const dispatch = useDispatch();
  return (
    <ListGroup.Item key={todo.id}>
      <button onClick={() => dispatch(deleteTodo(todo.id))}
              id="wd-delete-todo-click"> Delete  </button>
      <button onClick={() => dispatch(setTodo(todo))}
              id="wd-set-todo-click"> Edit  </button>
      {todo.title} {""}  </ListGroup.Item>);}

