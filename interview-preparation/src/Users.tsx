import { Link } from "react-router-dom";
import { useFetch } from "./useFetch";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function Users() {
  const { data, loading, error } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users",
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error}</p>;
  return (
    <div style={{ marginBottom: "200px" }}>
      <h1>Users:{data?.slice(0, 2).length}</h1>
      <ul style={{ listStyle: "none" }}>
        {data?.slice(0, 2).map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.name} ({user.email})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
