interface ChildProps {
  names: string[];
  onAdd: () => void;
}
export default function ChildComponents({ names, onAdd }: ChildProps) {
  return (
    <div>
      <h3>List Names {names.length}</h3>
      <ul style={{ listStyle: "none" }}>
        {names.map((name, index: number) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <button onClick={onAdd}>Add New Name</button>
    </div>
  );
}
