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
import UseCounter from "./UseCounter";
import ShoppingCart from "./ShoppingCart";
import ThemeToggle from "./ThemeToggle";
import ApplyUseToggle from "./ApplyUseToggle";
import Users from "./Users";
import ModalDemo from "./ModalDemo";
import InfiniteScroll from "./InfiniteScroll";

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
      <UseCounter />
      <ShoppingCart />
      <ThemeToggle />
      <ApplyUseToggle />
      <Users />
      <ModalDemo />
      <InfiniteScroll />
    </div>
  );
}

export default App;
