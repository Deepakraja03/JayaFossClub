import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Link from "next/link";

interface Event {
  id: number;
  eventName: string;
  href: string;
  picture: string;
  imageAlt: string;
  date: string;
  prize: string;
  entryFee: number;
  description: string;
}

function MyEvents() {
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
  console.log(events);
  return (
    <div>
      <div className="bg-[url(../Assets/BG.png)] pb-20 bg-no-repeat bg-center bg-cover ">
        <Header />
        <div className="relative isolate px-6 bg-[url(../Assets/BG.png)] lg:px-8">
          <div className="lg:px-24 pt-10 pb-10">
            <div>
              <p className="lg:text-6xl text-4xl text-gray-200 text-center pb-5 font-bold ">
                Events
              </p>
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                  {events.length === 0 ? (
                    <p className="text-center text-white text-xl py-40">
                      No Upcoming Events Created.
                    </p>
                  ) : (
                    events.map((event) => (
                      <div
                        key={event.id}
                        className="group bg-gray-200 rounded-lg text-center relative"
                      >
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  lg:h-80">
                          <img
                            src={`data:image/jpeg;base64,${event.picture}`}
                            alt={event.imageAlt}
                            className="h-full w-full hover:opacity-75  py-1 px-1 object-center lg:h-full lg:w-full"
                          />
                        </div>
                        <div className="my-2 ">
                          <div>
                            <h3 className="text-lg text-black">
                              <a href={event.href}>
                                <span />
                                {event.eventName}
                              </a>
                            </h3>
                            <p>
                              Date:{" "}
                              {new Date(event.date).toISOString().split("T")[0]}
                            </p>

                            <p className=" text-md flex justify-center  px-5  text-black">
                              <span>Co-ordinator:</span>
                              <span>{event.prize}</span>
                            </p>
                            <p className=" text-md flex justify-center pb-2 px-5  text-black">
                              <span>Entry Fee: </span>
                              <span>
                                {event.entryFee == 0 ? (
                                  <>Free</>
                                ) : (
                                  <>₹{event.entryFee}</>
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
      </div>
    </div>
  );
}

export default MyEvents;
