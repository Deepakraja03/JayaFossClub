import React, { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Header from "./components/Header";
import DashNav from "./components/DashNav";
import { useRouter } from "next/navigation";

const events = [
  {
    id: 1,
    name: "Debugging",
    href: "#",
    imageSrc: "https://spotme.com/wp-content/uploads/2020/07/Hero-1.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    coordinator: "Emmaunel",
  },
];

const Dashboard: React.FC = () => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  console.log(authToken);
  useEffect(() => {
    // Check for token in local storage and update state
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("yourAuthToken"); // Replace with your storage key
      setAuthToken(token);
    }
  }, []);

  return (
    <>
      {authToken ? (
        <div className="min-h-full">
          <DashNav />

          <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Upcoming Events
              </h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl  sm:px-6 rounded-lg bg-gray-300 lg:px-8">
              <div className="lg:px-24 py-5">
                <div>
                  <p className="lg:text-3xl text-xl text-black text-left pb-5  font-bold "></p>
                  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8">
                    <div className="   grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                      {events.map((event) => (
                        <div
                          key={event.id}
                          className="group bg-gray-200 rounded-lg text-center relative"
                        >
                          <div className="  aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none   hover:cursor-none group-hover:opacity-75 lg:h-80">
                            <img
                              src={event.imageSrc}
                              alt={event.imageAlt}
                              className="h-full w-full  py-1 px-1 object-center lg:h-full lg:w-full"
                            />
                          </div>
                          <div className="my-2 ">
                            <div>
                              <h3 className="text-lg text-gray-700">
                                <a href={event.href}>
                                  <span
                                    aria-hidden="true"
                                    className="absolute inset-0"
                                  />
                                  {event.name}
                                </a>
                              </h3>
                              <p className="mt-1 text-md flex justify-center py-1 px-5  text-gray-800">
                                <span>Co-ordinator:</span>
                                <span>{event.coordinator}</span>
                              </p>
                            </div>
                            <button className="bg-blue-600 px-4 py-3 rounded-lg text-lg">
                              Register
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      ) : (
        <div className="mt-50">
          <p className="text-xl font-bold text-red-500 text-center">
            You Dont have an access to this page.
          </p>
        </div>
      )}
    </>
  );
};

export default Dashboard;
