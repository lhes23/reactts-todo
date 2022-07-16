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
  | { type: "SET_TODOS" }
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "DELETE_TODO"; payload: number };

export const TodoContext = createContext<{
  state: TodoState;
  dispatch: Dispatch<TodoAction>;
}>({ state: initialState, dispatch: () => {} });

const reducer = (state: TodoState, action: TodoAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [action.payload, ...state.todos],
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
