import React, { useContext, useRef } from 'react';
import { TodoContext, ITodoContext } from '../../../context/todoContext';

import styles from './inputTodo.module.css';

const InputTodo = () => {
  const todoContext = useContext(TodoContext)! as ITodoContext;

  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const onTodoSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputRef.current!.value) {
      inputRef.current!.focus();
      return;
    }

    if (!window.confirm('리스트에 추가 하시겠어요?')) {
      return;
    }

    const todoName: string = inputRef.current!.value;

    todoContext.addTodo({
      todoName,
      id: Date.now(),
      isDone: false,
    });

    formRef.current!.reset();
    inputRef.current!.focus();
  };
  return (
    <form className={styles.form} ref={formRef} onSubmit={onTodoSubmit}>
      <input className={styles.input} ref={inputRef} type="text" placeholder="Todo...." />
      <button className={styles.submit} type="submit">
        할 일 추가
      </button>
    </form>
  );
};

export default InputTodo;
