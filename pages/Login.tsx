"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Only run this effect after initial render (componentDidMount in class components)
    if (typeof window !== "undefined" && token) {
      localStorage.setItem("yourAuthToken", token);
      window.location.href = "/Dashboard"; // Redirect to your protected page
    }
  }, [token]); // This effect depends on the 'token' state

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/auth/login", {
        username,
        password,
      });

      // Assuming the API returns a token in the response
      const receivedToken = response.data.token;

      // Update the token state
      setToken(receivedToken);
    } catch (error) {
      console.error(error);
      // Handle login error
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
