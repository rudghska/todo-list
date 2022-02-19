import React, { createContext, useReducer, useMemo } from 'react';
import { ITodos } from '../store/todos';
import { todoReducer } from '../store/todoStore';

type ChildrenNode = {
  children: React.ReactNode;
};

interface ITodoContext {
  addTodo: (initData: ITodos) => void;
  deleteTodo: (todo: ITodos) => void;
  todos: ITodos[];
}

const TodoContext = createContext<ITodoContext | null>(null);

export const TodoProvider = ({ children }: ChildrenNode): JSX.Element => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const addTodo = (initData: ITodos): void => {
    dispatch({ action: { type: 'ADD_TODO' }, todo: initData });
  };

  const deleteTodo = (todo: ITodos) => {
    dispatch({ action: { type: 'DELETE_TODO' }, todo });
  };

  const todoContext = useMemo((): ITodoContext => ({ addTodo, deleteTodo, todos }), [
    todos,
    addTodo,
    deleteTodo,
  ]);

  return <TodoContext.Provider value={todoContext}>{children}</TodoContext.Provider>;
};
