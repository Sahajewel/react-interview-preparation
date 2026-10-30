import { useReducer } from "react";

type State = { count: number };
type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" }
  | { type: "ADD_FIVE" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: Math.max(0, state.count - 1) };
    case "RESET":
      return { count: 0 };
    case "ADD_FIVE":
      return { count: state.count + 5 };
    default:
      return state;
  }
}
export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div style={{ marginBottom: "300px" }}>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "ADD_FIVE" })}>+5</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
