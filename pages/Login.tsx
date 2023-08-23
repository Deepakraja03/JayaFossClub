"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Image from "next/image";
import fosslogo from "../Assets/image 5.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Only run this effect after initial render (componentDidMount in class components)
    if (token) {
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
    <div className="bg-[url(../Assets/BG.png)]  bg-no-repeat bg-center bg-cover">
      <Header />
      <div className="relative isolate px-6 pb-20 bg-[url(../Assets/BG.png)] lg:px-8">
        <div className="lg:px-24 pt-10 pb-9">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <Image
                className="mx-auto h-16 p-2 mt-5 w-auto"
                src={fosslogo}
                alt="Your Company"
              />
              <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
                Login to your account
              </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-200"
                  >
                    UserName
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      className="block px-2 text-lg w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-200"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      required
                      className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    onClick={handleLogin}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
