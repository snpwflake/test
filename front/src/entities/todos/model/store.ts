import { createEvent, createStore } from "effector";
import { Todo, TodoTabs } from "./types";

const addTodo = createEvent<Todo>();

const deleteTodo = createEvent<Todo>();

const updateTodo = createEvent<Todo>();

const clearCompleted = createEvent();

const $todos = createStore<Todo[]>([
  {
    id: '123',
    label: 'Выпить кофе',
    checked: true,
  },
  {
    id: '124',
    label: 'Проверить ТЗ',
    checked: false,
  },
  {
    id: '125',
    label: 'Сказать что всё ок',
    checked: false,
  },
  {
    id: '126',
    label: 'Пригласить на собес',
    checked: false,
  },
])
  .on(addTodo, (prevState, todo) => ([...prevState, todo]))
  .on(updateTodo, (prevState, todo) => (prevState.map((todoItem) => {
    if (todoItem.id === todo.id) {
      return { ...todo, checked: !todo.checked };
    };

    return todoItem;
  })))
  .on(deleteTodo, (prevState, todo) => (prevState.filter((todoItem) => todoItem.id !== todo.id)))
  .on(clearCompleted, (prevState) => (prevState.filter((todoItem) => !todoItem.checked)));


const setTab = createEvent<TodoTabs>();

const $tab = createStore<TodoTabs>('all')
  .on(setTab, (_, tab) => tab);

export {
  $todos,
  $tab,
  addTodo,
  updateTodo,
  deleteTodo,
  clearCompleted,
  setTab
};
