import React, { useState } from "react";
import { Button, Input } from "@mui/material";

import "./todo.css";

export const Todo = (props) => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    const newTodos = [...todos, inputText];
    setTodos(newTodos);
    setInputText("");
  }

  function deleteTodo(deletedTodo) {
    setTodos(todos.filter((todo) => todo !== deletedTodo));
  }

  return (
    <div data-testid="todo">
      <Input
        placeholder="add task"
        type="text"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <Button onClick={addTodo}>Add</Button>
      {todos.map((todo, index) => (
        <TodoItem text={todo} deleteTodo={deleteTodo} key={index} />
      ))}
    </div>
  );
};

const TodoItem = (props) => {
  return (
    <div data-testid="todoItem">
      <span data-testid="todoItem__text">{props.text}</span>
      <button
        data-testid="todoItem__delete-button"
        onClick={() => props.deleteTodo(props.text)}
      >
        delete
      </button>
    </div>
  );
};
