import { useToggle } from "./UseToggle";

export default function ApplyUseToggle() {
  const [isOpen, setIsOpen] = useToggle();
  return (
    <div style={{ marginBottom: "300px" }}>
      <h1>Apply Use Toggle</h1>
      <button onClick={setIsOpen}>{isOpen ? "Hide" : "open"}</button>
      {isOpen && <p>Hello</p>}
    </div>
  );
}
