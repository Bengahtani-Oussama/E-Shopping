import React from "react";
import { Link } from "react-router-dom";
import { BanerImg } from "../../Utils/BanerImg";

const bannerPic = BanerImg;

const Banner = () => {
  return (
    <div className="banner mb-4">
      <div className="banner-container h-[25vh] w-5/6 m-auto flex gap-4">
        {bannerPic.map((item, i) => (
          <div key={i} className="banner-L overflow-hidden flex-1">
            <Link className="" to="#">
              <img
                className="w-full h-full object-fill hover:scale-[1.01] duration-150"
                src={item}
                alt="banner"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
