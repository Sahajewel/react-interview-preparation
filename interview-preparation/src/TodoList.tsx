/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

// টাস্কের টাইপ
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!text.trim()) return;

    // ১. নতুন অবজেক্ট আকারে টাস্ক যোগ করা
    const newTask: Task = {
      id: Date.now(), // ইউনিক আইডি
      text: text,
      completed: false, // শুরুতে Complete থাকবে না
    };

    setTasks([...tasks, newTask]);
    setText("");
  };

  // ২. Delete করার লজিক (filter ব্যবহার করে)
  const handleDelete = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // ৩. Complete/Incomplete Toggle করার লজিক (map ব্যবহার করে)
  const handleToggle = (id: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>TodoList</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={text} />
          <button type="submit">Submit</button>

          <ul style={{ listStyle: "none", padding: 0 }}>
            {tasks.map((singleTask) => (
              <li key={singleTask.id} style={{ marginBottom: "8px" }}>
                {/* Complete হলে লেখার উপর দাগ (line-through) পড়বে */}
                <span
                  onClick={() => handleToggle(singleTask.id)}
                  style={{
                    textDecoration: singleTask.completed
                      ? "line-through"
                      : "none",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                >
                  {singleTask.text}
                </span>

                <button
                  type="button"
                  onClick={() => handleToggle(singleTask.id)}
                >
                  {singleTask.completed ? "Undo" : "Complete"}
                </button>

                <button
                  type="button"
                  onClick={() => handleDelete(singleTask.id)}
                  style={{ marginLeft: "5px" }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </form>
      </div>
    </div>
  );
}
