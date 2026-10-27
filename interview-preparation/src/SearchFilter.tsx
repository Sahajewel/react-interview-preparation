/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export default function SearchFilter() {
  const [userName, setUserName] = useState("");
  const [allUser, setAllUser] = useState<string[]>([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const handleFormUser = (e: any) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    if (!userName.trim()) {
      setError("Please input your name");
      return;
    }
    setAllUser([...allUser, userName]);
    setError("");
    setSuccess("User successfully created");

    setUserName("");
  };
  const filterUser = allUser.filter((user) =>
    user.toLowerCase().includes(search.trim().toLowerCase()),
  );

  return (
    <div>
      <h1>Search and Filter</h1>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Search user..."
      />
      <h3>User List {allUser.length}</h3>
      {success && <p style={{ color: "green" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleFormUser}>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {filterUser.length === 0 ? (
        <p>No user found</p>
      ) : (
        <ul style={{ listStyle: "none" }}>
          {filterUser.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
