import logo from "../../assets/job_logo.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between fixed w-full items-center py-5 px-24 border-b-4 border-gray-300">
      <div className="bg-[#0034D1] border-[#0034D1] rounded-lg cursor-pointer">
        <img src={logo} alt="logo image" className="w-30 h-12" />
      </div>
      <div>
        <ul className="flex gap-10">
          <li className="cursor-pointer border-b-3 border-transparent hover:text-[#0034D1] hover:border-[#0034D1] hover:font-medium">
            Job Search
          </li>
          <li className="cursor-pointer border-b-3 border-transparent hover:text-[#0034D1] hover:border-[#0034D1] hover:font-medium">
            My Applications
          </li>
          <li className="cursor-pointer border-b-3 border-transparent hover:text-[#0034D1] hover:border-[#0034D1] hover:font-medium">
            Companies
          </li>
          <li className="cursor-pointer border-b-3 border-transparent hover:text-[#0034D1] hover:border-[#0034D1] hover:font-medium">
            Contact Us
          </li>
        </ul>
      </div>
      <div className="flex gap-3">
        <button className="cursor-pointer py-2 px-10 border-1 border-[#0034D1] rounded-lg bg-[#0034D1] text-white">
          Login
        </button>
        <button className="cursor-pointer py-2 px-10 border-1 border-[#0034D1] rounded-lg">
          Sign In
        </button>
      </div>
    </nav>
  );
}
