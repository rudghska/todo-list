import { ITodos } from './todos';
import { Actions } from './actions';

interface ITodoAndActions {
  action: Actions;
  todo: ITodos;
}

export const todoReducer = (todos: ITodos[], { action, todo }: ITodoAndActions): ITodos[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...todos, todo];
    case 'DELETE_TODO':
      const newTodos = todos.filter(bTodo => bTodo.id !== todo.id);
      return newTodos;

    default:
      throw new Error('Action error');
  }
};
