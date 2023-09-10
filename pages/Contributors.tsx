import React from "react";
import Header from "./components/Header";
import Head from "next/head";

function Contributors() {
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
            <section className="bg-white dark:bg-gray-900">
              <div className="text-5xl pt-20 text-center text-white font-bold">
                Make a Difference with
                <br /> Your Donation
                <p className="text-center text-white text-lg pt-5 lg:mx-[200px]">
                  Here, we celebrate the generous individuals and organizations
                  who are making Software Freedom Day possible. Your support
                  fuels our mission to promote open-source software and digital
                  freedom. Join our Software Freedom Heroes and make a
                  difference today. #SoftwareFreedomHeroes
                </p>
                <div className="flex justify-center mt-10 space-x-20 text-center">
                  <div className="flex  justify-center flex-col">
                    <p>73M+</p>
                    <p className="text-xl text-gray-600 font-normal pt-2">
                      Developers
                    </p>
                  </div>
                  <div>
                    <p>1B+</p>
                    <p className="text-xl font-normal text-gray-600 pt-2">
                      Contributors
                    </p>
                  </div>
                  <div>
                    <p>4M+</p>
                    <p className="text-xl text-gray-700 font-normal pt-2">
                      Organizations
                    </p>
                  </div>
                </div>
              </div>
              <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:order-2 lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <img
                    className="w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                    alt="office content 1"
                  />
                  <img
                    className="mt-4 w-full lg:mt-10 rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                    alt="office content 2"
                  />
                </div>
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    We didn&apos;t reinvent the wheel
                  </h2>
                  <p className="mb-4">
                    We are strategists, designers and developers. Innovators and
                    problem solvers. Small enough to be simple and quick, but
                    big enough to deliver the scope you want at the pace you
                    need. Small enough to be simple and quick, but big enough to
                    deliver the scope you want at the pace you need.
                  </p>
                  <p>
                    We are strategists, designers and developers. Innovators and
                    problem solvers. Small enough to be simple and quick.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contributors;
