import { Rating } from "@mui/material";
import "./Card.css";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link
      to={`/product/${item.id}`}
      className="flex-1 rounded-lg shadow-md shadow-orange-500/40 h-[350px] max-w-[200px]"
    >
      <div className="flex flex-col items-center justify-between h-full">
        <div className="card-header flex-[0.7] flex items-center text-center">
          <p className="text-sm">{item.attributes.title}</p>
        </div>
        <div className="imgCont flex-[2] relative overflow-hidden card-image w-full">
          {item?.attributes.isNew && (
            <span className="absolute bg-orange-400 z-[100] text-[10px] p-[2px] top-1">
              New Season
            </span>
          )}
          <div className="flex justify-center items-start ">
            <img
              className="pic-1 z-[1] absolute w-[90%] h-[90%]"
              alt=""
              src={
                process.env.REACT_APP_UPLOAD_URL +
                item.attributes.img_1.data.attributes.url
              }
            />
            <img
              className="pic-2 absolute w-[90%] h-[90%]"
              alt=""
              src={
                process.env.REACT_APP_UPLOAD_URL +
                item.attributes.img_2.data.attributes.url
              }
            />
          </div>
        </div>
        <div className="card-footer flex-1 p-2 flex flex-col justify-end">
          <p className="text-xs text-center">
            {item.attributes.desc.slice(0, 40)}
          </p>
          <div className=" flex items-center justify-center gap-5">
            {item?.attributes.oldprice ? (
              <p className="line-through text-sm text-gray-700">
                ${item.attributes.oldprice}
              </p>
            ) : (
              ""
            )}
            <p className="">${item.attributes.price}</p>
          </div>
          <div className=" flex items-center justify-center ">
            <Rating
              value={item.attributes.rating}
              readOnly
              precision={0.2}
              // onChange={ha}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
