import { useEffect, useState } from "react";

const API_URL = "https://joblisting-rd8f.onrender.com/api/jobs";

export function useFetchJobs(page, limit) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_URL}?page=${page}&limit=${limit}`);
        if (!response.ok) throw new Error("Failed to fetch jobs");
        const result = await response.json();
        setJobs(result.jobs || []);
        console.log(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, limit]);

  return { jobs, loading, error };
}

export function useBookMark() {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  const handleBookMark = (jobId) => {
    setBookmarkedJobs((prev) => {
      const updatedBookmarks = prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [jobId, ...prev];
      return updatedBookmarks.reverse();
    });
  };

  return { bookmarkedJobs, handleBookMark };
}

export const jobDesc = async function (id) {
  const options = [
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  ];

  const res = await fetch(`${API_URL}/${id}`, options);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  return res.json();
};
