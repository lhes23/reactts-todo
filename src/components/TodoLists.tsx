import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Todo } from "../interfaces";
import TodoCard from "./TodoCard";

const TodoLists = () => {
  const { state } = useContext(TodoContext);
  return (
    <div className="w-full md:w-1/2 text-center">
      {state?.todos.length > 0 ? (
        <>
          <h1 className="text-3xl font-bold p-3 m-4">TodoLists</h1>
        </>
      ) : (
        ""
      )}
      {state?.todos.map((todo: Todo, key: number) => {
        return (
          <div key={key}>
            <TodoCard todo={todo} />
          </div>
        );
      })}
    </div>
  );
};

export default TodoLists;
