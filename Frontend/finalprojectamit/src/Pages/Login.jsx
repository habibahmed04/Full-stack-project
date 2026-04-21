import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css"; // Create this CSS file for styling
import api from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState ({
    email: "",
    password: "",
    rememberMe: false,
  });
 const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await api.post("/login", {
      email: formData.email,
      password: formData.password,
    });

    // Save token

    localStorage.setItem("token", response.data.token);

    // Save user (optional but useful)
    localStorage.setItem("user", JSON.stringify(response.data.user));

    alert("Login successful!");

    // Redirect based on role
    if (response.data.user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/profile");
    }
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message || "Login failed");
    } else {
      alert("Server error");
    }
  }
};


  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back to Bistro Bliss</h2>
        <p className="auth-subtitle">Sign in to your account to continue</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="auth-button">
            Sign In
          </button>
        </form>

        <div className="auth-divider">
          <span>Or continue with</span>
        </div>

        <div className="social-login">
          <button className="social-button google-button">
            <i className="fab fa-google"></i>
            Google
          </button>
          <button className="social-button facebook-button">
            <i className="fab fa-facebook-f"></i>
            Facebook
          </button>
        </div>

        <p className="auth-footer">
          Don't have an account?{" "}
          <Link to="/register" className="auth-link">
            Sign up here
          </Link>
        </p>

        <div className="back-home">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
