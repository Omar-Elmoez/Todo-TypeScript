import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";
import { useContext } from "react";
const Todos: React.FC = () => {
  const {tasks} = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          currentId={task.id}
        >
          {task.text}
        </TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
