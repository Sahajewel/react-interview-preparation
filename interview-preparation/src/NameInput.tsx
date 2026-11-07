import { useLocationStorage } from "./useLocalStorage";

export default function NameInput() {
  const [name, setName] = useLocationStorage("name", "");
  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="write your name"
      />
      <p>Hello, {name || "unknown"}</p>
    </div>
  );
}
