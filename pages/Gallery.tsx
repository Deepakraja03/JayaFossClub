import React from "react";
import Header from "./components/Header";
import GalleryCard from "./components/GalleryCard";

function Gallery() {
  const profiles = [
    {
      name: "Software Freedom Day",
      year: "2023",
      image:
        "https://www.jayafossclub.org/assets/front_cover%202009.3b072908.jpg",
      link: "2023",
    },
    {
      name: "Software Freedom Day",
      year: "2022",
      image:
        "https://www.jayafossclub.org/assets/front_cover%202022.eabf10c2.jpg",
      link: "2022",
    },
    {
      name: "Software Freedom Day",
      year: "2020",
      image:
        "https://www.jayafossclub.org/assets/front_cover%202020.49acf4f0.jpg",
      link: "2020",
    },
    {
      name: "Software Freedom Day",
      year: "2014",
      image:
        "https://www.jayafossclub.org/assets/front_cover%202014.70f44b03.jpg",
      link: "2014",
    },
  ];
  const latestgallery = [
    {
      name: "Software Freedom Day",
      year: "2011",
      image:
        "https://www.jayafossclub.org/assets/front_cover%202011.a83c2043.jpg",
      link: "2011",
    },
    {
      name: "Software Freedom Day",
      year: "2010",
      image:
        "https://www.jayafossclub.org/assets/front_cover%202010.66a5931c.jpg",
      link: "2010",
    },
    {
      name: "Software Freedom Day",
      year: "2009",
      image:
        "https://www.jayafossclub.org/assets/front_cover%202009.3b072908.jpg",
      link: "2009",
    },
  ];

  return (
    <div className="bg-[url(../Assets/BG.png)] pb-20 bg-no-repeat bg-center bg-cover   ">
      <Header />
      <div className="relative isolate px-6 bg-[url(../Assets/BG.png)] lg:px-8">
        <div className="lg:px-24 pt-10 pb-10">
          <div>
            <p className="lg:text-6xl text-4xl text-gray-200 text-center pb-10  font-bold ">
              Gallery
            </p>
            <div className="md:flex pb-10   md:flex-row  gap-5">
              {/* <Slider {...settings}> */}
              {profiles.map((profile, index) => (
                <GalleryCard key={index} {...profile} />
              ))}

              {/* </Slider> */}
            </div>
            <div className="md:flex  md:flex-row  gap-5">
              {latestgallery.map((profile, index) => (
                <GalleryCard key={index} {...profile} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
