import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { Todo } from "../interfaces";

type IInitialState = {
  todos: Todo[];
};

const initialState: IInitialState = {
  todos: [],
};

type TodoState = typeof initialState;
type TodoAction =
  | { type: "SET_TODOS"; payload: Todo[] }
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "EDIT_TODO"; payload: Todo }
  | { type: "DELETE_TODO"; payload: number };

export const TodoContext = createContext<{
  state: TodoState;
  dispatch: Dispatch<TodoAction>;
}>({ state: initialState, dispatch: () => {} });

const reducer = (state: TodoState, action: TodoAction) => {
  switch (action.type) {
    case "SET_TODOS":
      return {
        todos: action.payload,
      };
    case "ADD_TODO":
      return {
        todos: [action.payload, ...state.todos],
      };
    case "EDIT_TODO":
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            // todo.todoName = action.payload.todoName;
            // todo.todoDescription = action.payload.todoDescription;
            return {
              ...todo,
              todoName: action.payload.todoName,
              todoDescription: action.payload.todoDescription,
            };
          }
          return todo;
        }),
      };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((t) => t.id !== action.payload),
      };
    default:
      return state;
  }
};

export const TodoContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
