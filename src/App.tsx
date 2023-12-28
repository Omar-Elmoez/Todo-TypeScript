import Todos from "./components/Todos";
import Todo from "./models/todo";
function App() {
  const tasks = [
    new Todo("Learn React"),
    new Todo("Learn TypeScript"),
  ]
  return (
    <>
      <Todos items={tasks} />
    </>
  );
}

export default App;
