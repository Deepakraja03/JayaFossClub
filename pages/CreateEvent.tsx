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

const Dashboard: React.FC = () => {
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
    </div>
  );
};

export default Dashboard;