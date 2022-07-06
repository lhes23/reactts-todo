import React, { FormEvent, useState } from "react";
import { Todos } from "../interfaces";

interface Props {
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const TodoForm: React.FC<Props> = ({ todos, setTodos }) => {
  const [todoName, setTodoName] = useState<string>("");
  const [todoDescription, setTodoDescription] = useState<string>("");

  const todoFormHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setTodos([...todos, { todoName, todoDescription }]);

    setTodoName("");
    setTodoDescription("");
  };

  return (
    <>
      <section className="container justify-center text-center border-2 p-10 w-1/2 align-middle">
        <form className="" onSubmit={todoFormHandler}>
          <div className="grid grid-cols-2 align-middle">
            <label htmlFor="todoName">Todo Name:</label>
            <input
              type="text"
              name="todoName"
              id="todoName"
              className="border-2 m-2 p-1"
              value={todoName}
              onChange={(e) => {
                setTodoName(e.target.value);
              }}
            />
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="todoDescription">Todo Description: </label>
            <input
              type="text"
              name="todoDescription"
              id="todoDescription"
              className="border-2 m-2 p-1"
              value={todoDescription}
              onChange={(e) => setTodoDescription(e.target.value)}
            />
          </div>
          <div className="flex place-content-center">
            <input
              type="submit"
              value="Submit"
              className="border-2 p-2 w-1/2 m-5 bg-gradient-to-tr from-purple-500 to-rose-500 rounded-lg shadow-lg text-white hover:bg-gradient-to-tl hover:from-orange-400 hover:to-lime-500"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default TodoForm;
