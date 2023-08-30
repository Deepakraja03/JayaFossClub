"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import DashNav from "./components/DashNav";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const handleSubmit = async (e: any) => {
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
        toast.success("Event Created Successfully!");

        // Clear form fields or show success message
      } else {
        console.error("Error creating event");
        toast.error("Complete all fields!");
      }
    } catch (error) {
      console.error("Error creating event:", error);
      toast.error(`Error creating event: ${error}`);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const [authToken, setAuthToken] = useState<string | null>(null);
  console.log(authToken);
  useEffect(() => {
    // Check for token in local storage and update state
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("yourAuthToken"); // Replace with your storage key
      setAuthToken(token);
    }
  }, []);

  const [base64String, setBase64String] = useState("");

  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader?.result?.split(",")[1]; // Remove the 'data:image/jpeg;base64,' part
      setBase64String(base64);
      console.log(base64);

      // Update the formData state with the base64 string
      setFormData((prevData) => ({
        ...prevData,
        picture: base64,
      }));
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      {authToken ? (
        <>
          <div className="min-h-full">
            <DashNav />

            <header className="bg-white shadow">
              <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                  Create Event
                </h1>
              </div>
            </header>
            <main>
              <div className="md:mx-auto mx-5 px-4 max-w-7xl py-6 sm:px-6 rounded-lg  bg-gray-300 lg:px-8">
                <div className="lg:px-24  py-5">
                  <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Event Name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="eventName"
                            value={formData.eventName}
                            onChange={handleChange}
                            required
                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor="password"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Date
                          </label>
                        </div>
                        <div className="mt-2">
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Picture
                        </label>
                        <div className="mt-2">
                          <input
                            type="file" // Change from 'text' to 'file'
                            name="picture"
                            accept="image/*" // Optional: this will restrict uploads to image files
                            onChange={handleImageUpload}
                            required
                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Event Timing
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="timing"
                            value={formData.timing}
                            onChange={handleChange}
                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Co-Ordinator
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="prize"
                            value={formData.prize}
                            onChange={handleChange}
                            required
                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Entry Fee:
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="entryFee"
                            value={formData.entryFee}
                            onChange={handleChange}
                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Link to GForm
                        </label>
                        <div className="mt-2">
                          <input
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <button
                          type="submit"
                          onClick={handleSubmit}
                          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Create
                        </button>
                      </div>
                    </div>
                  </div>
                  <ToastContainer />
                </div>
              </div>
            </main>
          </div>
        </>
      ) : (
        <div className="mt-50">
          <p className="text-xl font-bold text-red-500 text-center">
            You Dont have an access to this page.
          </p>
        </div>
      )}
    </div>
  );
};

export default CreateEvent;
