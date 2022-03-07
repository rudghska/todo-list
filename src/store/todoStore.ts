import { ITodos } from '../types/todos';
import { Actions } from './actions';

interface ITodoAndActions {
  type: Actions;
  todo: ITodos;
}

export const todoReducer = (todos: ITodos[], action: ITodoAndActions): ITodos[] => {
  const { type, todo } = action;
  let newTodos: ITodos[];
  switch (type) {
    case 'ADD_TODO':
      return [...todos, todo];
    case 'TODO_CHANGE':
      newTodos = todos.filter(bTodo => {
        if (bTodo.id === todo.id && !bTodo.isDone) {
          bTodo.isDone = true;
          return bTodo;
        } else if (bTodo.id === todo.id && bTodo.isDone) {
          bTodo.isDone = false;
          return bTodo;
        }
        return bTodo;
      });
      return newTodos;
    case 'DELETE_TODO':
      newTodos = todos.filter(bTodo => bTodo.id !== todo.id);
      return newTodos;

    default:
      throw new Error('Action error');
  }
};
