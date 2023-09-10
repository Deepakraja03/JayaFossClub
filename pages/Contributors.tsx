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
          <div className="lg:px-24 pt-10 pb-10"></div>
        </div>
      </div>
    </div>
  );
}

export default Contributors;
