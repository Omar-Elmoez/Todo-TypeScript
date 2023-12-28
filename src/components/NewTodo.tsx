import { useRef } from "react";
import classes from "./NewTodo.module.css";
const NewTodo: React.FC<{ onAddTodo: (text: string) => void}> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  // React.MouseEvent is when use set onClick
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    // textInputRef.current!.value; => means that it is not null or undefined before access the value.
    // if it is null or undefined => it will throw an error
    // using it means that you're 100% sure that it is not null or undefined.
    // you can use textInputRef.current?.value; if you need to check if it is null or undefined before access the value.
    const enteredText = textInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);

    textInputRef.current!.value = "";

  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="todo-text">I am going to ...</label>
      <input type="text" id="todo-text" ref={textInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
