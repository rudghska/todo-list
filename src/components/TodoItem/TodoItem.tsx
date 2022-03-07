import React, { useContext } from 'react';
import { ITodos } from '../../types/todos';
import { TodoContext, ITodoContext } from '../../context/todoContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
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
        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
      </button>
    </li>
  );
};

export default TodoItem;
