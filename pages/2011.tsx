import React from "react";
import Header from "./components/Header";
import GalleryCard from "./components/GalleryCard";
import Clip1 from "../Assets/gallery/2011/2011_1.jpg";
import Clip2 from "../Assets/gallery/2011/2011_2.jpg";
import Clip3 from "../Assets/gallery/2011/2011_3.jpg";
import Clip4 from "../Assets/gallery/2011/2011_4.jpg";
import Clip5 from "../Assets/gallery/2011/2011_5.jpg";
import Clip6 from "../Assets/gallery/2011/2011_6.jpg";
import Clip7 from "../Assets/gallery/2011/2011_7.jpg";
import Clip8 from "../Assets/gallery/2011/2011_8.jpg";
import Clip9 from "../Assets/gallery/2011/2011_9.jpg";
import Clip10 from "../Assets/gallery/2011/2011_10.jpg";
import Clip11 from "../Assets/gallery/2011/2011_11.jpg";
import Clip12 from "../Assets/gallery/2011/2011_12.jpg";
import Clip13 from "../Assets/gallery/2011/2011_13.jpg";
import Clip14 from "../Assets/gallery/2011/2011_14.jpg";
import Clip15 from "../Assets/gallery/2011/2011_15.jpg";
import Clip16 from "../Assets/gallery/2011/2011_16.jpg";
import Clip17 from "../Assets/gallery/2011/2011_17.jpg";
import Clip18 from "../Assets/gallery/2011/2011_18.jpg";

import Image from "next/image";

function Gallery() {
  return (
    <div className="bg-[url(../Assets/BG.png)]  pb-20 bg-no-repeat bg-center bg-cover ">
      <Header />
      <div className="relative isolate px-6 bg-[url(../Assets/BG.png)] lg:px-8">
        <div className="lg:px-24 pt-10 pb-10">
          <div className="px-24  pb-10">
            <div className="grid  grid-cols-2 md:grid-cols-3 gap-4">
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
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={Clip13}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={Clip14}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={Clip15}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={Clip16}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={Clip17}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={Clip18}
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
