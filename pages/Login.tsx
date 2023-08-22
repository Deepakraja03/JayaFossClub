import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/auth/login", {
        username,
        password,
      });

      // Assuming the API returns a token in the response
      const token = response.data.token;

      // Store the token in localStorage
      localStorage.setItem("yourAuthToken", token); // Replace with your storage key

      // Redirect the user to a protected page
      window.location.href = "/Dashboard"; // Redirect to your protected page
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
