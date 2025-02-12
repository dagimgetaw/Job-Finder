export default function Filter() {
  return (
    <div className="w-full h-210 border-1 border-gray-300 max-w-sm bg-white rounded-xl p-6 shadow-xl">
      <h2 className="text-center text-2xl font-bold mb-4">Filter</h2>

      <div className="mb-4">
        <label className="text-lg font-medium">Date Posted</label>
        <select className="w-full mt-2 border border-gray-300 rounded-lg py-2 px-3">
          <option>Last 24 hours</option>
          <option>Last 3 Days</option>
          <option>Last Week</option>
          <option>Last Month</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="text-lg font-medium">Job Type</label>
        <div className="mt-2 space-y-2">
          {[
            "Full-time",
            "Part-time",
            "Internship",
            "Contract",
            "Volunteer",
          ].map((type) => (
            <label key={type} className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-gray-600">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="text-lg font-medium">Location</label>
        <input
          type="text"
          placeholder="Enter location"
          className="w-full mt-2 border border-gray-300 rounded-lg py-2 px-3"
        />
      </div>

      <div className="mb-4">
        <label className="text-lg font-medium">Experience Level</label>
        <select className="w-full mt-2 border border-gray-300 rounded-lg py-2 px-3">
          <option>Intermediate</option>
          <option>Expert</option>
          <option>Master</option>
          <option>Junior</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="text-lg font-medium">Salary Range</label>
        <input type="range" className="w-full mt-2" min="0" max="50" />
        <div className="flex justify-between mt-2">
          <div>
            <label className="text-sm">From</label>
            <input
              type="text"
              className="w-16 border border-gray-300 rounded-lg py-1 px-2 ml-2"
            />
          </div>
          <div>
            <label className="text-sm">To</label>
            <input
              type="text"
              className="w-16 border border-gray-300 rounded-lg py-1 px-2 ml-2"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label className="text-lg font-medium">Currency</label>
        <select className="w-full mt-2 border border-gray-300 rounded-lg py-2 px-3">
          <option>Dollar ($)</option>
          <option>Birr</option>
          <option>Euro</option>
          <option>Crypto</option>
        </select>
      </div>
      <button className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
        Reset Filters
      </button>
    </div>
  );
}
