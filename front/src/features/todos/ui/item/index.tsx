import { Checkbox } from "@/src/shared";
import { Todo, todosModel } from "@/src/entities";
import { useUnit } from "effector-react";
export const TodosItem: React.FC<Todo> = (props) => {
  const updateTodo = useUnit(todosModel.updateTodo);

  return (
    <div
      id={props.id}
      className="todo-item"
    >
      <Checkbox
        checked={props.checked}
        onChange={() => updateTodo(props)}
      />
      <label className="todo-label">{props.label}</label>
      <div className="todo-drag"></div>
    </div>
  )
}