import { Bookmark, Share2, ChevronRight, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function JobCard({
  jobs,
  loading,
  error,
  page,
  handleBookMark,
  handlePage,
  bookmarkedJobs,
}) {
  const navigate = useNavigate();

  const handleDescription = (job) => {
    navigate(`/job/${job.id}`, { state: { job } }); // Send job data
  };

  return (
    <div className="space-y-6">
      {loading && <p className="text-center text-gray-500">Loading jobs...</p>}
      {error && <p className="text-center text-red-500">{error.message}</p>}
      {jobs.length === 0 && !loading && !error && (
        <p className="text-center text-gray-500">No jobs available</p>
      )}
      {jobs.map((job) => (
        <div
          key={job.id}
          className="shadow-xl border border-gray-300 rounded-xl p-5 bg-white flex flex-col md:flex-row gap-4 items-start cursor-pointer"
          onClick={() => handleDescription(job)}
        >
          <img
            src={job.logo}
            alt={job.company}
            className="w-16 h-16 object-contain"
          />
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
          <div className="flex gap-4 text-gray-500 cursor-pointer">
            <Bookmark
              className={`hover:text-blue-500 cursor-pointer ${
                bookmarkedJobs.includes(job.id) ? "text-blue-500" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation(); // Prevent navigation when clicking bookmark
                handleBookMark(job.id);
              }}
            />
            <Share2 className="hover:text-blue-500 cursor-pointer" />
          </div>
        </div>
      ))}
      <div className="flex justify-center gap-6 pt-4">
        <button
          onClick={() => handlePage(page - 1)}
          disabled={page === 1}
          className="p-2 rounded-full border border-gray-300 cursor-pointer disabled:opacity-50"
        >
          <ChevronLeft />
        </button>
        <p className="pt-2">Page {page}</p>
        <button
          onClick={() => handlePage(page + 1)}
          className="p-2 rounded-full border border-gray-300 cursor-pointer"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
