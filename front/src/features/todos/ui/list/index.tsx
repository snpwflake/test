import { useUnit } from "effector-react";
import { todosModel } from "@/src/entities";
import { TodosItem } from "../item";

export const TodosList: React.FC = () => {
  const todos = useUnit(todosModel.$todos);

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodosItem
          {...todo}
          key={todo.id}
        />
      ))}
    </div>
  );
}