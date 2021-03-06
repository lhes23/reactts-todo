import React, { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import myStyles from "../utils/styles";

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [todoName, setTodoName] = useState<string>("");
  const [todoDescription, setTodoDescription] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const todoFormHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (todoName !== "" && todoDescription !== "") {
      dispatch({
        type: "ADD_TODO",
        payload: { id: Math.random(), todoName, todoDescription },
      });
      setError(false);
    } else {
      setError(true);
    }

    setTodoName("");
    setTodoDescription("");
  };

  return (
    <>
      <section className="container justify-center text-center border-2 py-10 px-5 w-full md:w-1/2 m-4 align-middle bg-white shadow-2xl rounded-2xl">
        <form className="" onSubmit={todoFormHandler}>
          {error && (
            <div className="p-3 m-1 mb-2 border-2 bg-red-500">
              Todo Name and Description must not be empty!
            </div>
          )}
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
              onFocus={() => setError(false)}
              autoFocus
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
              onFocus={() => setError(false)}
            />
          </div>
          <div className="flex place-content-center">
            <input
              type="submit"
              value="Submit"
              // className="border-2 p-2 w-1/2 m-5 bg-gradient-to-tr from-purple-500 to-rose-500 rounded-lg shadow-lg text-white hover:bg-gradient-to-tl hover:from-orange-400 hover:to-lime-500"
              className={myStyles.button}
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default TodoForm;
