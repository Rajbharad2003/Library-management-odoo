import "./Styles.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading, setSignupData } from "../redux/slices/authSlice";
import { signUp } from "../utils/auth";
import Navbar from "../components/Navbar";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
    location: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(setLoading(true));
    dispatch(signUp(formData, navigate, setError));
    dispatch(setLoading(false));
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-full flex justify-center items-center sm:px-10 py-10 md:py-10">
        <div className="w-full lg:w-1/2 h-auto md:border border-blue-300 rounded-2xl px-5 sm:px-20 py-5">
          <h1 className="text-3xl sm:text-4xl font-medium text-center mb-5">
            SignUp to ResumeHub
          </h1>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="input-field  "
              placeholder="FirstName"
              onChange={handleChange}
              name="firstName"
              value={formData.firstName || ""}
            />
            <input
              type="text"
              className="input-field  "
              placeholder="Lastname"
              onChange={handleChange}
              name="lastName"
              value={formData.lastName || ""}
            />
            <input
              type="text"
              className="input-field  "
              placeholder="Username"
              onChange={handleChange}
              name="userName"
              value={formData.userName || ""}
            />
            <input
              type="email"
              className="input-field  "
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={formData.email || ""}
            />
            <input
              type="text"
              className="input-field  "
              placeholder="Contact no."
              onChange={handleChange}
              name="contactNumber"
              value={formData.contactNumber || ""}
            />
            <input
              type="password"
              className="input-field  "
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={formData.password || ""}
            />
            <input
              type="password"
              className="input-field  "
              placeholder="Confirm Password"
              onChange={handleChange}
              name="confirmPassword"
              value={formData.confirmPassword || ""}
            />
            <button type="submit" className="submit-button hover:bg-blue-600">
              Continue
            </button>
          </form>
          <div className=" text-center">
            <p className=" my-8 w-full border-b leading-[.1em]">
              <span className=" bg-white px-2">or</span>
            </p>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-lg text-gray-600">Already have an account?</p>
            <a href="/login" className="text-blue-500 ml-2">
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
