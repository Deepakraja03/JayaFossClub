// components/EventForm.js
import React, { useState } from "react";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    date: "",
    picture: "",
    timing: "",
    prize: "",
    entryFee: "",
    description: "",
  });

  const handleSubmit = async (e) => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const authToken = localStorage.getItem("yourAuthToken"); // Replace with your storage key

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
          {" "}
          <p>You need to be logged in to create an event.</p>
        </div>
      )}
    </div>
  );
};

// Wrap the EventForm component with the withAuth higher-order component
export default Dashboard;
