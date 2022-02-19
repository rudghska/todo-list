import { ITodos } from './todos';
import { Actions } from './actions';

interface ITodoAndActions {
  action: Actions;
  todo: ITodos;
}

export const todoReducer = (todos: ITodos[], { action, todo }: ITodoAndActions): ITodos[] => {
  let newTodos: ITodos[];
  switch (action.type) {
    case 'ADD_TODO':
      return [...todos, todo];
    case 'TODO_CHANGE':
      console.log('change');
      console.log(todo);
      newTodos = todos.filter(bTodo => {
        if (bTodo.id === todo.id && !bTodo.isDone) {
          console.log('f');
          bTodo.isDone = true;
          return bTodo;
        } else if (bTodo.id === todo.id && bTodo.isDone) {
          console.log('s');
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
