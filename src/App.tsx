import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoLists from "./components/TodoLists";
import { Todo } from "./interfaces";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log(todos);
  return (
    <div className="h-full">
      <div className="flex justify-center text-center">
        <h1 className="text-3xl font-bold p-3 m-4">
          React TypeScript Todo App
        </h1>
      </div>
      <div className="flex place-content-center">
        <TodoForm todos={todos} setTodos={setTodos} />
      </div>
      <div className="flex place-content-center">
        <TodoLists todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
