import React, { useContext } from 'react';
import { TodoContext } from '../../context/todoContext';
import styles from './header.module.css';
import { ITodoContext } from '../../types/todos';

const Header = () => {
  const { todos } = useContext(TodoContext) as ITodoContext;

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>To Do List</h1>
      <p className={styles.howMany}>할 일 : {todos.length}개</p>
    </header>
  );
};

export default Header;
