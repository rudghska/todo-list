export interface ITodos {
  todoName: string;
  isDone: boolean;
  id: number;
}

export interface ITodoContext {
  addTodo: (initData: ITodos) => void;
  todoStateChange: (todo: ITodos) => void;
  deleteTodo: (todo: ITodos) => void;
  todos: ITodos[];
}

// export interface ITotalCount {
//   totalCount: number;
// }
