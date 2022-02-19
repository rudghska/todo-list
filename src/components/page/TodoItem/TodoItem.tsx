import React, { useContext } from 'react';
import { ITodos } from '../../../store/todos';
import { TodoContext, ITodoContext } from '../../../context/todoContext';

import styles from './todoItem.module.css';

type TodosProps = {
  todo: ITodos;
  key: number;
};

const TodoItem = ({ todo }: TodosProps) => {
  const todoContext = useContext(TodoContext)! as ITodoContext;

  const deleteTodo = () => {
    todoContext.deleteTodo(todo);
  };

  const changeTodoState = () => {
    todoContext.todoStateChange(todo);
  };

  return (
    <li className={styles.todo}>
      <input className={styles.checkbox} type="checkbox" onChange={changeTodoState} />
      <span className={styles.todoName}>{todo.todoName}</span>
      <button onClick={deleteTodo} className={styles.button}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default TodoItem;
