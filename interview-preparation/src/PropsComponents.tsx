import { useState } from "react";
import ChildComponents from "./ChildComponents";

export default function PropsComponents() {
  const [names, setNames] = useState<string[]>([
    "Saha",
    "Pavel",
    "Tanu",
    "mita",
    "sans",
  ]);
  const [newCount, setNewCount] = useState(1);

  const handleAddName = () => {
    const updateName = `User ${newCount}`;
    setNames([...names, updateName]);
    setNewCount(newCount + 1);
  };
  return (
    <div>
      <h1>Props and Components</h1>
      <ChildComponents names={names} onAdd={handleAddName} />
    </div>
  );
}
