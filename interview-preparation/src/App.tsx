import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>
        Couter <span>{count}</span>
      </h1>
      <div>
        <button onClick={() => setCount(count - 1)} style={{ marginRight: 10 }}>
          ➖Decrease
        </button>
        <button onClick={() => setCount(0)} style={{ marginRight: 10 }}>
          🔄Reset
        </button>
        <button onClick={() => setCount(count + 1)}>➕Increase</button>
      </div>
    </div>
  );
}

export default App;
