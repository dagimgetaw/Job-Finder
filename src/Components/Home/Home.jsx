import { Search } from "lucide-react";
import Filter from "./Filter";
import JobCard from "./JobCard";
import Saved from "./Saved";

export default function Home() {
  return (
    <div className="py-32 px-30">
      <div className="w-xl flex justify-center items-center m-auto mb-8">
        <div className="flex items-center gap-2 shadow-md rounded-xl border-1 border-gray-300 bg-white p-2 w-2xl">
          <Search className="cursor-pointer text-black font-semibold" />
          <input
            type="text"
            placeholder="Job title, Keywords, or Company name | Location"
            className="w-full outline-none px-2"
          />
          <button className="py-2 px-6 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </div>
      <div className="flex justify-between gap-6">
        <Filter />
        <JobCard />
        <Saved />
      </div>
    </div>
  );
}
