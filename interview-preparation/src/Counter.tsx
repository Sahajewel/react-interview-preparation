import { useReducer } from "react";

type State = { count: number };
type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" }
  | { type: "ADD_FIVE" }
  | { type: "SUBSTRACT_FIVE" };

function reducer(state: State, action: Action): State {
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  } else if (action.type === "DECREMENT") {
    return { count: Math.max(0, state.count - 1) };
  } else if (action.type === "ADD_FIVE") {
    return { count: state.count + 5 };
  } else if (action.type === "SUBSTRACT_FIVE") {
    return { count: Math.max(0, state.count - 5) };
  } else if (action.type === "RESET") {
    return { count: 0 };
  } else {
    return state;
  }
}
export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "ADD_FIVE" })}>+5</button>
      <button onClick={() => dispatch({ type: "SUBSTRACT_FIVE" })}>-5</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
