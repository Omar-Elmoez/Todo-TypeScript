const TodoItem: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <li>{props.children}</li>
  )
}

export default TodoItem