import { useState } from "react";
import logo from "../../assets/work.png";
import logo2 from "../../assets/job_logo.png";
import google from "../../assets/google.png";
import apple from "../../assets/apple.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import { Mail, LockKeyhole, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.password) errors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSignup = () => {
    if (!validateForm()) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((user) => user.email === formData.email)) {
      setErrors({ email: "Email already registered" });
      return;
    }

    const newUser = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="w-full flex justify-between h-screen pt-20">
      <div className="w-1/2 px-50 flex flex-col">
        <Link to={"/"}>
          <div className="flex w-30 mb-6 bg-[#0034D1] border-[#0034D1] rounded-lg cursor-pointer">
            <img src={logo2} alt="logo" className="w-30 h-12" />
          </div>
        </Link>
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Create your account
        </h2>

        <div className="flex flex-col gap-4">
          {[
            "firstName",
            "lastName",
            "email",
            "password",
            "confirmPassword",
          ].map((field, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center gap-3 shadow-md rounded-lg border border-gray-300 bg-white p-3">
                {field === "email" ? (
                  <Mail className="text-gray-500" />
                ) : field.includes("password") ? (
                  <LockKeyhole className="text-gray-500" />
                ) : (
                  <User className="text-gray-500" />
                )}
                <input
                  type={field.includes("password") ? "password" : "text"}
                  name={field}
                  placeholder={field.replace(/([A-Z])/g, " $1").trim()}
                  className="w-full outline-none text-gray-700"
                  value={formData[field]}
                  onChange={handleChange}
                />
              </div>
              {errors[field] && (
                <p className="text-red-500 text-sm">{errors[field]}</p>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={handleSignup}
          className="w-full py-3 mt-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition cursor-pointer"
        >
          Create account
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
          Already have an account?{" "}
          <Link to={"/login"}>
            <span className="text-blue-600 font-semibold cursor-pointer">
              Login
            </span>
          </Link>
        </p>
      </div>
      <div className="hidden 2xl:w-[50%] 2xl:flex items-center justify-center">
        <img src={logo} alt="Signup page logo" />
      </div>
    </div>
  );
}
