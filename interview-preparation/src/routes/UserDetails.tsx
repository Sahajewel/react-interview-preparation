import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../useFetch";

type User = { id: number; name: string; email: string; phone: string };

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useFetch<User>(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <button onClick={() => navigate(-1)}>⬅️Back</button>
      <h2>{data?.name}</h2>
      <p>Email: {data?.email}</p>
      <p>Phone: {data?.phone}</p>
    </div>
  );
}
