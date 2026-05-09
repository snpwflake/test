import './styled.css';
import { Todo, todosModel } from "@/entities";
import { Checkbox } from "@/shared";
import { TodosDelete } from "../delete";

type TodoItemProps = {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <li className={`todo-item ${todo.checked && 'checked'}`}>
      <Checkbox
        checked={todo.checked}
        onChange={() => todosModel.toggleTodo(todo.id)}
      />
      <span className="todo-item-label">{todo.label}</span>
      <TodosDelete id={todo.id} />
    </li>
  );
}
