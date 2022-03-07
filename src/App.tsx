import React, { useContext } from 'react';
import styles from './App.module.css';
import { TodoContext } from './context/todoContext';
import { ITodoContext } from './types/todos';
import InputTodo from './components/InputTodo/InputTodo';
import Todos from './components/Todos/Todos';

function App() {
  const todoContext = useContext(TodoContext)! as ITodoContext;
  return (
    <div className={styles.todoApp}>
      <header className={styles.header}>
        <h1 className={styles.title}>To Do List</h1>
        <p className={styles.howMany}>할 일 : {todoContext.todos.length}개</p>
      </header>
      <InputTodo />
      <Todos />
    </div>
  );
}

export default App;
