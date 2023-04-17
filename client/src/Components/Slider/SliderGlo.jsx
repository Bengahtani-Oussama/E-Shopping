import React, { useState } from "react";
import { SliderImages } from "../../Utils/SliderImages";
import { Link } from "react-router-dom";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button } from "@mui/material";
import { CategoryPic } from "../../Utils/CategoryPic";

const sliderImg = SliderImages;
const CategoryImages = CategoryPic;
let count = 0;

const SliderGlo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //   useEffect(() => {
  //     startSlider();
  //   }, []);

  //   const startSlider = () => {
  //     setInterval(() => {
  //       handleNextClick();

  //     }, 3000);
  //   };

  const handleNextClick = () => {
    const sliderLength = sliderImg.length;

    count = (count + 1) % sliderLength;
    setCurrentIndex(count);
  };

  const handlePrevClick = () => {
    const sliderLength = sliderImg.length;

    count = (currentIndex + sliderLength - 1) % sliderLength;
    setCurrentIndex(count);
  };

  const handele = () => {
    console.log("asd :", currentIndex);
  };

  const [black, setblack] = useState(false);
  const showi = () => {
    setblack(!black);
  };
  const hid = () => {
    setblack(!black);
  };
  return (
    <div className=" mb-3 w-5/6 m-auto bg-white">
      <div className="slide h-[69vh] flex pt-2">
        <div className="slide box-border p-2 w-[211px] ">
          <Link to="#" className=" flex flex-col justify-between h-full">
            {CategoryImages.map((item, i) => (
              <p
                className="flex gap-2 text-[13px] uppercase hover:text-orange-500 duration-200"
                key={i}
                onMouseEnter={showi}
                onMouseLeave={hid}
              >
                <span className=" w-5 flex items-center justify-center">
                  <img className="" alt="" src={item.blackPic} />
                </span>
                <span className="">{item.cat}</span>
              </p>
            ))}
          </Link>
        </div>
        <div className="slide relative h-full flex-[3] bg-stone-500">
          <img
            key={sliderImg[currentIndex].id}
            src={sliderImg[currentIndex].pic}
            alt=""
            className="h-full w-full mix-blend-overlay"
          />
          <div className="absolute top-12 left-16">
            <p className="font-bold text-2xl text-white uppercase">
              {sliderImg[currentIndex].title}
            </p>
            <p className="absolute text-white uppercase top-24 text-4xl font-black w-72 after:content-[''] after:absolute after:w-1 after:bg-orange-500 after:h-full after:-left-3 after:top-0 ">
              {sliderImg[currentIndex].desc}
            </p>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "red",
                "&:hover": { backgroundColor: "black" },
              }}
              onClick={handele}
              className="absolute bottom-24 left-16"
            >
              Show Now
            </Button>
          </div>

          <div className="absolute flex items-center justify-between px-3 top-1/2 transform -translate-y-1/2 w-full">
            <button
              className="w-6 h-14 bg-orange-400 opacity-25 rounded hover:opacity-80 hover:bg-orange-500 duration-200"
              onClick={handlePrevClick}
            >
              <KeyboardArrowLeftIcon className="text-white" />
            </button>

            <button
              className="w-6 h-14 bg-orange-400 opacity-25 rounded hover:opacity-80 hover:bg-orange-500 duration-200"
              onClick={handleNextClick}
            >
              <KeyboardArrowRightIcon className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderGlo;

/**
 * 
 * Women's Fashion

Men's Fashion

Electronics/Motor

Accessories/Shoes

Beauty/Hair

Baby / Kids

Food

Household Supplies

Home/Kitchen

Sports/Outdoor

Health/Diet

Hobbies/KPOP

Computer/Digital

Smartphone & Tablets

Bags, Shoes & Accessories

Laptops & Accessories

Computers & Networking
 */
