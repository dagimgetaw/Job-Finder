import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/rafiki.png";
import logo2 from "../../assets/job_logo.png";
import google from "../../assets/google.png";
import apple from "../../assets/apple.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import { Mail, LockKeyhole } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    setError("");

    const { email, password } = formData;
    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      setError("Invalid email or password");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));

    alert("Login successful!");
    navigate("/");
  };

  return (
    <div className="w-full flex justify-between h-screen pt-20">
      <div className="hidden 2xl:w-[50%] 2xl:flex items-center justify-center h-full">
        <img src={logo} alt="Login page logo" />
      </div>
      <div className="w-1/2 py-40 px-50 flex flex-col h-full">
        <Link to={"/"}>
          <div className="flex w-30 mb-6 bg-[#0034D1] border-[#0034D1] rounded-lg cursor-pointer">
            <img src={logo2} alt="logo image" className="w-30 h-12" />
          </div>
        </Link>
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Login to Your Account
        </h2>

        <div className="space-y-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 shadow-md rounded-lg border border-gray-300 bg-white p-3">
              <Mail className="text-gray-500" />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="w-full outline-none text-gray-700"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-3 shadow-md rounded-lg border border-gray-300 bg-white p-3">
              <LockKeyhole className="text-gray-500" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full outline-none text-gray-700"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </div>

        <button
          onClick={handleLogin}
          className="w-full py-3 mt-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition cursor-pointer"
        >
          Login
        </button>

        <div className="flex items-center my-4">
          <div className="border-t border-gray-300 flex-grow"></div>
          <p className="mx-2 text-gray-500">Or</p>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        <div className="flex justify-center py-4 space-x-4 gap-6">
          <img src={google} alt="Google" className="w-12 h-12 cursor-pointer" />
          <img src={apple} alt="Apple" className="w-12 h-12 cursor-pointer" />
          <img
            src={facebook}
            alt="Facebook"
            className="w-12 h-12 cursor-pointer"
          />
          <img
            src={linkedin}
            alt="LinkedIn"
            className="w-12 h-12 cursor-pointer"
          />
        </div>

        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link to={"/signup"}>
            <span className="text-blue-600 font-semibold cursor-pointer">
              Create Account
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
