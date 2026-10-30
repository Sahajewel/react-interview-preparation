import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}
export default function DataFetch() {
  const [post, setPost] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;
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

  // pagination calculation

  const totalPages = Math.ceil(post.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = post.slice(startIndex, endIndex);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  return (
    <div>
      <h1>
        Api Data Fetching... (Page {currentPage} of {totalPages})
      </h1>
      {loading && <p>Loading Posts...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <div>
        {currentPosts.map((singlePost) => (
          <div key={singlePost.id}>
            <h4>{singlePost.title}</h4>
            <p>{singlePost.body}</p>
          </div>
        ))}
      </div>

      {!loading && !error && (
        <div>
          <button onClick={handlePrev} disabled={currentPage === 1}>
            Previus
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={handleNext} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}
