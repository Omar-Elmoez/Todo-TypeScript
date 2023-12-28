import classes from './TodoItem.module.css'
import { TodosContext } from '../store/todos-context'
import { useContext } from 'react'
const TodoItem: React.FC<React.PropsWithChildren<{currentId: number}>> = (props) => {

  const { removeTodo } = useContext(TodosContext)

  return (
    <li className={classes.item}>
      {props.children}
      <button onClick={() => removeTodo(props.currentId)}>Delete</button>
    </li>
  )
}

export default TodoItem