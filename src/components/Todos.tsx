import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
const Todos: React.FC<React.PropsWithChildren<{ items: Todo[] }>> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map(item => <TodoItem key={item.id}>{item.text}</TodoItem>)}
    </ul>
  )
}

export default Todos;