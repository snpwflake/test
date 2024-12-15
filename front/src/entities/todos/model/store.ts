import { createEvent, createStore } from "effector";
import { Todo } from "./types";

const addTodo = createEvent<Todo>();

const deleteTodo = createEvent<Todo>();

const updateTodo = createEvent<Todo>();

const $todos = createStore<Todo[]>([])
  .on(addTodo, (prevState, todo) => ([...prevState, todo]))
  .on(updateTodo, (prevState, todo) => (prevState.map((todoItem) => {
    if (todoItem.id === todo.id) {
      return { ...todo, checked: !todo.checked };
    };

    return todoItem;
  })))
  .on(deleteTodo, (prevState, todo) => (prevState.filter((todoItem) => todoItem.id !== todo.id)));

export {
  $todos,
  addTodo,
  updateTodo,
  deleteTodo
};
