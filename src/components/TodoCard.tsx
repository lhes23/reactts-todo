import React, { useState, FormEvent, useContext } from "react";
import { Todo } from "../interfaces";
import myStyles from "../utils/styles";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { TodoContext } from "../context/TodoContext";

const TodoCard = ({ todo }: { todo: Todo }) => {
  const { state, dispatch } = useContext(TodoContext);

  const [editedTodo, setEditedTodo] = useState<string>(todo.todoName);
  const [editedDescription, setEditedDescription] = useState<string>(
    todo.todoDescription
  );

  const doneBtnHandler = (tid: number) => {
    dispatch({ type: "DELETE_TODO", payload: tid });
  };

  const [onEdit, setOnEdit] = useState<boolean>(false);

  const editTodoHandler = () => {
    dispatch({
      type: "EDIT_TODO",
      payload: {
        id: todo.id,
        todoName: editedTodo,
        todoDescription: editedDescription,
      },
    });
    dispatch({ type: "SET_TODOS", payload: state.todos });
  };
  return (
    <>
      <div className="p-5 m-4 md:m-2 border-2 rounded-md bg-gradient-to-tr from-slate-400 via-gray-200 to-slate-700 shadow-2xl">
        <div className="grid grid-cols-2 text-left">
          <div>
            {onEdit && (
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
                  <button
                    className={myStyles.button}
                    type="button"
                    onClick={editTodoHandler}
                  >
                    Submit
                  </button>
                  <button
                    className={myStyles.button}
                    onClick={() => {
                      setOnEdit(false);
                      setEditedTodo(todo.todoName);
                      setEditedDescription(todo.todoDescription);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {!onEdit && (
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
