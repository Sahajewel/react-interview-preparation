/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export default function LiveUpdate() {
  const [text, setText] = useState("");

  const handleChange = (e: any) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h1>
        {" "}
        LiveUpdate <span>{text.length}</span>
      </h1>
      <textarea
        onChange={handleChange}
        value={text}
        placeholder="write something"
      ></textarea>
      <button onClick={() => setText("")}>Clear</button>
    </div>
  );
}
