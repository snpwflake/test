import './styled.css';
import { TodosTabsItem } from "../item"
import { useUnit } from 'effector-react';
import { todosModel } from '@/entities';

export const TodosTabs: React.FC = () => {
  const activeTab = useUnit(todosModel.$tab);
  const setTab = useUnit(todosModel.setTab)

  return (
    <ul className="todos-tabs">
      <TodosTabsItem
        onClick={() => setTab('all')}
        active={activeTab === 'all'}
      >
        All
      </TodosTabsItem>
      <TodosTabsItem
        onClick={() => setTab('active')}
        active={activeTab === 'active'}
      >
        Active
      </TodosTabsItem>
      <TodosTabsItem
        onClick={() => setTab('completed')}
        active={activeTab === 'completed'}
      >
        Completed
      </TodosTabsItem>
    </ul>
  )
}