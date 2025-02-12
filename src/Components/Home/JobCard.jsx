import { useState } from "react";
import useFetchJobs from "../../request";
import { Bookmark, Share2 } from "lucide-react";

export default function JobCard() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const { jobs, loading, error } = useFetchJobs(page, limit);
  const [bookmarked, setBookmarked] = useState(false);

  const handleLimit = (newLimit) => setLimit(newLimit);

  return (
    <div className="space-y-6 p-4">
      {loading && <p className="text-center text-gray-500">Loading jobs...</p>}
      {error && <p className="text-center text-red-500">{error.message}</p>}

      {jobs.map((job) => (
        <div
          key={job.id}
          className="shadow-xl border border-gray-300 rounded-xl p-5 bg-white flex flex-col md:flex-row gap-4 items-start"
        >
          {/* Company Logo */}
          <img
            src={job.logo}
            alt={job.company}
            className="w-16 h-16 object-contain"
          />

          {/* Job Details */}
          <div className="flex-1">
            <h2 className="font-semibold text-lg">{job.title}</h2>
            <p className="text-gray-600 text-sm">{job.company}</p>
            <div className="flex gap-2 mt-2">
              <span className="px-3 py-1 rounded-lg bg-gray-200 text-xs">
                Remote
              </span>
              <span className="px-3 py-1 rounded-lg bg-gray-200 text-xs">
                {job.type}
              </span>
              <span className="px-3 py-1 rounded-lg bg-gray-200 text-xs">
                {job.salary}
              </span>
            </div>
            <p className="text-gray-500 text-sm mt-2">{job.description}</p>
          </div>

          {/* Action Icons */}
          <div className="flex gap-4 text-gray-500 cursor-pointer">
            <Bookmark className="hover:text-blue-500 cursor-pointer " />
            <Share2 className="hover:text-blue-500 cursor-pointer" />
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center gap-3 pt-4">
        {[1, 2, 3, 4].map((num) => (
          <button
            key={num}
            onClick={() => handleLimit(num)}
            className={`px-4 py-2 rounded-xl border border-gray-300 cursor-pointer ${
              limit === num
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}
