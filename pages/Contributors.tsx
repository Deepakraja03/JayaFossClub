import React from "react";
import Header from "./components/Header";
import Head from "next/head";
import Counter from "./components/Counter";

interface Contributor {
  name: string;
  Image: string;
  description: string;
}

function Contributors() {
  const contributors: Contributor[] = [
    {
      name: "Nagipragalathan N",
      Image:
        "https://media.licdn.com/dms/image/D4E03AQFFCSBIM0Jh_w/profile-displayphoto-shrink_800_800/0/1692806057424?e=1698883200&v=beta&t=TZT16vbvzj7ZdYQK_NUIjv0E_1mCpynyl_NDE0Hzvx0",
      description:
        "Introducing DJOptima, your Django project's ultimate wingman, built to simplify deployment, especially for Vercel hosting. EnigmaShield, a Python module that acts as your code's guardian, encrypting it all, even runtime values. Elevate your terminal game with TerminalDesigner, a Python package for dynamic text-based designs. And don't forget pylowcode, the user-friendly website testing hero with JSON scripting and various report formats. Meet the brain behind this magic, NagriPragalathan N! 🚀💻🦸‍♂️ ",
    },
    {
      name: "Thilagavathi V",
      Image:
        "https://blogger.googleusercontent.com/img/a/AVvXsEgtamlGyzDuvBK8GLIQ_YNHNOIQrenRpn18BLau7ZgkPD2s9IA05nWPkxtT36mRnLjplPhbzHH_6Y9g7Qa8VzTDXeXRW0AQeVqA-KGuCBT-DIXBhbmOrFNG1Z-GHduw2vofjoFcDxPykBKsWkrbCOq4RLJjHeqvwl0Qf0W7WZSYtndd4zVWEsFUFOP4Rp8",
      description:
        "I've dished out articles on GFG to break down TensorFlow concepts and introduce the world to Power BI dashboards. Not to mention, I've rustled up datasets on Kaggle, all about tablet names and the diseases they tackle. But that's not all – I've also whipped up some handy notebooks on Kaggle to back up the data science squad in their learning and exploration. The name behind these adventures? None other than Thilagavathi V! 🚀 My mission is all about spreading knowledge and boosting the tech and data science community. Let's grow together! 🌱💡",
    },
    {
      name: "Naveen G",
      Image:
        "https://blogger.googleusercontent.com/img/a/AVvXsEgXnmV0-KHoHtTMHaTrpZRAddtWm7kdw9FrVWPxgS_oEcXFJrDGKrtnB67GTI_q-KOPAoLCVOyYX8y4KiFpwElApJTT_T8RG1jTkZiPQ1rC5aXjZgrPfzxyBCW0JqXu7Hm_ipjDtw8kNbEVtUt0MNzrAxb-dnxiISsluxVkQKgzQ9UMia_xAmKh8P4eFTA",
      description:
        "Take a look at My creations: **auto-reports-sql**, your go-to for hassle-free SQL report generation with a dash of user-friendly customization. Then there's **nuxt-prisma**, a magical fusion of Prisma and Nuxt.js for super-efficient development. And let's not forget **nuxt-countup**, sprinkling dynamic counters with a side of customization to spice up your web content. These unassuming projects are the real deal, making your tasks easier, workflows smoother, and web experiences richer. Dive into the world of Naveen G, the creative mind behind these gems! 🪄✨",
    },
    {
      name: "Rishika SV",
      Image:
        "https://blogger.googleusercontent.com/img/a/AVvXsEj4EhqLbkwC44723assY0HN5j_Ng3SNKsPlK22Ygyr3ZMy8Oc4oulZ2tm0wtutTlh3dTqMA7TOsX_s7VyC5dJIChAfAORqAAOYRLKpyrM5OIa5q_LZ3hGwCgRO9OPdYCH0nnNQ3wv7A2-UTbvt79JOyJs1yfyqmme3Tl8YVfc3aj4OeEh1nC5SUJHf3ECs",
      description:
        "During GSSOC 23, I proudly ranked among the top 200 contributors out of approximately 1500 participants, thanks to my dedicated work on Pluto-UI and Love-Simple-UI. For Pluto-UI, I meticulously optimized the checkout process, refined UI elements, and developed a comprehensive design system, elevating the user experience. In Love-Simple-UI, I led a team in establishing a design system centered on simplicity and sophistication. These contributions have left a lasting impact, and I'm grateful for the opportunity to have played a role in enhancing user experiences. Meet the powerhouse behind these efforts, Rishika SV! 🌟🚀",
    },
    {
      name: "Ganesh P",
      Image:
        "https://blogger.googleusercontent.com/img/a/AVvXsEiZ9E9SHFugsG6GXdMUZ7H_vw3v_hxgzP4NJgi0ZTfrDo9pfly7l2_AcEsIm9hZGO2p01_heXJzmKj82HNhPk0tQ5-n-cgjt-scU5yVAPGE3XYcx5GMzR6Uvuf1EvSAJUPdD-dMm1PdvL4aIdGQbJ9erckttA0QVMhsK4eCYcv3ds0KkG_mvbKqKWhPFuM",
      description:
        "Neo Locker, the Document Verification System, is your digital fortress powered by blockchain and IPFS tech. With a user-friendly interface, it keeps your documents safe, sound, and time-stamped. I'm Ganesh P, a dedicated contributor, here to enhance Neo Locker's features, code quality, and user experience for a thriving community of passionate developers. Join us in the quest for secure, accessible document management! 🔒🚀",
    },
    {
      name: "Karthik S",
      Image:
        "https://blogger.googleusercontent.com/img/a/AVvXsEiYA7nOpUnwkhQkxNZPtjRHtKKH5n6ZDW09uvv-ZnrDept9wgBG8IE31yUQlWJrZLrkqR8sTJbGf8i4YFdb6AFYbX7dRnGUltDk9WQlLXzhSOxDMI1EnK2dnDMEgQQFoJWyc1h4R33FpYBo1pNwhXPuLTXgu8ltPzLDMQmZckxVnFFICzs1PSLcoAvizSg",
      description:
        "Meet the Crowdfunding DApp, powered by blockchain tech (Ethereum or Binance Smart Chain), enabling decentralized fundraising, transparency, and global reach. Funds are locked securely in smart contracts, with public transactions. Customizable campaigns, community governance, and applications in startup funding, charity, creative projects, product development, real estate investment, and political campaigns. Karthik S leads the charge! 🚀🌐🤝",
    },
  ];

  return (
    <div>
      <div className="bg-[url(../Assets/BG.png)] pb-20 bg-no-repeat bg-center bg-cover ">
        <Head>
          <title>Jaya Foss Club/Contributors</title>
          <link
            rel="icon"
            type="image/x-icon"
            href="https://jayafossclub.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage%205.654c4765.png&w=96&q=75"
          />
        </Head>
        <Header />
        <div className="relative isolate px-6 bg-[url(../Assets/BG.png)] lg:px-8">
          <div className="lg:px-24 pt-10 pb-10">
            <section className="">
              <div className="text-4xl lg:text-5xl  lg:pt-20 text-center text-white ">
                <p className="font-bold">
                  {" "}
                  Join the Open Source Revolution: Become a Contributor
                </p>
                <p className="text-center text-white lg:text-xl text-lg pt-5 lg:mx-[200px]">
                  Here, we celebrate the generous individuals and organizations
                  who are making Software Freedom Day possible. Your support
                  fuels our mission to promote open-source software and digital
                  freedom. Join our Software Freedom Heroes and make a
                  difference today. #SoftwareFreedomHeroes
                </p>
                <div className="flex lg:flex-row font-bold flex-col justify-center mt-10 space-y-4 lg:space-y-0 lg:space-x-20 text-center">
                  <Counter endValue={50} label="Developers" />
                  <Counter endValue={45} label="Open Source Contributors" />
                  <Counter endValue={2} label="Entrepreneurs" />
                </div>
              </div>
              <div>
                <p className="text-center text-white lg:text-5xl text-4xl my-14 font-bold">
                  Meet Our Top Contributors
                </p>
              </div>
              {contributors.map((person, index) => (
                <div
                  key={index}
                  className="gap-5 bg-white mb-8 rounded-lg dark:bg-gray-900 items-center py-8 mt-4 px-4 mx-auto max-w-screen-xl lg:grid lg:order-2 lg:grid-cols-2 lg:py-5 lg:px-6"
                >
                  <>
                    <div className="grid mt-2">
                      <img
                        className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                        src={person.Image}
                        alt={`office content ${index + 1}`}
                      />
                      <p className="mt-4 w-full text-gray-200 font-semibold text-lg text-center rounded-lg">
                        {person.name}
                      </p>
                    </div>
                    <div className=" text-gray-200 mt-2 lg:mt-0 px-1 sm:text-lg dark:text-gray-200">
                      <p className="mb-4">{person.description}</p>
                    </div>
                  </>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contributors;
