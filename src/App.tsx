import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoLists from "./components/TodoLists";
import { Todos } from "./interfaces";

function App() {
  const [todos, setTodos] = useState<Todos[]>([]);

  return (
    <div className="">
      <div className="flex justify-center text-center">
        <h1>React TypeScript Todo App</h1>
      </div>
      <div className="flex place-content-center">
        <TodoForm todos={todos} setTodos={setTodos} />
      </div>
      <div className="flex place-content-center">
        <TodoLists todos={todos} />
      </div>
    </div>
  );
}

export default App;
