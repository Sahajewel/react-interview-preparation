import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}
export default function DataFetch() {
  const [post, setPost] = useState<Post[]>([]);
  const [loding, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  return (
    <div style={{ marginBottom: "300px" }}>
      <h1>Api Data Fetching... {post.length}</h1>
      {loding && <p>Loading Posts...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <div>
        {post.map((singlePost, index) => (
          <div key={index}>
            <h4>{singlePost.title}</h4>
            <p>{singlePost.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
