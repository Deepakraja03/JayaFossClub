import React, { useEffect, useState } from "react";
import DashNav from "./components/DashNav";
import Link from "next/link";

interface Event {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  coordinator: string;
  date: string;
  prize: string;
  entryFee: number;
  description: string;
}

const Dashboard: React.FC = () => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/events");
        const data = await response.json();
        setEvents(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
            <div className="mx-auto max-w-7xl sm:px-6 rounded-lg bg-gray-300 lg:px-8">
              <div className="lg:px-24 py-5">
                <div>
                  <p className="lg:text-3xl text-xl text-black text-left pb-5 font-bold"></p>
                  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                      {events.length === 0 ? (
                        <p className="text-center">
                          No Upcoming Events Created.
                        </p>
                      ) : (
                        events.map((event) => (
                          <div
                            key={event?.id}
                            className="group bg-gray-200 rounded-lg text-center relative"
                          >
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  lg:h-80">
                              <img
                                src={`data:image/jpeg;base64,${event.imageSrc}`}
                                alt={event?.imageAlt}
                                className="h-full w-full hover:opacity-75 py-1 px-1 object-center lg:h-full lg:w-full"
                              />
                            </div>
                            <div className="my-2 ">
                              <div>
                                <h3 className="text-lg text-black">
                                  <a href={event.href}>
                                    <span />
                                    {event.name}
                                  </a>
                                </h3>
                                <p>
                                  Date:{" "}
                                  {
                                    new Date(event.date)
                                      .toISOString()
                                      .split("T")[0]
                                  }
                                </p>

                                <p className=" text-md flex justify-center px-5 text-black">
                                  <span>Co-ordinator:</span>
                                  <span>{event.coordinator}</span>
                                </p>
                                <p className=" text-md flex justify-center pb-2 px-5 text-black">
                                  <span>Entry Fee: </span>
                                  <span>
                                    {event.entryFee === 0 ? (
                                      <>Free</>
                                    ) : (
                                      <>{event.entryFee}</>
                                    )}
                                  </span>
                                </p>
                              </div>
                              <Link href={event.description} target="_blank">
                                <button className="bg-blue-600 px-4 py-3 rounded-lg text-lg">
                                  Register
                                </button>
                              </Link>
                            </div>
                          </div>
                        ))
                      )}
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
            You Don&apos;t have access to this page.
          </p>
        </div>
      )}
    </>
  );
};

export default Dashboard;
