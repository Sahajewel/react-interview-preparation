/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleForm = (e: any) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!name.trim() || !email.trim()) {
      setError("Please fill the all input");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please input a valid email");
      return;
    }
    setSuccess("Form successfully submitted");
    setName("");
    setEmail("");
  };
  return (
    <div>
      <h1>Form Validation</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={handleForm}>
        <label>Name:</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Email:</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
