import React, { useContext, useRef, useEffect } from 'react';
import { TodoContext, ITodoContext } from '../../../context/todoContext';
import TodoItem from '../TodoItem/TodoItem';
import styles from './todos.module.css';

const Todos = () => {
  const todoContext = useContext(TodoContext)! as ITodoContext;
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    ulRef.current?.lastElementChild?.scrollIntoView(false);
  });

  return (
    <ul ref={ulRef} className={styles.list}>
      {todoContext.todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default Todos;
