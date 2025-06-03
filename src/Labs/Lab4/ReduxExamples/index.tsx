import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import TodoForm from "./todos/TodoForm";

import TodoList from "./todos/TodoList";

export default function ReduxExamples() {
return(
<div>
<h2>Redux Examples</h2>
<HelloRedux/>
<CounterRedux />
<AddRedux />
<TodoList />
<TodoForm />


</div>
);
};
