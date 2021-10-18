import logo from "./logo.svg";
import "./App.css";
import CheckBox from "./components/common/CheckBox";
import todosData from "./components/const-data/todoData";

function App() {
  const todositems = todosData.map((item) => {
    return <CheckBox key={item.id} item={item} />;
  });

  return (
    <>
      <div class="todo-list">{todositems}</div>;
    </>
  );
}

export default App;
