import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Link } from "react-router-dom";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.price * item.quantity));
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51McuG0KNUM5teJfRIbqWQHnXTL99LqCjGruku2xu4BrDMlVcZmMMGD78ImrEAUvyIODfi392eG0tMp2c2i2XZiKx00CZKBNBq3"
  );
  // const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post("/orders", {
        products,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="absolute -right-36 top-10 w-[400px] shadow-lg bg-white border-[1px] border-orange-100 p-3 z-30">
      {products.length === 0 ? (
        "Your cart is empty"
      ) : (
        <>
          {products.map((item) => (
            <div
              className="flex my-2 border-b border-b-slate-400"
              key={item.id}
            >
              <div className="flex-[1.5] flex items-center justify-center">
                <img
                  className="w-4/5 h-4/5"
                  alt={item.title}
                  src={process.env.REACT_APP_UPLOAD_URL + item.img}
                />
              </div>
              <div className="flex-[3] pb-3">
                <div className="flex gap-2">
                  <p>{item.brand}</p>
                </div>
                <p>{item.title}</p>
                <div className="flex gap-3">
                  {item?.oldPrice && (
                    <p className="text-red-600 line-through">
                      ${item.oldPrice}
                    </p>
                  )}
                  <p>${item.price}</p>
                </div>
                <div className="flex gap-2 items-center w-max">
                  <p className="text-xs">Quantity : {item.quantity}</p>
                  <Rating value={item?.rating} readOnly precision={0.2} />
                  <FavoriteBorderOutlinedIcon
                    className="hover:text-orange-500 duration-200 cursor-pointer"
                    sx={{ fontSize: "25px" }}
                  />
                </div>
              </div>
              <div className="flex-[0.5]">
                <DeleteForeverOutlinedIcon
                  onClick={() => {
                    dispatch(removeItem(item.id));
                  }}
                  className="cursor-pointer hover:text-orange-500 duration-200"
                />
              </div>
            </div>
          ))}
        </>
      )}
      <div className="border-b border-b-slate-400 flex justify-between items-center px-2 pb-2">
        <p className="font-medium">Total Price</p>
        <p className="font-semibold text-lg">${totalPrice()}</p>
      </div>
      <div className="flex gap-3 py-2 justify-center">
        <Link
          to="/products/cart"
          className="flex items-center justify-center py-1 w-[150px] border-[1px] bg-orange-500 text-white border-orange-500 hover:bg-white hover:text-black duration-200"
        >
          VIEW CART
        </Link>
        <button
          onClick={handlePayment}
          className="flex items-center justify-center py-1 w-[150px] border-[1px] bg-orange-500 text-white border-orange-500 hover:bg-white hover:text-black duration-200"
        >
          CHECK OUT
        </button>
      </div>
      <p
        onClick={() => {
          dispatch(resetCart());
        }}
        className="text-sm text-red-600 cursor-pointer"
      >
        Clear Cart
      </p>
    </div>
  );
};

export default Cart;
