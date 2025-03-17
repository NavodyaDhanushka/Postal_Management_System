import { useState } from "react";
import {useNavigate} from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
    const response = await fetch("http://127.0.0.1:8010/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email, // Change if your backend expects `username`
        password: password,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Login successful!");
      localStorage.setItem("token", data.access_token); // Store token\
         navigate("/reception");
    } else {
      setError(data.detail || "Login failed. Please try again.");
    }
  } catch (err) {
    setError("Something went wrong. Please try again.");
  }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8010/admin/register", { // Replace with your backend registration endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Registration successful! Please log in.");
        setIsLogin(true); // Switch to the login view after successful registration
      } else {
        setError(data.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "2rem",
          backgroundColor: "white",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "0.5rem",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
          <span style={{ fontSize: "2rem", fontWeight: "600", color: "#4B5563" }}>📩</span>
        </div>
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.25rem",
            fontWeight: "600",
            color: "#2D3748",
          }}
        >
          Postal Management System (PMC) - CP
        </h2>
        <p style={{ textAlign: "center", color: "#6B7280", marginBottom: "1rem" }}>
          {isLogin ? "Admin Authentication Portal" : "Admin Registration"}
        </p>
        <div style={{ display: "flex", borderBottom: "1px solid #E5E7EB", marginBottom: "1rem" }}>
          <button
            style={{
              width: "50%",
              padding: "0.5rem",
              textAlign: "center",
              fontWeight: "500",
              borderBottom: isLogin ? "2px solid #4B5563" : "none",
              color: isLogin ? "#4B5563" : "#9CA3AF",
            }}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            style={{
              width: "50%",
              padding: "0.5rem",
              textAlign: "center",
              fontWeight: "500",
              borderBottom: !isLogin ? "2px solid #4B5563" : "none",
              color: !isLogin ? "#4B5563" : "#9CA3AF",
            }}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>
        <form>
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid #D1D5DB",
                borderRadius: "0.375rem",
                marginBottom: "0.75rem",
              }}
            />
          )}
          <input
            type="email"
            placeholder="Admin Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #D1D5DB",
              borderRadius: "0.375rem",
              marginBottom: "0.75rem",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #D1D5DB",
              borderRadius: "0.375rem",
              marginBottom: "0.75rem",
            }}
          />
          {isLogin && (
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem", marginBottom: "0.75rem" }}>
              <label style={{ display: "flex", alignItems: "center" }}>
                <input type="checkbox" style={{ marginRight: "0.25rem" }} /> Remember me
              </label>
              <a href="#" style={{ color: "#3182CE" }}>Forgot password?</a>
            </div>
          )}
          <button
            style={{
              width: "100%",
              backgroundColor: "#4B5563",
              color: "white",
              padding: "0.75rem",
              borderRadius: "0.375rem",
              border: "none",
              cursor: "pointer",
            }}
            onClick={isLogin ? handleLogin : handleRegister}
          >
            {isLogin ? "Login" : "Register Account"}
          </button>
        </form>
        {error && (
          <p style={{ color: "red", textAlign: "center", marginTop: "1rem" }}>
            {error}
          </p>
        )}
        <p style={{ textAlign: "center", fontSize: "0.875rem", marginTop: "1rem" }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            style={{ color: "#3182CE" }}
          >
            {isLogin ? "Register" : "Sign in"}
          </button>
        </p>
        <p style={{ textAlign: "center", fontSize: "0.75rem", color: "#6B7280", marginTop: "1rem" }}>
          © 2025 PMC. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
