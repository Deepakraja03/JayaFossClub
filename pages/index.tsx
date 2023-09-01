import Header from "./components/Header";
import Softwarlogo from "../Assets/image 9.png";
import Image from "next/image";
import { BsRocketTakeoff } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let softwareFreedomDay = new Date(`${currentYear}-09-16T00:00:00`);

      // If Software Freedom Day has already passed for this year, set it to next year
      if (now > softwareFreedomDay) {
        softwareFreedomDay = new Date(`${currentYear + 1}-09-16T00:00:00`);
      }

      const diffInSeconds = Math.floor(
        (softwareFreedomDay.getTime() - now.getTime()) / 1000
      );

      if (diffInSeconds <= 0) {
        clearInterval(intervalId);
        setTimeLeft("It's Software Freedom Day!");
        return;
      }

      const days = Math.floor(diffInSeconds / 86400);
      const hours = Math.floor((diffInSeconds % 86400) / 3600);
      const minutes = Math.floor((diffInSeconds % 3600) / 60);
      const seconds = diffInSeconds % 60;

      setTimeLeft(`${days} days ${hours} hrs ${minutes} min ${seconds} sec `);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const Personalities = [
    {
      id: 1,
      name: "Richard Stallman",
      description:
        "Richard Matthew Stallman, also known by his initials, rms, is an American free software movement activist and programmer. He campaigns for software to be distributed in such a manner that its users have the freedom to use, study, distribute, and modify that software.",

      imageSrc:
        "https://images.yourstory.com/cs/wordpress/2017/08/Richard-Stallman.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces",
      imageAlt: "",
    },
    {
      id: 2,
      name: "Linus Torvalds",
      description:
        "Linus Benedict Torvalds is a Finnish -American software engineer who is the creator and, historically, the main developer of the Linux kernel, used by Linux distributions and other operating systems such as Android. He also created the distributed version control system Git.",
      imageSrc: "https://www.jayafossclub.org/assets/linus.5e48d956.jpg",
      imageAlt: "",
    },
    {
      id: 3,
      name: "Guido Van Rossum",
      description:
        "Guido van Rossum is a Dutch programmer best known as the creator of the Python programming language, for which he was the benevolent dictator for life until he stepped down from the position on 12 July 2018",
      imageSrc: "https://www.jayafossclub.org/assets/gvr.4eb99bb4.jpeg",
      imageAlt: "",
    },
  ];
  return (
    <div className="bg-[url(../Assets/BG.png)] pb-20 bg-no-repeat bg-center bg-cover   ">
      <Header />
      <div className="relative isolate px-6 bg-[url(../Assets/BG.png)] lg:px-8">
        <div className="mx-auto  max-w-4xl  py-10 sm:pt-20 lg:pt-16">
          <div className="   sm:justify-center">
            <div className="relative rounded-full mx-24 lg:mx-96  text-center text-md font-bold leading-6 text-[#F2F4F8] ring-1 ring-[#FFFFFF4D] hover:ring-[#FFFFFF4D]">
              FOSSAGE&apos;23{" "}
            </div>
            <div className="flex justify-center">
              <Image src={Softwarlogo} alt="" />
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight  text-[#ECECEC] inset-x-0 top-50 z-100 sm:text-6xl">
              Jaya Foss Club <br /> “Software Freedom Day”
            </h1>
            <p className="mt-6 text-lg leading-8  text-gray-500">
              Jaya Engineering College Linux User Group (JECLUG) is a student
              governing body. It celebrates Software Freedom Day, a mega event
              in the eye of Free and Open Source Software encompassing 4000
              participants. We create awareness and importance of Free and Open
              Source Software among student and industry people.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="text-lg  leading-6 text-[#0B081C] px-6 py-2 rounded-3xl bg-[#ECECEC]">
                <span className="md:flex ">
                  <h1 className="">Countdown to Software Freedom Day &nbsp;</h1>
                  <h2>
                    {timeLeft}&nbsp;
                    <br />{" "}
                  </h2>{" "}
                </span>
                <a
                  href="https://www.softwarefreedomday.org/"
                  className=" underline"
                  target="_blank"
                >
                  Click Here
                </a>
              </button>
            </div>
          </div>
          <div className="text-center pt-16">
            <h1 className="text-4xl   tracking-tight  text-[#ECECEC] inset-x-0 top-50 z-100 sm:text-6xl">
              Philosophy
            </h1>
            <div className="mt-6 text-lg leading-8 text-gray-300 flex items-center justify-center">
              <BsRocketTakeoff className="h-4 w-auto" />
              <p className="ml-2">
                Sharing exact copies means redistributing the program without
                alterations.
              </p>
            </div>
            <div className="mt-6 text-lg leading-8 text-gray-300 flex items-center justify-center">
              <BsRocketTakeoff className="h-4 w-auto" />
              <p className="ml-2">
                Running the program involves executing the software to perform
                its intended functions.
              </p>
            </div>
            <div className="mt-6 text-lg leading-8 text-gray-300 flex items-center justify-center">
              <BsRocketTakeoff className="h-4 w-auto" />
              <p className="ml-2">
                Modifying the program in its source code form entails analyzing
                and editing its codebase.
              </p>
            </div>
            <div className="mt-6 text-lg leading-8 text-gray-300 flex items-center justify-center">
              <BsRocketTakeoff className="h-4 w-auto" />
              <p className="ml-2">
                Distributing modified versions refers to propagating variations
                of the program with changes.
              </p>
            </div>

            <p className="mt-6 text-lg leading-8 font-semibold text-gray-400">
              We create awareness and importance of Free and Open Source <br />
              Software among student and industry people.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://www.gnu.org/philosophy/philosophy.html"
                target="_blank"
              >
                <button className="text-lg  leading-6 text-[#0B081C] px-6 py-2 rounded-3xl bg-[#ECECEC]">
                  GNU
                </button>
              </a>
              <Link href="/Contact">
                <button className="text-lg  leading-6 text-[#ECECEC] border-[#ECECEC] border-2 px-6 py-2 rounded-3xl ">
                  Ping Us
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row text-center justify-center lg:space-x-20   text-white">
          <div>
            <p className="text-5xl font-semibold py-10">Invitation</p>
            <img
              className="rounded-3xl colored-shadow lg:h-[800px] lg:w-[750px] h-auto w-auto"
              src="https://www.jayafossclub.org/assets/poster_mobile.3e2abd60.jpg"
              alt=""
            />
          </div>
          <div>
            <p className="text-5xl font-semibold py-10">Event Schedule</p>

            <div className="border-[#222545] rounded-lg p-10 colored-shadow ">
              <table className="min-w-full ">
                <thead>
                  <tr>
                    <th className="border-b lg:px-5 lg:py-5">Event</th>
                    <th className="border-b px-1 lg:px-5 lg:py-5">Timing</th>
                    <th className="border-b lg:px-5 lg:py-5">Venue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b lg:px-5 lg:py-5">Inaugration</td>
                    <td className="border-b  lg:px-5 lg:py-5">
                      5:00 PM - 8:00 PM
                    </td>
                    <td className="border-b lg:px-5 lg:py-5">Seminar Hall</td>
                  </tr>
                  <tr>
                    <td className="border-b lg:px-5 lg:py-5">
                      Demo Stall/Expo
                    </td>
                    <td className="border-b lg:px-5 lg:py-2">
                      9:00 AM - 4:00 PM
                    </td>
                    <td className="border-b lg:px-5 lg:py-2">Meeting Room A</td>
                  </tr>
                  <tr>
                    <td className="border-b lg:px-5 lg:py-5">Code Test</td>
                    <td className="border-b lg:px-5 lg:py-2">
                      1:00 PM - 3:00 PM
                    </td>
                    <td className="border-b lg:px-5 lg:py-2">2nd floor</td>
                  </tr>
                  <tr>
                    <td className="border-b lg:px-5 lg:py-5">Quiz</td>
                    <td className="border-b lg:px-5 lg:py-2">
                      1:00 PM - 3:00 PM
                    </td>
                    <td className="border-b lg:px-5 lg:py-2">2nd floor</td>
                  </tr>
                  <tr>
                    <td className="border-b lg:px-5 lg:py-5">Short Film</td>
                    <td className="border-b lg:px-5 lg:py-2">
                      1:00 PM - 3:00 PM
                    </td>
                    <td className="border-b lg:px-5 lg:py-2">2nd floor</td>
                  </tr>
                  <tr>
                    <td className="border-b lg:px-5 lg:py-2">
                      Connecting Thoughts
                    </td>
                    <td className="border-b lg:px-5 lg:py-2">
                      1:00 PM - 3:00 PM
                    </td>
                    <td className="border-b lg:px-5 lg:py-2">2nd floor</td>
                  </tr>
                  <tr>
                    <td>Debate</td>
                    <td>6:00 PM - 9:00 PM</td>
                    <td>2nd floor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <p className="text-5xl  font-semibold pt-20 pb-10 text-gray-400 text-center">
            {" "}
            Great Personalities
          </p>
          <div className="grid grid-cols-1 gap-y-4  sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-20 lg:px-16 text-center">
            {Personalities.map((personality) => (
              <div
                key={personality.id}
                className="group relative colored-shadow bg-[#250c2c]  rounded-lg flex flex-col overflow-hidden"
              >
                <div className="aspect-w-3 aspect-h-4 bg-[#250c2c] group-hover:opacity-75 sm:aspect-none sm:h-96">
                  <img
                    src={personality.imageSrc}
                    alt={personality.imageAlt}
                    className="w-full h-full p-10 object-center object-cover sm:w-full sm:h-full"
                  />
                </div>
                <div className="flex-1 p-4 space-y-2 flex flex-col">
                  <h3 className=" text-white text-2xl font-semibold">
                    {personality.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {personality.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
