import { createContext, useState } from "react";
import Todo from "../models/todo";

type TodoContextType = {
  tasks: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
}

export const TodosContext = createContext<TodoContextType>({
  tasks: [],
  addTodo: () => {},
  removeTodo: () => {},
})

export const TodosContextProvider: React.FC<React.PropsWithChildren> = (props) => {

  const [tasks, setTasks] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTasks((prevTasks) => [...prevTasks, new Todo(text)]);
  }

  const removeTodoHandler = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  const CTX_Values: TodoContextType = {
    tasks: tasks,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  }

  return (
    <TodosContext.Provider
      value={CTX_Values}
    >
      {props.children}
    </TodosContext.Provider>
  )
}