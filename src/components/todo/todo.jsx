import React, { useState } from "react";
import "./todo.css";

export const Todo = (props) => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    const newTodos = [...todos, inputText];
    setTodos(newTodos);
  }

  function deleteTodo(deletedTodo) {
    setTodos(todos.filter((todo) => todo !== deletedTodo));
  }

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setInputText(event.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      {todos.map((todo) => (
        <TodoItem text={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

const TodoItem = (props) => {
  return (
    <div>
      {props.text}
      <button onClick={() => props.deleteTodo(props.text)}>delete</button>
    </div>
  );
};
