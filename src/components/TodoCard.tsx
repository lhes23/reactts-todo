import React from "react";
import { Todo } from "../interfaces";
import myStyles from "../utils/styles";

type Props = {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
};

const TodoCard = ({ todo, setTodos, todos }: Props) => {
  const doneBtnHandler = (tid: number) => {
    setTodos(todos.filter((t) => t.id !== tid));
  };
  return (
    <div className="flex p-5 m-2 border-2 rounded-md place-content-center bg-gradient-to-tr from-slate-400 via-gray-200 to-slate-700 shadow-2xl">
      <div className="">
        <h1>Todo Name: {todo.todoName}</h1>
        <h2>Todo Description : {todo.todoDescription}</h2>
        <button
          onClick={() => doneBtnHandler(todo.id)}
          className={myStyles.button}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
