import { memo, useCallback, useState } from "react";

const Child = memo(function Child({ onClick }: { onClick: () => void }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Child Button</button>;
});
export default function CallbackDemo() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <div style={{ marginBottom: "200px" }}>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <Child onClick={handleClick} />
    </div>
  );
}
