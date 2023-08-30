import React from "react";
import Header from "./components/Header";

function Contact() {
  const people = [
    {
      name: "Maheshwaran",
      role: "Event Co-Ordinator",
      imageUrl:
        "https://media.licdn.com/dms/image/D5603AQHuWnRJRgRPhg/profile-displayphoto-shrink_100_100/0/1673365056152?e=1698883200&v=beta&t=hp-Fc3V7FBG81n0OGQYlwcnx9neRyY1sHX9oLmCyQPc",
      mobilenumber: "+887087045",
    },

    // More people...
  ];

  return (
    <div className="bg-[url(../Assets/BG.png)]  bg-no-repeat bg-center bg-cover">
      <Header />
      <div className="relative isolate px-6 pb-20 bg-[url(../Assets/BG.png)] lg:px-8">
        <div className="lg:px-24  pb-9">
          <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-20">
            <div className="space-y-12">
              <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                <h2 className="text-3xl font-bold text-gray-200 tracking-tight sm:text-4xl">
                  Meet our team
                </h2>
                <p className="text-xl text-gray-500"></p>
              </div>
              <ul
                role="list"
                className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
              >
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="space-y-6">
                      <img
                        className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                        src={person.imageUrl}
                        alt=""
                      />
                      <div className="space-y-2">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3>{person.name}</h3>
                          <p className="text-indigo-600">{person.role}</p>
                        </div>
                        <ul
                          role="list"
                          className="flex justify-center space-x-5"
                        >
                          <li>
                            <a href={`tel:${person.mobilenumber}`}>
                              {" "}
                              <p className="text-gray-200 bg-black p-2 rounded-xl hover:text-gray-500">
                                📞 {person.mobilenumber}
                              </p>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
