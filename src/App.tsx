import React, { useContext } from 'react';
import styles from './App.module.css';
import { ITodoContext, TodoContext } from './context/todoContext';
import InputTodo from './components/page/InputTodo/InputTodo';
import Todos from './components/page/Todos/Todos';

function App() {
  const todoContext = useContext(TodoContext)! as ITodoContext;
  return (
    <div className={styles.todoApp}>
      <header className={styles.header}>
        <h1 className={styles.title}>투두 리스트</h1>
        <p className={styles.howMany}>몇개 해야함? : {todoContext.todos.length}개</p>
      </header>
      <InputTodo />
      <Todos />
    </div>
  );
}

export default App;
