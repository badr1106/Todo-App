import logo from "./logo.svg";
import "./App.css";
import CheckBox from "./components/common/CheckBox";
import todosData from "./components/const-data/todoData";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
  }

  render() {
    const todositems = this.state.todos.map((item) => {
      return <CheckBox key={item.id} item={item} />;
    });

    return (
      <>
        <div class="todo-list">{todositems}</div>;
      </>
    );
  }
}

export default App;
