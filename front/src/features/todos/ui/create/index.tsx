import { useUnit } from 'effector-react';
import './styled.css';
import { PlusIcon } from "@/shared"
import { todosModel } from '@/entities';
import { useCallback } from 'react';

export const TodoCreate: React.FC = () => {
  const addTodo = useUnit(todosModel.addTodo);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newForm = (event.currentTarget.elements);
    const value = (newForm[0] as HTMLInputElement).value;
    if (value.trim() !== '') {
      const newTodo = {
        id: Date.now().toString(),
        label: value,
        checked: false,
      };
      addTodo(newTodo);
    }
    (newForm[0] as HTMLInputElement).value = '';
  }, [addTodo]);

  return (
    <form className="todo-create" onSubmit={handleSubmit}>
      <input
        className="todo-create-input"
        placeholder='Введите задачу'
        type="text"
      />
      <button
        className="todo-create-button"
        type='submit'
      >
        <PlusIcon />
      </button>
    </form>
  );
};