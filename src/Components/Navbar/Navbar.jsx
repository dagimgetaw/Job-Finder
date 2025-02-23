import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/job_logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check user session on component mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // Clear session
    setIsLoggedIn(false);
    navigate("/"); // Redirect to homepage
  };

  return (
    <nav className="flex justify-between items-center py-5 px-24 bg-white fixed w-full backdrop-blur-sm bg-opacity-50 z-10 border-b-2 border-gray-200 shadow-md">
      <div className="bg-[#0034D1] border-[#0034D1] rounded-lg cursor-pointer">
        <img src={logo} alt="logo image" className="w-30 h-12" />
      </div>
      <div>
        <ul className="flex gap-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer border-b-3 border-[#0034D1] font-medium text-[#0034D1]"
                : "cursor-pointer font-medium"
            }
          >
            Job Search
          </NavLink>
          <NavLink
            to="/applications"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer border-b-3 border-[#0034D1] font-medium text-[#0034D1]"
                : "cursor-pointer font-medium"
            }
          >
            My Applications
          </NavLink>
          <NavLink
            to="/companies"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer border-b-3 border-[#0034D1] font-medium text-[#0034D1]"
                : "cursor-pointer font-medium"
            }
          >
            Companies
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer border-b-3 border-[#0034D1] font-medium text-[#0034D1]"
                : "cursor-pointer font-medium"
            }
          >
            Contact Us
          </NavLink>
        </ul>
      </div>
      <div className="flex gap-3">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="cursor-pointer py-2 px-10 border border-[#0034D1] rounded-lg bg-[#0034D1] text-white"
          >
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/login">
              <button className="cursor-pointer py-2 px-10 border border-[#0034D1] rounded-lg bg-[#0034D1] text-white">
                Login
              </button>
            </NavLink>
            <NavLink to="/signup">
              <button className="cursor-pointer py-2 px-10 border border-[#0034D1] rounded-lg">
                Sign In
              </button>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
