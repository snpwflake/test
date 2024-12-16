import './styled.css';
import { Checkbox } from "@/shared";
import { Todo, todosModel } from "@/entities";
import { useUnit } from "effector-react";
import { TodoDelete } from '../delete';

type TodosItemProps = {
  todo: Todo;
};

export const TodosItem: React.FC<TodosItemProps> = ({ todo }) => {
  const updateTodo = useUnit(todosModel.updateTodo);

  return (
    <li
      id={todo.id}
      className="todo-item"
    >
      <Checkbox
        id={todo.id}
        name={todo.id}
        checked={todo.checked}
        value={todo.id}
        onChange={() => updateTodo(todo)}
      />
      <label htmlFor={todo.id} className={`todo-label ${todo.checked && 'done'}`}>{todo.label}</label>
      <TodoDelete todo={todo} />
      {/* <div className="todo-drag"></div> */}
    </li>
  )
}