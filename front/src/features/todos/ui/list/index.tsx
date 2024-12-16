import './styled.css';
import { Todo } from "@/entities";
import { TodosItem } from "../item";

type TodoListTypes = {
  todos: Todo[];
}

export const TodosList: React.FC<TodoListTypes> = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodosItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
}