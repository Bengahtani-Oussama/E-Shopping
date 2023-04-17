import { Rating } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { Link } from "react-router-dom";

const ProductsInCart = () => {
  const products = useSelector((state) => state.cart.products);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  console.log(products);

  const totalPrice = (p, q) => {
    let total = 0;
    products.forEach((item) => (total = p * q));
    return total.toFixed(2);
  };
  const total = (p, q) => {
    let total = 0;
    products.forEach((item) => (total += item.total));
    return total.toFixed(2);
  };
  return (
    <div>
      <div className="containerCart w-5/6 m-auto bg-white">
        {products.length === 0 ? (
          "Your cart is empty"
        ) : (
          <div className="flex py-3 ">
            <table className="w-full">
              <thead className="bg-orange-300">
                <tr className="py-1">
                  <th className="">PRODUCT</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>TOTAL</th>
                  <th>REMOVE</th>
                </tr>
              </thead>
              {products.map((item) => (
                <tbody className=" border-b border-b-slate-400" key={item.id}>
                  <tr className="">
                    <td className="flex gap-4">
                      <div className="itemImage w-[40%] flex justify-center py-3">
                        <img
                          className="h-32 w-3h-32"
                          alt={item.title}
                          src={process.env.REACT_APP_UPLOAD_URL + item.img}
                        />
                      </div>
                      <div className="itemTitle w-[60%] flex flex-col gap-2 justify-center">
                        <p className="font-semibold">{item.title}</p>
                        <div className="flex gap-2 items-center w-max">
                          <p className="text-xs">Quantity : {item.quantity}</p>
                          <Rating
                            value={item?.rating}
                            readOnly
                            precision={0.2}
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="price text-center">
                        <p className="font-medium">${item.price}</p>
                      </div>
                    </td>
                    <td className="">
                      <div className="quantity flex w-full justify-center">
                        <div className="nbItem border-[1px] border-black flex items-center justify-around w-[150px]">
                          <button
                            className="text-2xl w-12 hover:text-orange-500 duration-200"
                            onClick={() =>
                              setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                            }
                          >
                            -
                          </button>
                          {item?.quantity}
                          <button
                            className="text-2xl w-12 hover:text-orange-500 duration-200"
                            onClick={() => setQuantity((prev) => prev + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="total text-center">
                        <p className="font-medium">
                          ${totalPrice(item.price, item.quantity)}
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="remove text-center">
                        <DeleteForeverOutlinedIcon
                          onClick={() => {
                            dispatch(removeItem(item.id));
                          }}
                          className="cursor-pointer hover:text-orange-500 duration-200"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
              <tfoot>
                <tr>
                  <td>
                    <div>
                      <div className="border-b border-b-slate-400 flex justify-between items-center px-2 py-2 w-full">
                        <p className="font-medium">Total Price</p>
                        <p className="font-semibold text-lg">${total()}</p>
                      </div>
                      <div className="flex gap-3 py-2 justify-center">
                        <Link
                          to="/"
                          className="flex items-center justify-center py-1 px-4 border-[1px] bg-orange-500 text-white border-orange-500 hover:bg-white hover:text-black duration-200"
                        >
                          CONTINUE SHOPPING
                        </Link>
                        <Link
                          to="#"
                          className="flex items-center justify-center py-1 w-[150px] border-[1px] bg-orange-500 text-white border-orange-500 hover:bg-white hover:text-black duration-200"
                        >
                          CHECK OUT
                        </Link>
                        <p
                          onClick={() => {
                            dispatch(resetCart());
                          }}
                          className="flex items-center justify-center cursor-pointer py-1 w-[150px] border-[1px] bg-orange-500 text-white border-orange-500 hover:bg-white hover:text-black duration-200"
                        >
                          CLEAR ALL
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsInCart;
