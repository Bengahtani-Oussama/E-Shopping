import React from "react";
import Banner from "../../Components/Banner/Banner";
import FeaturedProduct from "../../Components/FeaturedProduct/FeaturedProduct";
import SliderGlo from "../../Components/Slider/SliderGlo";
import UseFetch from "../../Hooks/UseFetch";

const Home = () => {
  const { data, loading, error } = UseFetch(`/categories?populate=*`);
  // console.log("DATA categ : ", data);

  return (
    <div className="">
      <SliderGlo />
      <Banner />

      <div className="pb-5">
        <FeaturedProduct cat={data} type={"normal"} />
        <FeaturedProduct cat={data} type={"featured"} />
        <FeaturedProduct cat={data} />
        <FeaturedProduct cat={data} type={"trending"} />
      </div>
    </div>
  );
};

export default Home;
