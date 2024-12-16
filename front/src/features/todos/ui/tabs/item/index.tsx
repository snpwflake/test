import './styled.css';

type TodosTabsItem = {
  children: React.ReactNode | string;
  active?: boolean;
} & React.LiHTMLAttributes<HTMLLIElement>;

export const TodosTabsItem: React.FC<TodosTabsItem> = ({ children, active, ...props }) => {
  return (
    <li {...props} className={`todos-tabs-item ${active && 'active'}`}>
      {children}
    </li>
  )
}