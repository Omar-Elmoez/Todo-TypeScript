import Todo from "../models/todo";
import TodoItem from "./TodoItem";
const Todos: React.FC<React.PropsWithChildren<{ items: Todo[] }>> = (props) => {
  return (
    <ul>
      {props.items.map(item => <TodoItem key={item.id}>{item.text}</TodoItem>)}
    </ul>
  )
}

export default Todos;