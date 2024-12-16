import './styled.css';
import { todosModel } from "@/entities";
import { useUnit } from "effector-react";

export const TodoClearCompleted: React.FC = () => {
  const clear = useUnit(todosModel.clearCompleted);

  return (
    <button className="todos-clear-completed" onClick={clear}>
      Clear completed
    </button>
  );
};
