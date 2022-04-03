import "./App.css";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { Home } from "../home/home";
import { Todo } from "../todo/todo";
import { Header } from "../header/header";
import { Chat } from "../chat/chat";

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
