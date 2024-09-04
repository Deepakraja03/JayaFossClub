import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Link from "next/link";
import Head from "next/head";

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
  const [showPastEvents, setShowPastEvents] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/events");
        const data = await response.json();
        setEvents(data);
        console.log("events:", events);
        
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const currentDate = new Date();

  // Filter events based on the date
  const upcomingEvents = events.filter(event => new Date(event.date) >= currentDate);
  const pastEvents = events.filter(event => new Date(event.date) < currentDate);

  return (
    <div>
      <Head>
        <title>Jaya Foss Club/MyEvents</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://jayafossclub.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage%205.654c4765.png&w=96&q=75"
        />
      </Head>
      <div className="bg-[url(../Assets/BG.png)] pb-20 bg-no-repeat bg-center bg-cover">
        <Header />
        <div className="relative isolate px-6 bg-[url(../Assets/BG.png)] lg:px-8">
          <div className="lg:px-24 pt-10 pb-10">
            <div>
              <p className="lg:text-6xl text-4xl text-gray-200 text-center pb-5 font-bold">
                Events
              </p>
              <div className="flex justify-end gap-2">
                <p
                  className={`px-2 rounded-full hover:cursor-pointer lg:text-lg text-base text-gray-200 text-center font-semibold ${
                    !showPastEvents ? "bg-gray-600" : "bg-white bg-opacity-20"
                  }`}
                  onClick={() => setShowPastEvents(false)}
                >
                  Upcoming Events
                </p>
                <p
                  className={`px-2 rounded-full hover:cursor-pointer lg:text-lg text-base text-gray-200 text-center font-semibold ${
                    showPastEvents ? "bg-gray-600" : "bg-white bg-opacity-20"
                  }`}
                  onClick={() => setShowPastEvents(true)}
                >
                  Past Events
                </p>
              </div>
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
                  {loading ? (
                    <div className="flex justify-center">
                      <div className="text-center text-white text-xl py-40 spinner">
                        Loading...
                      </div>
                    </div>
                  ) : (showPastEvents ? pastEvents : upcomingEvents).length === 0 ? (
                    <p className="text-center text-white text-xl py-40">
                      {showPastEvents ? "No Past Events." : "No Upcoming Events Created."}
                    </p>
                  ) : (
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                      {(showPastEvents ? pastEvents : upcomingEvents).map(event => (
                          <div
                            key={event.id}
                            className="group bg-gray-200 rounded-lg text-center relative"
                          >
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                              <img
                                src={`data:image/jpeg;base64,${event.picture}`}
                                alt={event.imageAlt}
                                className="h-full w-full hover:opacity-75 py-1 px-1 object-center lg:h-full lg:w-full"
                              />
                            </div>
                            <div className="my-2">
                              <div>
                                <h3 className="text-lg text-black">
                                  <a href={event.href}>
                                    <span />
                                    {event.eventName}
                                  </a>
                                </h3>
                                <p>
                                  Date: {new Date(event.date).toISOString().split("T")[0]}
                                </p>
                                <p className="text-md flex justify-center px-5 text-black">
                                  <span>Co-ordinator:</span>
                                  <span>{event.prize}</span>
                                </p>
                                <p className="text-md flex justify-center pb-2 px-5 text-black">
                                  <span>Entry Fee: </span>
                                  <span>
                                    {event.entryFee === 0 ? "Free" : `₹${event.entryFee}`}
                                  </span>
                                </p>
                              </div>
                              <div>
                                {showPastEvents ? "" : 
                                <Link href={event.description} target="_blank">
                                  <button className="bg-blue-600 px-4 py-1 rounded-lg text-lg">
                                    Register
                                  </button>
                                </Link>
                                }
                              </div>
                            </div>
                          </div>
                        ))
                      }
                  </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyEvents;