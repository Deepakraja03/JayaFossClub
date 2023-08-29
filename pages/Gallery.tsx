import React from "react";
import Header from "./components/Header";
import GalleryCard from "./components/GalleryCard";
import F2009 from "../Assets/gallery/2009/front_cover 2009.jpg";
import F2010 from "../Assets/gallery/2010/front_cover 2010.jpg";
import F2011 from "../Assets/gallery/2011/front_cover 2011.jpg";
import F2014 from "../Assets/gallery/2014/front_cover 2014.jpg";
import F2020 from "../Assets/gallery/2020/front_cover 2020.jpg";
import F2022 from "../Assets/gallery/2022/front_cover 2022.jpg";
import F2023 from "../Assets/gallery/2022/front_cover 2022.jpg";

function Gallery() {
  const latestgallery = [
    {
      name: "Software Freedom Day",
      year: "2023",
      image: F2023,
      link: "2023",
    },
    {
      name: "Software Freedom Day",
      year: "2022",
      image: F2022,
      link: "2022",
    },
    {
      name: "Software Freedom Day",
      year: "2020",
      image: F2020,
      link: "2020",
    },
    {
      name: "Software Freedom Day",
      year: "2014",
      image: F2014,
      link: "2014",
    },
  ];
  const oldgallery = [
    {
      name: "Software Freedom Day",
      year: "2011",
      image: F2011,
      link: "2011",
    },
    {
      name: "Software Freedom Day",
      year: "2010",
      image: F2010,
      link: "2010",
    },
    {
      name: "Software Freedom Day",
      year: "2009",
      image: F2009,
      link: "2009",
    },
  ];

  return (
    <div className="bg-[url(../Assets/BG.png)] pb-20 bg-no-repeat bg-center bg-cover ">
      <Header />
      <div className="relative isolate px-6 bg-[url(../Assets/BG.png)] lg:px-8">
        <div className="lg:px-24 pt-10 pb-10">
          <div>
            <p className="lg:text-6xl text-4xl text-gray-200 text-center pb-10  font-bold ">
              Gallery
            </p>
            <div className="md:flex pb-10   md:flex-row  gap-5">
              {/* <Slider {...settings}> */}
              {latestgallery.map((profile, index) => (
                <GalleryCard key={index} {...profile} />
              ))}

              {/* </Slider> */}
            </div>
            <div className="md:flex  md:flex-row  gap-5">
              {oldgallery.map((profile, index) => (
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
