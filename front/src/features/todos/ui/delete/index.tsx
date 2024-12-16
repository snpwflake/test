import { useUnit } from 'effector-react'
import './styled.css'
import { TrashIcon } from "@/shared"
import { Todo, todosModel } from '@/entities'
import { useCallback } from 'react'

type TodoDeleteProps = {
  todo: Todo;
}

export const TodoDelete: React.FC<TodoDeleteProps> = ({ todo }) => {
  const deleteTodo = useUnit(todosModel.deleteTodo);

  const handleClick = useCallback(() => {
    deleteTodo(todo);
  }, [todo])

  return (
    <button
      onClick={handleClick}
      type='button'
      className="todo-delete-button"
    >
      <TrashIcon />
    </button>
  )
}