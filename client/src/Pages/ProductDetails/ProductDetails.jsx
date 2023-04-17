import React, { useEffect, useState } from "react";
import "./ProductDetails.scss";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Link, useParams } from "react-router-dom";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Rating } from "@mui/material";
import UseFetch from "../../Hooks/UseFetch";
import { makeRequest } from "../../makeRequest";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const ProductDetails = () => {
  const id = useParams().id;
  const [quantity, setQuantity] = useState(1);
  const [picstures, setPicstures] = useState([]);
  const [product, setProduct] = useState([]);
  // console.log("PRODUCTS : => ", product);

  const dispatch = useDispatch();

  const { data, loading, error } = UseFetch(`/products/${id}?populate=*`);
  // console.log("DATA PRODUCTS", data?.attributes);

  useEffect(() => {
    const get_Data = async () => {
      if (data === null) {
        const res = await makeRequest.get(`/products/${id}?populate=*`);
        setProduct(res?.data?.data?.attributes);
        setPicstures(res?.data?.data?.attributes?.images?.data);
        // console.log("RESPONCE : ", res?.data?.data?.attributes?.images?.data);
      }
    };
    get_Data();
    // console.log("picstures : ", picstures);
    // console.log("product : ", product);
  }, []);

  const images = picstures?.map((item) => ({
    original: process.env.REACT_APP_UPLOAD_URL + item.attributes.url,
    thumbnail: process.env.REACT_APP_UPLOAD_URL + item.attributes.url,
    originalClass: "original",
    thumbnailClass: "thumb",
  }));
  // console.log("DATA IM", images);

  return (
    <div className="mt-3">
      <div className="productContainer bg-white w-5/6 m-auto flex h">
        {loading ? (
          "Is Loading ...!"
        ) : (
          <div className="left w-[55%]">
            <div className="imgBox">
              <ImageGallery
                autoPlay="true"
                showThumbnails="true"
                showBullets="true"
                showIndex="true"
                items={images}
                sizes="small"
                showFullscreenButton=""
                showPlayButton=""
                showNav=""
                thumbnailPosition="bottom"
                // slide on hover
                slideOnThumbnailOver="true"
              />
            </div>
          </div>
        )}
        {loading ? (
          "Is Loading ...!"
        ) : (
          <div className="right w-[45%] p-7">
            <div className="itemDetl w-full flex flex-col gap-5">
              <h2 className="text-3xl font-medium">{product?.title}</h2>
              <div className="price flex gap-3">
                {product?.oldprice && (
                  <span className="old-price text-xl font-medium line-through text-red-500">
                    ${product?.oldprice}
                  </span>
                )}
                <span className="new-price text-xl font-medium">
                  ${product?.price}
                </span>
              </div>
              <div className="review flex items-center gap-3">
                {product?.rating && (
                  <Rating
                    value={product?.rating}
                    readOnly
                    precision={0.2}
                    // onChange={ha}
                  />
                )}
                <a
                  href="#o"
                  className="text-orange-500 hover:underline font-medium"
                >
                  Write a Review
                </a>
              </div>
              <div className="nbItem border-[1px] border-black flex items-center justify-around w-[300px]">
                <button
                  className="text-2xl w-12 hover:text-orange-500 duration-200"
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                {quantity}
                <button
                  className="text-2xl w-12 hover:text-orange-500 duration-200"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
              <div className="buy flex flex-col gap-3">
                <div className="flex ">
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: data.id,
                          rating: product?.rating,
                          title: product?.title,
                          desc: product?.desc,
                          price: product?.price,
                          img: product?.img_1.data.attributes.url,
                          quantity,
                          total: product?.price * quantity,
                        })
                      )
                    }
                    className="flex items-center gap-2 py-2 w-[150px] border-[1px] bg-orange-500 text-white border-orange-500 hover:bg-white hover:text-black duration-200"
                  >
                    <AddShoppingCartIcon className="pl-2" />
                    <span className="text-center">Add to cart</span>
                  </button>
                  <button className="flex items-center gap-2 py-2 w-[150px] border-[1px] bg-orange-500 text-white border-orange-500 hover:bg-white hover:text-black duration-200">
                    <FavoriteBorderIcon className="pl-2" />
                    <span className="text-center">Add to wishlist</span>
                  </button>
                </div>
                <button className="flex items-center gap-2 py-2 w-[300px] border-[1px] border-orange-500  text-black hover:bg-orange-500 hover:text-white duration-200">
                  <LocalAtmIcon className="pl-2" />
                  <span className="text-center">Buy it now</span>
                </button>
              </div>
              <div className="ask"></div>
              <div className="desc">
                <p className="font-medium text-lg text-gray-500">
                  Description :
                  <span className="block font-normal text-sm text-justify">
                    {product?.desc}
                  </span>{" "}
                </p>
                <p className="font-medium text-lg text-gray-500">
                  Details :
                  <span className="block font-normal text-sm text-justify">
                    {product?.details}
                  </span>{" "}
                </p>
              </div>

              <div id="o" className="share flex flex-col gap-2">
                <p>Share :</p>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 py-2 w-[120px] border-[1px] bg-blue-800 text-white">
                    <FacebookIcon className="pl-2" />
                    <span className="text-center">Facebook</span>
                  </button>
                  <button className="flex items-center gap-2 py-2 w-[120px] border-[1px] bg-sky-400 text-white">
                    <TwitterIcon className="pl-2" />
                    <span className="text-center">Twitter</span>
                  </button>
                  <button className="flex items-center gap-2 py-2 w-[120px] border-[1px] bg-red-700 text-white">
                    <PinterestIcon className="pl-2" />
                    <span className="text-center">Pinterest</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
