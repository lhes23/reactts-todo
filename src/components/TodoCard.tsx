import React, { useState, FormEvent, useContext } from "react";
import { Todo } from "../interfaces";
import myStyles from "../utils/styles";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { TodoContext } from "../context/TodoContext";

type Props = {
  todo: Todo;
};

const TodoCard = ({ todo }: Props) => {
  const { state, dispatch } = useContext(TodoContext);

  const [editedTodo, setEditedTodo] = useState<string>(todo.todoName);
  const [editedId, setEditedId] = useState<number>(0);
  const [editedDescription, setEditedDescription] = useState<string>(
    todo.todoDescription
  );

  const doneBtnHandler = (tid: number) => {
    dispatch({ type: "DELETE_TODO", payload: tid });
  };

  const [onEdit, setOnEdit] = useState<boolean>(false);

  const editSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // setEditedId(todo.id);
    console.log(editedId);
    // const updatedTodo = todos.filter((todo) => {
    //   if (todo.id === tid)
    //     return {
    //       ...todo,
    //       todoName: editedTodo,
    //       todoDescription: editedDescription,
    //     };
    // });

    // console.log(updatedTodo);
  };

  return (
    <>
      <div className="p-5 m-4 md:m-2 border-2 rounded-md bg-gradient-to-tr from-slate-400 via-gray-200 to-slate-700 shadow-2xl">
        <div className="grid grid-cols-2 text-left">
          <div>
            {onEdit ? (
              <>
                <form onSubmit={editSubmitHandler}>
                  <div className="grid grid-cols-1">
                    <div className="">
                      <input
                        type="text"
                        value={editedTodo}
                        className="p-1 m-1 w-full"
                        onChange={(e) => setEditedTodo(e.target.value)}
                      />
                      <input
                        type="text"
                        value={editedDescription}
                        className="p-1 m-1 w-full"
                        onChange={(e) => setEditedDescription(e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-2 text-center">
                      <input className={myStyles.button} type="submit">
                        Submit
                      </input>
                      <button
                        className={myStyles.button}
                        onClick={() => setOnEdit(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </>
            ) : (
              <>
                <h1 className="text-lg p-1 my-1">{todo.todoName}</h1>
                <h2 className="text-lg p-1 my-1">{todo.todoDescription}</h2>
              </>
            )}
          </div>
          <div className="flex w-full place-content-end">
            <FaEdit
              size={27}
              onClick={() => setOnEdit(!onEdit)}
              className="hover:text-white hover:cursor-pointer"
            />
            <MdDeleteForever
              size={30}
              onClick={() => doneBtnHandler(todo.id)}
              className="hover:text-white hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
