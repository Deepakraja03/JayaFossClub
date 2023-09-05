import React from "react";
import Header from "./components/Header";
import Head from "next/head";

function Contact() {
  const main = [
    {
      name: "Emmanuel",
      role: "Chief Head",
      imageUrl:
        "https://blogger.googleusercontent.com/img/a/AVvXsEjmclIF6ph1XLaNW_54gceBcvUmNHfQO-Mc4ORxnNGBTfBjHB-y1K5D8C2ZMXHBgGXId_LPMZ2wyIEtKuYX42Q3QD5Uy7c9wog5Yis-uB_tg6TZL65__sGONFsOmtnWcSUvq4MqYw9w5OQsNvtc0WEGoukG3O1q2LFqslkpMybrzXnedy7pytlF_s2kTzo",
      mobilenumber: "+917418421892",
    },
    {
      name: "Maheshwaran",
      role: "Co-Chief Head",
      imageUrl:
        "https://blogger.googleusercontent.com/img/a/AVvXsEifFlBmP90P1S033Hfy7aFKbXSHQ-xfsvghwvwRKjuOcqt9bVg2tIYYzqbmWP_pMtTyHk0uFuwEd8FouLBuG6xuHBN4ZvYCXc6auL9bJM1SKmAZTADls4x8DU2IyNWVi7PIXbmvAGhwjoDbxKZbihQnEpj1lL2IHytzFsYiVRZaTZZU05sUuTzVxneB-wA",
      mobilenumber: "+917904749633",
    },

    // More people...
  ];
  const people = [
    {
      name: "Thilagavathi V",
      role: "Open Tech Co-Ordinator",
      imageUrl:
        "https://blogger.googleusercontent.com/img/a/AVvXsEgtamlGyzDuvBK8GLIQ_YNHNOIQrenRpn18BLau7ZgkPD2s9IA05nWPkxtT36mRnLjplPhbzHH_6Y9g7Qa8VzTDXeXRW0AQeVqA-KGuCBT-DIXBhbmOrFNG1Z-GHduw2vofjoFcDxPykBKsWkrbCOq4RLJjHeqvwl0Qf0W7WZSYtndd4zVWEsFUFOP4Rp8",
      mobilenumber: "+919840137428",
    },
    {
      name: "Rishika S.V",
      role: "WHISPERS OF EVIDENCE Co-Ordinator",
      imageUrl:
        "https://blogger.googleusercontent.com/img/a/AVvXsEj4EhqLbkwC44723assY0HN5j_Ng3SNKsPlK22Ygyr3ZMy8Oc4oulZ2tm0wtutTlh3dTqMA7TOsX_s7VyC5dJIChAfAORqAAOYRLKpyrM5OIa5q_LZ3hGwCgRO9OPdYCH0nnNQ3wv7A2-UTbvt79JOyJs1yfyqmme3Tl8YVfc3aj4OeEh1nC5SUJHf3ECs",
      mobilenumber: "+918838461032",
    },
    {
      name: "Ganesh P",
      role: "Tech Trek Co-Ordinator",
      imageUrl:
        "https://blogger.googleusercontent.com/img/a/AVvXsEiZ9E9SHFugsG6GXdMUZ7H_vw3v_hxgzP4NJgi0ZTfrDo9pfly7l2_AcEsIm9hZGO2p01_heXJzmKj82HNhPk0tQ5-n-cgjt-scU5yVAPGE3XYcx5GMzR6Uvuf1EvSAJUPdD-dMm1PdvL4aIdGQbJ9erckttA0QVMhsK4eCYcv3ds0KkG_mvbKqKWhPFuM",
      mobilenumber: "+916383328121",
    },
    {
      name: "Krishna Prasad S",
      role: "Codeless Canvas Co-Ordinator",
      imageUrl:
        "https://blogger.googleusercontent.com/img/a/AVvXsEiO389hHD06k7gW_96l5cxBL7wn6j92EBnhaB1_57OLMMFd-1vJTZD-X9YnRXj5HdLBmk5pZrJsNUhSbShDG8bvArvPPo3EDKCOfDV62F4mYblCn19vUVQ5bqFnmzZEM2tzVn49wiVtkbCDAcZ7EnWX5CGeo5nTHYLu81NbTIT6W6erWa86mYu6BM7r5aw",
      mobilenumber: "+919701300474",
    },
    {
      name: "Kokila J",
      role: "Brain Wave Co-Ordinator",
      imageUrl:
        "https://blogger.googleusercontent.com/img/a/AVvXsEgKmjolCIvBibZs_2TtzU32F1xBzxk_s0SBsizhBQqIS0Wb4_Yl0keWDo3kQ6mrpsKbrBwsdBM2HAMye9dPSFj1QgWFa1NvMijv2jds36mVb9zq7jdlcscC6jjVKEgwAIP5lgZo9DXNBRtkzo5ObCiRp4nJ2u2uZS-q6S9yGvrSi0Fd8EWC7EBlzGrRzMQ",
      mobilenumber: "+918939324868",
    },
    {
      name: "Nagipragalathan N",
      role: "Code Quest Co-Ordinator",
      imageUrl:
        "https://media.licdn.com/dms/image/D4E03AQFFCSBIM0Jh_w/profile-displayphoto-shrink_800_800/0/1692806057424?e=1698883200&v=beta&t=TZT16vbvzj7ZdYQK_NUIjv0E_1mCpynyl_NDE0Hzvx0",
      mobilenumber: "+917401268091",
    },

    // More people...
  ];

  return (
    <div className="bg-[url(../Assets/BG.png)]  bg-no-repeat bg-center bg-cover">
      <Head>
        <title>Jaya Foss Club/Contact</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://jayafossclub.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage%205.654c4765.png&w=96&q=75"
        />
      </Head>
      <Header />
      <div className="relative isolate px-6 pb-20 bg-[url(../Assets/BG.png)] lg:px-8">
        <div className="lg:px-24  pb-9">
          <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-20">
            <div className="space-y-12 mb-10 ">
              <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                <h2 className="text-3xl font-bold text-gray-200 tracking-tight sm:text-4xl">
                  Main Co-ordinators
                </h2>
                <p className="text-xl text-gray-500"></p>
              </div>
              <ul
                role="list"
                className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-2 sm:space-y-0 lg:grid-cols-2 lg:mx-56"
              >
                {main.map((person) => (
                  <li key={person.name}>
                    <div className="space-y-6">
                      <img
                        className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                        src={person.imageUrl}
                        alt=""
                      />
                      <div className="space-y-2">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3 className="text-white">{person.name}</h3>
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
                          <h3 className="text-white">{person.name}</h3>
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
