import classes from './TodoItem.module.css'
const TodoItem: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <li className={classes.item}>{props.children}</li>
  )
}

export default TodoItem