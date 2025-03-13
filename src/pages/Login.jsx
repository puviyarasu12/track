import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!password) newErrors.password = "Password is required";
    if (password.length < 6) newErrors.password = "Password must be at least 6 characters";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [username, password]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setLoading(true);
    setError("");
    
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
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
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav className="login-nav">
        <div className="logo">TrackZone</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/help-support">Help</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
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
              {errors.username && <div className="error-message">{errors.username}</div>}
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
              {errors.password && <div className="error-message">{errors.password}</div>}
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
        </div>
      </div>
    </>
  );
};

export default Login;
