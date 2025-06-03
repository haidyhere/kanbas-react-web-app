
import { ListGroup } from "react-bootstrap";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  //const [todos, setTodos] = useState([
  //  { id: "1", title: "Learn React" },
  //  { id: "2", title: "Learn Node"  }]);

  //const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });

    return (
    <div>
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />

        {todos.map((todo: any) => (
          <TodoItem todo={todo}  key={todo.id} />
        ))}

      </ListGroup>
      <hr/>
    </div>
  );}