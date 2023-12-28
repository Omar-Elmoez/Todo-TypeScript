import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
const Todos: React.FC<
  React.PropsWithChildren<{ items: Todo[]; onRemoveTodo: (id: number) => void }>
> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} currentId={item.id} onRemoveTodo={props.onRemoveTodo}>{item.text}</TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
