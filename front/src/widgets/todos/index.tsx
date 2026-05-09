import './styled.css';
import { todosModel } from "@/entities";
import { TodoList, TodosCreate, TodosTabsList, TodosClearCompleted } from "@/features";

export const Todos = () => {
  const todos = todosModel.useTodos();

  return (
    <div className="todos">
      <h1 className="todos-title">todos</h1>
      <div className="todos-content">
        <TodosCreate />
        <TodoList todos={todos} />
        <div className="todos-footer">
          <TodosTabsList />
          <TodosClearCompleted />
        </div>
      </div>
    </div>
  );
}
