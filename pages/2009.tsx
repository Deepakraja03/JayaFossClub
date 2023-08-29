import React from "react";
import Header from "./components/Header";
import GalleryCard from "./components/GalleryCard";
import Clip1 from "../Assets/gallery/2009/2009 (1).jpg";
import Clip2 from "../Assets/gallery/2009/2009 (2).jpg";
import Clip3 from "../Assets/gallery/2009/2009 (3).jpg";
import Clip4 from "../Assets/gallery/2009/2009 (4).jpg";
import Clip5 from "../Assets/gallery/2009/2009 (5).jpg";
import Clip6 from "../Assets/gallery/2009/2009 (6).jpg";
import Clip7 from "../Assets/gallery/2009/2009 (7).jpg";
import Clip8 from "../Assets/gallery/2009/2009 (8).jpg";
import Clip9 from "../Assets/gallery/2009/2009 (9).jpg";
import Clip10 from "../Assets/gallery/2009/2009 (10).jpg";
import Clip11 from "../Assets/gallery/2009/2009 (11).jpg";
import Clip12 from "../Assets/gallery/2009/2009 (12).jpg";

import Image from "next/image";

function Gallery() {
  return (
    <div className="bg-[url(../Assets/BG.png)]  pb-20 bg-no-repeat bg-center bg-cover ">
      <Header />
      <div className="relative isolate px-6 bg-[url(../Assets/BG.png)] lg:px-8">
        <div className="lg:px-24 pt-10 pb-10">
          <div className="md:px-24  pb-10">
            <div className="md:grid sm:grid-cols-1 space-y-5 md:space-y-0 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={Clip1}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={Clip2}
                  alt=""
                />
              </div>

              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={Clip3}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={Clip4}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={Clip5}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={Clip6}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={Clip7}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={Clip8}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={Clip9}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={Clip10}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={Clip11}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={Clip12}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
