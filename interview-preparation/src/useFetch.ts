import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [prevUrl, setPrevUrl] = useState(url);

  if (url !== prevUrl) {
    setPrevUrl(url);

    setLoading(true);
    setError(null);
    setData(null);
  }

  useEffect(() => {
    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("Something went wrong");
        return res.json();
      })
      .then((result) => {
        setData(result); // সফল হলে ডেটা সেভ হলো
        setLoading(false); // লোডিং বন্ধ হলো
      })
      .catch((err) => {
        if (err.name === "AbortError") return; // রিকোয়েস্ট অ্যাবর্ট হলে ইগ্নোর করুন
        setError(err.message);
        setLoading(false); // এরর আসলেও লোডিং বন্ধ করতে হবে
      });

    // ক্লিনআপ ফাংশন
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
