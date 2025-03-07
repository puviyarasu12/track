import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setTimeout(() => {
      let userRole = null;

      if (username === "admin" && password === "admin123") {
        userRole = "admin";
      } else if (username === "employee" && password === "emp123") {
        userRole = "employee";
      }

      if (userRole) {
        localStorage.setItem("userRole", userRole);
        navigate(`/${userRole}`);
      } else {
        setError("Invalid credentials! Please try again.");
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome back</h2>
        <p>Please enter your account details</p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label>Email</label>
            <input
              type="text"
              placeholder="Johndoe@gmail.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
      <label>Password</label>
      <div className="password-input">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="password-toggle"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>

          <div className="extra-options">
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="btn-signin" disabled={loading}>
            {loading ? "Logging in..." : "Sign in"}
          </button>
        </form>

        <div className="social-login">
        <button className="social-btn google">
  <FcGoogle size={24} />
</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
