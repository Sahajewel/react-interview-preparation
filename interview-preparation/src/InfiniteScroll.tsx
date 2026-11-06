/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from "react";

type Post = {
  id: number;
  title: string;
};

export default function InfiniteScroll() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    // ফেচ শুরু হওয়ার আগেই বা ভেতরে যাওয়ার আগে আমরা রিকুয়েস্ট পাঠাচ্ছি
    // সরাসরি useEffect-এর বডিতে প্রথম লাইনে setLoading(true) না দিয়ে
    // আমরা চাইলে ফেচ ফাংশনের ভেতরে বা অ্যাসিঙ্ক্রোনাস ফ্লোতে রাখতে পারি,
    // অথবা এই ক্ষেত্রে ফেচ শুরু হওয়ার মুহূর্তে স্টেট আপডেট করতে পারি।

    // তবে এই ওয়ার্নিং এড়ানোর সবচেয়ে ভালো উপায় হলো ডেটা ফেচিংয়ের কাজটা
    // আলাদা একটা ফাংশনে করা অথবা useEffect-এর ভেতর সিঙ্ক্রোনাস সেটস্টেট না রাখা।

    const fetchPosts = async () => {
      setLoading(true); // এটি একটি অ্যাসিঙ্ক্রোনাস বা ইভেন্ট-ড্রাইভেন ফ্লোর মতো কাজ করবে
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`,
          { signal: controller.signal },
        );
        const newPosts: Post[] = await res.json();

        if (newPosts.length === 0) {
          setHasMore(false);
        } else {
          setPosts((prev) => [...prev, ...newPosts]);
        }
      } catch (err: any) {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();

    return () => controller.abort();
  }, [page]);

  // ২. নিচের div স্ক্রিনে এলে page বাড়াও
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading && hasMore) {
        setPage((prev) => prev + 1);
      }
    });

    const el = bottomRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [loading, hasMore]);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ padding: "30px 0" }}>
            {post.id}. {post.title}
          </li>
        ))}
      </ul>

      {loading && <p>Loading...</p>}
      {!hasMore && <p>আর কোনো পোস্ট নেই।</p>}

      <div ref={bottomRef} style={{ height: "20px" }} />
    </div>
  );
}
