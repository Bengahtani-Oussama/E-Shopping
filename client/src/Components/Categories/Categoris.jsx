import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

const Categoris = ({ cat }) => {
  return (
    <div className="category rounded-lg shadow-md shadow-orange-500/40 flex-1 h-[350px] max-w-[200px] py-3">
      <div className="">
        <div className="cat-header flex items-center justify-center p-1">
          <p className="uppercase text-center font-medium hover:text-orange-500 duration-200 cursor-pointer">
            <Link to={`/products/${cat.id}`}>{cat.attributes.catTitle}</Link>
          </p>
        </div>
        <div className="cat-center flex items-center justify-center p-1 h-32">
          <div className="img">
            <img
              alt={cat.attributes.catTitle}
              src={
                process.env.REACT_APP_UPLOAD_URL +
                cat.attributes.catImg.data.attributes.url
              }
              className="w-24 h-24 rounded-full border-[1px] p-[1px] border-transparent hover:border-[1px] hover:border-orange-500 hover:duration-200"
            />
          </div>
        </div>
        <div className="cat-btm flex items-center justify-center">
          <div className="categories flex flex-col text-center gap-1 text-sm">
            {cat.attributes.sub_categories.data.map((item) => (
              <p
                key={item.id}
                className="hover:text-orange-500 duration-200 cursor-pointer"
              >
                <Link to={`/products/${item.id}`}>
                  {item.attributes.subCatTitle}
                </Link>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categoris;
