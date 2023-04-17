import React from "react";

import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import { KEYWORDS } from "../../Utils/Keywords";
import { Link } from "react-router-dom";

// img payment
import pay from "../../Assents/payment.png";

const afterCss =
  "relative after:content-[''] after:w-[1px] after:absolute after:-right-2 after:-top-1 after:h-[100%] after:bg-gray-300";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="footer bg-white border-t-[2px] border-t-orange-500"
    >
      <div className="cont-footer w-5/6 m-auto mt-6">
        <div className="top-footer flex justify-between gap-1 flex-wrap">
          <div className={`f-1 min-w-[150px] text-center flex-1 ${afterCss}`}>
            <LocalShippingTwoToneIcon
              className="text-orange-500 mb-4"
              sx={{ fontSize: "60px" }}
            />
            <h3 className="text-sm font-bold">Free Delivery</h3>
            <p className="text-sm ">
              Free shipping throughout Europe and the US
            </p>
          </div>
          <div className={`f-2 min-w-[150px] text-center flex-1 ${afterCss}`}>
            <SecurityOutlinedIcon
              className="text-orange-500 mb-4"
              sx={{ fontSize: "60px" }}
            />
            <h3 className="text-sm font-bold">Safe Payment</h3>
            <p className="text-sm ">
              Pay with the world’s most popular and secure payment methods.
            </p>
          </div>
          <div className={`f-2 min-w-[150px] text-center flex-1 ${afterCss}`}>
            <HeadsetMicOutlinedIcon
              className="text-orange-500 mb-4"
              sx={{ fontSize: "60px" }}
            />
            <h3 className="text-sm font-bold">24/7 Help Center</h3>
            <p className="text-sm ">
              Round-the-clock assistance for a smooth shopping experience.
            </p>
          </div>
          <div className="f-4 min-w-[150px] text-center flex-1">
            <CurrencyExchangeOutlinedIcon
              className="text-orange-500 mb-4"
              sx={{ fontSize: "60px" }}
            />
            <h3 className="text-sm font-bold">30 Days Return</h3>
            <p className="text-sm pl-[6px]">
              30 days return policy if you’re not satisfied with products &
              services
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F1F2F4] pb-6">
        <div className="cont-footer w-5/6 m-auto mt-10">
          <div className="cnt-footer flex gap-20 pt-10 mb-10">
            <div className="w-[180px]">
              <p className="text-lg font-semibold mb-2">Stores Location</p>
              <ul className="flex flex-col gap-1">
                <Link
                  className="hover:text-orange-500 hover:pl-1 duration-200"
                  to="#"
                >
                  About Us
                </Link>
                <Link
                  className="hover:text-orange-500 hover:pl-1 duration-200"
                  to="#"
                >
                  Refund Policy
                </Link>
                <Link
                  className="hover:text-orange-500 hover:pl-1 duration-200"
                  to="#"
                >
                  Shipping Policy
                </Link>
                <Link
                  className="hover:text-orange-500 hover:pl-1 duration-200"
                  to="#"
                >
                  Privacy Policy
                </Link>
                <Link
                  className="hover:text-orange-500 hover:pl-1 duration-200"
                  to="#"
                >
                  Terms of Service
                </Link>
              </ul>
            </div>
            <div className="w-[180px]">
              <p className="text-lg font-semibold mb-2">Customer Service</p>
              <ul className="flex flex-col gap-1">
                <Link
                  className="hover:text-orange-500 hover:pl-1 duration-200"
                  to="#"
                >
                  FAQ’s
                </Link>
                <Link
                  className="hover:text-orange-500 hover:pl-1 duration-200"
                  to="#"
                >
                  Shipping Rates
                </Link>
                <Link
                  className="hover:text-orange-500 hover:pl-1 duration-200"
                  to="#"
                >
                  Orders & Returns
                </Link>
                <Link
                  className="hover:text-orange-500 hover:pl-1 duration-200"
                  to="#"
                >
                  International Shipping
                </Link>
                <Link
                  className="hover:text-orange-500 hover:pl-1 duration-200"
                  to="#"
                >
                  Safe & Guarantee
                </Link>
              </ul>
            </div>
            <div className="w-[180px]">
              <p className="text-lg font-semibold mb-2"> My Account</p>
              <ul className="flex flex-col gap-1">
                <Link
                  className="hover:text-orange-500 hover:pl-1 duration-200"
                  to="#"
                >
                  Login/Register
                </Link>
                <Link
                  className="hover:text-orange-500 hover:pl-1 duration-200"
                  to="#"
                >
                  Order Status
                </Link>
                <Link
                  className="hover:text-orange-500 hover:pl-1 duration-200"
                  to="#"
                >
                  Payment Methods
                </Link>
                <Link
                  className="hover:text-orange-500 hover:pl-1 duration-200"
                  to="#"
                >
                  Gift Vouchers
                </Link>
                <Link
                  className="hover:text-orange-500 hover:pl-1 duration-200"
                  to="#"
                >
                  Specials
                </Link>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <ul className="flex gap-4 mb-3">
              <Link className="hover:text-orange-500 duration-200" to="#">
                Terms of Use
              </Link>
              <Link className="hover:text-orange-500 duration-200" to="#">
                Privacy Policy
              </Link>
              <Link className="hover:text-orange-500 duration-200" to="#">
                Advanced Search
              </Link>
              <Link className="hover:text-orange-500 duration-200" to="#">
                Site Map
              </Link>
              <Link className="hover:text-orange-500 duration-200" to="#">
                Information
              </Link>
            </ul>
            <p>
              Copyright © 2023
              <big className="text-orange-500 font-semibold">
                {" "}
                @OUSSAMA_BENGAHTANI
              </big>{" "}
            </p>
            <img className="h-16 mix-blend-multiply" alt="payment" src={pay} />
          </div>
          <h3 className="font-bold mb-1">KEYWORDS :</h3>
          <div className="but-footer mt-2 flex flex-wrap gap-2 ">
            {KEYWORDS.map((item, i) => (
              <p
                className="text-sm hover:text-orange-500 duration-200 cursor-pointer"
                key={i}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
