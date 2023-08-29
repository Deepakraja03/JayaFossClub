import React from "react";
import Header from "./components/Header";

function MyEvents() {
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
  return (
    <div>
      <div className="bg-[url(../Assets/BG.png)] pb-20 bg-no-repeat bg-center bg-cover ">
        <Header />
        <div className="relative isolate px-6 bg-[url(../Assets/BG.png)] lg:px-8">
          <div className="lg:px-24 pt-10 pb-10">
            <div>
              <p className="lg:text-6xl text-4xl text-gray-200 text-center pb-5  font-bold ">
                Events
              </p>
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
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
      </div>
    </div>
  );
}

export default MyEvents;
