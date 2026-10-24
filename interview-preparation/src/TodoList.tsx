/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export default function TodoList() {
  const [text, setText] = useState("");
  const [task, setTask] = useState<string[]>([]);

  const handleChange = (e: any) => {
    setText(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!text.trim()) return;
    setTask([...task, text]);
    setText("");
  };
  const handleDelete = (index: number) => {
    const filter = task.filter((_, idx) => idx !== index);
    setTask(filter);
  };
  return (
    <div>
      <h1>TodoList</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={text} />
          <ul style={{ listStyle: "none" }}>
            {task.map((singleTask, index) => (
              <li key={index}>
                {singleTask}{" "}
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
