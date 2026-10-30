import { useState } from "react";

import "./App.css";
import LiveUpdate from "./LiveUpdate";
import TodoList from "./TodoList";
import Toggle from "./Toggle";
import Form from "./Form";
import SearchFilter from "./SearchFilter";
import PropsComponents from "./PropsComponents";
import DataFetch from "./DataFetch";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>
        Counter <span>{count}</span>
      </h1>
      <div>
        <button
          onClick={() => setCount((prev) => prev - 1)}
          style={{ marginRight: 10 }}
        >
          ➖Decrease
        </button>
        <button onClick={() => setCount(0)} style={{ marginRight: 10 }}>
          🔄Reset
        </button>
        <button onClick={() => setCount((prev) => prev + 1)}>➕Increase</button>
      </div>
      <LiveUpdate />
      <TodoList />
      <Toggle />
      <Form />
      <SearchFilter />
      <PropsComponents />
      <DataFetch />
      <Counter />
    </div>
  );
}

export default App;
