import React, { useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PhoneIcon from "@mui/icons-material/Phone";
import ListIcon from "@mui/icons-material/List";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EuroIcon from "@mui/icons-material/Euro";
import CurrencyLiraIcon from "@mui/icons-material/CurrencyLira";

import { Link } from "react-router-dom";

import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Input from "@mui/joy/Input";

// image country
import img_en from "../../Assents/usa.png";
import img_ar from "../../Assents/dz.png";
import img_fr from "../../Assents/fr.png";
// Logo
import Logo from "../../Assents/LOGO.png";
import { Badge, Button } from "@mui/material";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Pay = [
  {
    img: <AttachMoneyIcon fontSize="small" />,
    val: "USD",
  },
  {
    img: <CurrencyLiraIcon fontSize="small" />,
    val: "DZ",
  },
  {
    img: <EuroIcon fontSize="small" />,
    val: "ERO",
  },
];

const langue = [
  {
    img: img_en,
    val: "EN",
  },
  {
    img: img_ar,
    val: "AR",
  },
  {
    img: img_fr,
    val: "FR",
  },
];

const afterCss =
  "relative after:content-[''] after:w-[1px] after:absolute after:-right-2 after:-top-1 after:h-[145%] after:bg-gray-300";

const NavBar = () => {
  const [showList, setShowList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const products = useSelector((state) => state.cart.products);

  return (
    <div className="NavBar bg-white">
      <div className="NavContainer w-5/6 m-auto">
        <div className="Nav-T flex justify-between items-center py-1">
          <div className="Nav-T-l">
            <p className="capitalize text-[14px]">
              welcome to{" "}
              <Link
                to="/"
                className="font-semibold text-[15px] cursor-pointer hover:text-orange-500 uppercase"
              >
                e-shop.com{" "}
              </Link>
              shopping online
            </p>
          </div>
          <div className="Nav-T-r">
            <ul className="text-[14px] cursor-pointer capitalize flex gap-3 items-center">
              <li className={`flex gap-2 ${afterCss}`}>
                <Link
                  to="/login"
                  className="text-orange-500 hover:text-gray-700 flex gap-1 duration-150"
                >
                  <span className="text-[18px] m-0 p-0 flex items-center">
                    <PersonOutlineIcon fontSize="inherit" />
                  </span>
                  login
                </Link>
                <p className="cursor-auto">Or</p>
                <Link
                  to="/register"
                  className="text-orange-500 hover:text-gray-700 duration-150"
                >
                  register
                </Link>
              </li>
              <li className={`hover:text-orange-500 duration-150 ${afterCss}`}>
                <Link to="/pages/about">about us</Link>
              </li>
              <li className={`hover:text-orange-500 duration-150 ${afterCss}`}>
                <Link to="/pages/help">help</Link>
              </li>
              <li className={`hover:text-orange-500 duration-150 ${afterCss}`}>
                <Link to="/pages/faqs">FAQs</Link>
              </li>
              <li>
                <Select
                  defaultValue="EN"
                  color="neutral"
                  variant="plain"
                  className="w-16 m-0 h-6"
                  size="small"
                >
                  {langue.map((item) => (
                    <Option key={item.val} value={item.val}>
                      <ListItemDecorator>
                        <img className="h-4 mx-1" alt="" src={item.img} />
                        <span>{item.val}</span>
                      </ListItemDecorator>
                    </Option>
                  ))}
                </Select>
              </li>
              <li>
                <Select
                  defaultValue="USD"
                  color="neutral"
                  variant="plain"
                  className="w-16 m-0 h-6"
                  size="small"
                >
                  {Pay.map((item, i) => (
                    <Option
                      sx={{
                        backgroundColor: "#FFF",
                      }}
                      className="text-[15px]"
                      key={i}
                      value={item.val}
                    >
                      <ListItemDecorator className="text-[15px]">
                        {item.img}
                        <span>{item.val}</span>
                      </ListItemDecorator>
                    </Option>
                  ))}
                </Select>
              </li>
            </ul>
          </div>
        </div>
        <p className="relative before:content-[''] before:absolute before:w-[98.5vw] before:h-[1px] before:bg-slate-300 before:-left-[220px]  "></p>
        <div className="Nav-C flex justify-between items-center h-32">
          <div className="NavB-c-l flex-1 h-full flex items-center">
            <img alt="Logo" src={Logo} className="h-[80%]" />
          </div>
          <div className="NavB-c-c flex-[3]">
            <Input
              className="w-[80%] m-auto"
              style={{
                border: "1px solid orange",
              }}
              color="orange"
              startDecorator={<SearchIcon />}
              endDecorator={
                <div className="flex">
                  <Select
                    // className="-my-3"
                    variant="plain"
                    defaultValue="dollar"
                    sx={{
                      border: 0,
                    }}
                    size="sm"
                  >
                    <Option
                      variant="plain"
                      value="dollar"
                      style={{
                        marginBlock: "-5px",
                      }}
                    >
                      <ListItemDecorator>
                        <p className="text-[14px]">Check Category</p>
                      </ListItemDecorator>
                    </Option>
                    <Option
                      variant="plain"
                      value="dollar"
                      style={{
                        marginBlock: "-5px",
                      }}
                    >
                      <ListItemDecorator>
                        <p className="text-[14px] ">Check Category</p>
                      </ListItemDecorator>
                    </Option>
                  </Select>
                  <Button style={{ color: "orange" }}>Search</Button>
                </div>
              }
            />
          </div>
          <div className="NavB-c-r flex flex-[2] h-full items-center">
            <div className=" flex flex-[70%] items-center">
              <PhoneIcon
                className="border border-gray-700 rounded-full p-2 mr-3"
                sx={{ fontSize: "45px" }}
              />
              <div className="text-base">
                <p className="font-medium text-sm ">Need help? Call us now:</p>
                <p className="font-medium text-sm text-orange-500 hover:text-gray-700 cursor-pointer">
                  (+01) 123 456 789
                </p>
              </div>
            </div>
            <div className="flex-[30%] flex gap-2 justify-end">
              <Badge
                badgeContent={products.length}
                showZero
                color="warning"
                sx={{
                  "& .MuiBadge-badge": {
                    right: 5,
                    top: 5,
                    padding: "0 6px",
                  },
                }}
              >
                <Link to="#" onClick={() => setShowCart(!showCart)}>
                  <ShoppingCartOutlinedIcon
                    badge="1"
                    className="hover:text-orange-500 duration-200"
                    sx={{ fontSize: "35px" }}
                  />
                </Link>
                {showCart && <Cart />}
              </Badge>
              <Badge
                badgeContent={1}
                color="warning"
                sx={{
                  "& .MuiBadge-badge": {
                    right: 5,
                    top: 5,
                    padding: "0 6px",
                  },
                }}
              >
                <Link to="#">
                  <FavoriteBorderOutlinedIcon
                    className="hover:text-orange-500 duration-200"
                    sx={{ fontSize: "35px" }}
                  />
                </Link>
              </Badge>
            </div>
          </div>
        </div>
        <div className=" Nav-B flex border-b-2 border-orange-500 ">
          <ul className="flex gap-4 uppercase items-center font-medium">
            <li className=" relative flex justify-between items-center bg-orange-500 text-white py-1 pr-[115px] pl-2 text-[15px]">
              <p>categories</p>
              <ListIcon className="absolute right-1" />
            </li>
            <li className="hover:text-orange-500 duration-300">home</li>
            <li className="relative ">
              <p
                onMouseEnter={() => setShowList(true)}
                className="hover:text-orange-500 duration-300 inline-block"
              >
                all collections
                {/*/**************************************************************************/}
                <KeyboardArrowDownIcon />
              </p>
              {showList && (
                <div
                  onMouseLeave={() => setShowList(false)}
                  className="absolute z-10 bg-white border-[1px] border-orange-100 p-1 top-8 w-full"
                >
                  <ul className="flex flex-col gap-1">
                    <Link
                      className="hover:text-orange-500 duration-300"
                      to="/products/1"
                    >
                      Men's
                    </Link>
                    <Link
                      className="hover:text-orange-500 duration-300"
                      to="/products/2"
                    >
                      Women
                    </Link>
                    <Link
                      className="hover:text-orange-500 duration-300"
                      to="/products/3"
                    >
                      Children
                    </Link>
                  </ul>
                </div>
              )}
            </li>
            <li className="hover:text-orange-500 duration-300">for you</li>
            <li className="hover:text-orange-500 duration-300">
              Offers
              <KeyboardArrowDownIcon />
            </li>
            <li className="hover:text-orange-500 duration-300">
              Black Friday sales
              <KeyboardArrowDownIcon />
            </li>
            <li className="hover:text-orange-500 duration-300">
              pages
              <KeyboardArrowDownIcon />
            </li>
            <li className="hover:text-orange-500 duration-300">
              blog
              <KeyboardArrowDownIcon />
            </li>
            <li className="hover:text-orange-500 duration-300">contact us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
