import React from "react";
import { Todo } from "../interfaces";
import TodoCard from "./TodoCard";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoLists: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="w-1/2 text-center">
      {todos.length > 0 ? (
        <h1 className="text-3xl font-bold p-3 m-4">TodoLists</h1>
      ) : (
        ""
      )}
      {todos.map((todo: Todo, key: number) => {
        return (
          <div key={key}>
            <TodoCard todo={todo} setTodos={setTodos} todos={todos} />
          </div>
        );
      })}
    </div>
  );
};

export default TodoLists;
