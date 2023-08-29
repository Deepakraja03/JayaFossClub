"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

interface FormData {
  eventName: string;
  date: string;
  picture: string;
  timing: string;
  prize: string;
  entryFee: string;
  description: string;
}

const CreateEvent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    eventName: "",
    date: "",
    picture: "",
    timing: "",
    prize: "",
    entryFee: "",
    description: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Event created successfully");
        // Clear form fields or show success message
      } else {
        console.error("Error creating event");
      }
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const [authToken, setAuthToken] = useState<string | null>(null);

  useEffect(() => {
    // Check for token in local storage and update state
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("yourAuthToken"); // Replace with your storage key
      setAuthToken(token);
    }
  }, []);
  return (
    <div>
      {authToken ? (
        <>
          <h2>Create Event</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Event Name:
              <input
                type="text"
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Date:
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Picture URL:
              <input
                type="text"
                name="picture"
                value={formData.picture}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Timing:
              <input
                type="text"
                name="timing"
                value={formData.timing}
                onChange={handleChange}
              />
            </label>
            <label>
              Prize:
              <input
                type="text"
                name="prize"
                value={formData.prize}
                onChange={handleChange}
              />
            </label>
            <label>
              Entry Fee:
              <input
                type="number"
                name="entryFee"
                value={formData.entryFee}
                onChange={handleChange}
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Create Event</button>
          </form>
        </>
      ) : (
        <div>
          <p>You need to be logged in to create an event.</p>
        </div>
      )}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
