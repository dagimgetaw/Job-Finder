import { Search } from "lucide-react";
import Navbar from "../Navbar/Navbar";
import Filter from "./Filter";
import JobCard from "./JobCard";
import Saved from "./Saved";
import { useState } from "react";
import { useFetchJobs, useBookMark } from "../../request";

export default function Home() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const { jobs, loading, error } = useFetchJobs(page, limit);
  const { bookmarkedJobs, handleBookMark } = useBookMark();

  const handlePage = (newPage) => setPage(newPage);

  return (
    <>
      <Navbar />
      <div className="py-32 px-30">
        <div className="w-xl flex justify-center items-center m-auto mb-8">
          <div className="flex items-center gap-2 shadow-md rounded-xl border-1 border-gray-300 bg-white p-2 w-2xl">
            <Search className="cursor-pointer text-black font-semibold" />
            <input
              type="text"
              placeholder="Job title, Keywords, or Company name | Location"
              className="w-full outline-none px-2"
            />
            <button className="py-2 px-6 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition cursor-pointer">
              Search
            </button>
          </div>
        </div>
        <div className="flex justify-evenly gap-4">
          <Filter />
          <JobCard
            jobs={jobs}
            loading={loading}
            error={error}
            page={page}
            handleBookMark={handleBookMark}
            handlePage={handlePage}
            bookmarkedJobs={bookmarkedJobs}
          />
          <Saved
            jobs={jobs}
            handleBookMark={handleBookMark}
            bookmarkedJobs={bookmarkedJobs}
          />
        </div>
      </div>
    </>
  );
}
