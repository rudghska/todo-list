import React, { useContext } from 'react';
import styles from './App.module.css';
import InputTodo from './components/InputTodo/InputTodo';
import Todos from './components/Todos/Todos';
import Header from './components/Header/Header';

function App() {
  return (
    <div className={styles.todoApp}>
      <Header />
      <InputTodo />
      <Todos />
    </div>
  );
}

export default App;
