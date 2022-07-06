import React from "react";
import { Todos } from "../interfaces";

interface Props {
  todos: Todos[];
}

const TodoLists: React.FC<Props> = ({ todos }) => {
  return (
    <div>
      <h1>TodoLists</h1>
      {todos.map((todo: Todos, key: number) => {
        return (
          <div key={key}>
            <h2>
              {todo.todoName} - {todo.todoDescription}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default TodoLists;
