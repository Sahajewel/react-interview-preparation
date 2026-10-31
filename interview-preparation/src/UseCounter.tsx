import { useState } from "react";

export default function UseCounter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <button onClick={() => setCount((prev) => prev + 5)}>+5</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
