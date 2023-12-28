import classes from './TodoItem.module.css'
const TodoItem: React.FC<React.PropsWithChildren<{ currentId: number; onRemoveTodo: (id: number) => void}>> = (props) => {

  return (
    <li className={classes.item}>
      {props.children}
      <button onClick={() => props.onRemoveTodo(props.currentId)}>Delete</button>
    </li>
  )
}

export default TodoItem