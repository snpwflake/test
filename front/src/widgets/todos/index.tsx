import './styled.css';
import { todosModel } from "@/entities"
import { TodoClearCompleted, TodoCreate, TodosList, TodosTabs } from "@/features";
import { useUnit } from "effector-react"
import { useMemo } from "react";

export const Todos: React.FC = () => {
  const activeTab = useUnit(todosModel.$tab);

  const todos = useUnit(todosModel.$todos);

  const activeTodos = useMemo(() => (
    todos.filter((todo) => !todo.checked)
  ), [todos]);

  const completedTodos = useMemo(() => (
    todos.filter((todo) => todo.checked)
  ), [todos]);

  return (
    <div className="todos-box">
      <div className='todos-toolbar'>
        <TodoCreate />
      </div>
      {activeTab === 'all' && (
        <TodosList todos={todos} />
      )}
      {activeTab === 'active' && (
        <TodosList todos={activeTodos} />
      )}
      {activeTab === 'completed' && (
        <TodosList todos={completedTodos} />
      )}
      <div className='todos-toolbar-bottom'>
        <span className='todos-items-left'>{activeTodos.length} items left</span>
        <TodosTabs />
        <TodoClearCompleted />
      </div>
    </div>
  )
}