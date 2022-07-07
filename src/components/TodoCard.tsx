import React from "react";
import { Todo } from "../interfaces";
import myStyles from "../utils/styles";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

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
    <>
      <div className="p-5 m-2 border-2 rounded-md place-content-center bg-gradient-to-tr from-slate-400 via-gray-200 to-slate-700 shadow-2xl">
        <div className="grid grid-cols-2">
          <h1>Todo Name: {todo.todoName}</h1>
          <h2>Todo Description : {todo.todoDescription}</h2>
          {/* <button
            onClick={() => doneBtnHandler(todo.id)}
            className={myStyles.button}
          >
            Done
          </button> */}
        </div>
        <div className="flex w-full place-content-end">
          <FaEdit size={28} />
          <MdDeleteForever size={30} />
        </div>
      </div>
    </>
  );
};

export default TodoCard;
