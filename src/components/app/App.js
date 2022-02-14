import "./App.css";
import React from "react";

import { Home } from "../home/home";
import { Todo } from "../todo/todo";

function App() {
  return (
    <div>
      <Home /> {/* you can comment out the component you are not working on */}
      <Todo />
    </div>
  );
}

export default App;
