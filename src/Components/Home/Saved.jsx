import { X } from "lucide-react";

// eslint-disable-next-line react/prop-types
export default function Saved({ jobs, handleBookMark, bookmarkedJobs }) {
  const savedJobs = jobs
    // eslint-disable-next-line react/prop-types
    .filter((job) => bookmarkedJobs.includes(job.id))
    .sort(
      // eslint-disable-next-line react/prop-types
      (a, b) => bookmarkedJobs.indexOf(b.id) - bookmarkedJobs.indexOf(a.id)
    );

  return (
    <div className="shadow-lg border border-gray-300 rounded-xl p-6 bg-white flex flex-col w-sm gap-4 max-h-[500px] overflow-y-auto relative">
      <h2 className="text-center text-xl font-semibold">Saved Jobs</h2>
      {savedJobs.length < 1 ? (
        <p className="text-center text-gray-500 py-4">No saved jobs</p>
      ) : (
        savedJobs.map((job) => (
          <div
            key={job.id}
            className="border border-gray-300 rounded-lg p-4 bg-gray-50 flex flex-col gap-3 z-0"
          >
            <div className="flex justify-between items-start">
              <div>
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
              </div>
              <X
                className="hover:text-red-500 cursor-pointer transition-transform transform hover:scale-110"
                onClick={() => handleBookMark(job.id)}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
}
