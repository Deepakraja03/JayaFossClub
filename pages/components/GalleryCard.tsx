import Link from "next/link";
import React, { useState } from "react";

interface Profile {
  name: string;
  year: string;
  image: string;
  link: string;
}

const GalleryCard = ({ name, year, image, link }: Profile) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="profile-card-container">
      <div
        className="profile-card relative"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <div>
          <img src={image} className="h-[280px]" alt="Profile" />
        </div>
        {isHovered ? (
          <div className="profile-card__hover-details text-center absolute top-0 left-0 bg-gray-100 text-gray-800 py-4 px-6 w-full h-full flex flex-col justify-center">
            <Link href={link}>
              <p>To View the Gallery</p>
              <button className="bg-blue-600 p-2 mt-5 rounded-lg text-xl">
                Click here
              </button>
            </Link>
          </div>
        ) : (
          <div className="profile-card__footer bg-white p-4">
            <div className="profile-card__name text-center text-lg font-bold">
              {name}
            </div>
            <div className="profile-card__email text-sm text-center font-medium">
              {year}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryCard;
