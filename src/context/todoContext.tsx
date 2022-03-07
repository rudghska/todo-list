import React, { createContext, useReducer, useMemo } from 'react';
import { ITodos } from '../types/todos';
import { todoReducer } from '../store/todoStore';

type ChildrenNode = {
  children: React.ReactNode;
};

export interface ITodoContext {
  addTodo: (initData: ITodos) => void;
  todoStateChange: (todo: ITodos) => void;
  deleteTodo: (todo: ITodos) => void;
  todos: ITodos[];
}

export const TodoContext = createContext<ITodoContext | null>(null);

export const TodoProvider = ({ children }: ChildrenNode): JSX.Element => {
  console.log('ch', children);
  const [todos, dispatch] = useReducer(todoReducer, []);

  const addTodo = (initData: ITodos): void => {
    dispatch({ action: { type: 'ADD_TODO' }, todo: initData });
  };

  const todoStateChange = (todo: ITodos) => {
    dispatch({ action: { type: 'TODO_CHANGE' }, todo });
  };

  const deleteTodo = (todo: ITodos) => {
    dispatch({ action: { type: 'DELETE_TODO' }, todo });
  };

  const todoContext = useMemo(
    (): ITodoContext => ({ addTodo, todoStateChange, deleteTodo, todos }),
    [todos, todoStateChange, addTodo, deleteTodo]
  );

  return <TodoContext.Provider value={todoContext}>{children}</TodoContext.Provider>;
};
