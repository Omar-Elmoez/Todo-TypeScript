import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
function App() {
  const [tasks, setTasks] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTasks((prevTasks) => [...prevTasks, new Todo(text)]);
  }

  return (
    <>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={tasks} />
    </>
  );
}

export default App;
