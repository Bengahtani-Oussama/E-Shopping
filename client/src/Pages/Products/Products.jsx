import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import { AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FakeProducts } from "../../Utils/FakeData";
import { Link, useParams } from "react-router-dom";
import { Carousel } from "react-carousel-minimal";
import List from "../../Components/ListProduct/List";
import UseFetch from "../../Hooks/UseFetch";

const size = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
  "XXXL",
  "2XL",
  "3XL",
  "4XL",
  "5XL",
  "6XL",
];
const Products = () => {
  // -----------------------------------
  const data_img = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco",
    },
    {
      image:
        "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling",
    },
  ];

  const catId = parseInt(useParams().catId);
  // MAX PRICE
  const [maxprice, setMaxPrice] = useState(2000);
  const [sort, setSort] = useState(null);
  const [selectedSubCat, setSelectedSubCat] = useState([]);
  const { data, loading, error } = UseFetch(
    `/sub-categories?populate=*&[filters][categories][id][$eq]=${catId}`
  );
  // console.log("DATA SUB CAT", data);

  const handleChange = (e) => {
    const val = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCat(
      isChecked
        ? [...selectedSubCat, val]
        : selectedSubCat.filter((item) => item !== val)
    );
  };

  return (
    <div className="Categories my-2">
      <div className="Cat-Container w-5/6 m-auto flex bg-white gap-5">
        <div className="Cat-left flex-1 ">
          <div className="sticky top-3">
            <Accordion className="category">
              <AccordionSummary
                sx={{
                  backgroundColor: "#D5AC4E",
                  maxHeight: 35,
                  minHeight: 5,
                  "&.Mui-expanded": {
                    maxHeight: 35,
                    minHeight: 5,
                  },
                }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="font-medium">Categories</p>
              </AccordionSummary>
              <AccordionDetails>
                {data?.map((cat) => (
                  <div key={cat.id} className="p-1 flex gap-2">
                    <input
                      type="checkbox"
                      value={cat.id}
                      id={cat.id}
                      className="accent-blue-700"
                      onChange={handleChange}
                    />
                    <label htmlFor={cat.id}>{cat.attributes.subCatTitle}</label>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
            <Accordion className="sort">
              <AccordionSummary
                sx={{
                  backgroundColor: "#D5AC4E",
                  maxHeight: 35,
                  minHeight: 5,
                  "&.Mui-expanded": {
                    maxHeight: 35,
                    minHeight: 5,
                  },
                }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="font-medium">Sort</p>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    value="ASC"
                    name="radio"
                    id="lowest"
                    className="accent-blue-700"
                    onChange={(e) => setSort("asc")}
                  />
                  <label htmlFor="lowest">price (lowest first)</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    value="DESC"
                    name="radio"
                    id="highest"
                    className="accent-blue-700"
                    onChange={(e) => setSort("desc")}
                  />
                  <label htmlFor="highest">price (highest first)</label>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion className="price">
              <AccordionSummary
                sx={{
                  backgroundColor: "#D5AC4E",
                  maxHeight: 35,
                  minHeight: 5,
                  "&.Mui-expanded": {
                    maxHeight: 35,
                    minHeight: 5,
                  },
                }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="font-medium">Price</p>
              </AccordionSummary>
              <AccordionDetails>
                <div className="w-full flex justify-center items-center gap-3">
                  <span>00</span>
                  <input
                    type="range"
                    min={0}
                    max={2000}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                  <span>{maxprice}</span>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion className="brand">
              <AccordionSummary
                sx={{
                  backgroundColor: "#D5AC4E",
                  maxHeight: 35,
                  minHeight: 5,
                  "&.Mui-expanded": {
                    maxHeight: 35,
                    minHeight: 5,
                  },
                }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="font-medium">Brand</p>
              </AccordionSummary>
              <AccordionDetails>
                {data?.map((item, index) =>
                  item.attributes.products.data.map((brand) => (
                    <div className="flex gap-2" key={brand.id}>
                      <input
                        type="checkbox"
                        value={brand.id}
                        id={brand.id}
                        className="accent-blue-700"
                      />
                      <label htmlFor={brand.id}>{brand.attributes.brand}</label>
                    </div>
                  ))
                )}
              </AccordionDetails>
            </Accordion>
            <Accordion className="size">
              <AccordionSummary
                sx={{
                  backgroundColor: "#D5AC4E",
                  maxHeight: 35,
                  minHeight: 5,
                  "&.Mui-expanded": {
                    maxHeight: 35,
                    minHeight: 5,
                  },
                }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="font-medium">Size</p>
              </AccordionSummary>
              <AccordionDetails className="grid grid-cols-2">
                {size.map((size, index) => (
                  <div className="flex gap-2" key={index}>
                    <input
                      type="checkbox"
                      value={size}
                      id="lowest"
                      className="accent-blue-700"
                    />
                    <label htmlFor={size}>{size}</label>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
            <Accordion className="ship">
              <AccordionSummary
                sx={{
                  backgroundColor: "#D5AC4E",
                  maxHeight: 35,
                  minHeight: 5,
                  "&.Mui-expanded": {
                    maxHeight: 35,
                    minHeight: 5,
                  },
                }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="font-medium">Ships From</p>
              </AccordionSummary>
              <AccordionDetails className="grid grid-cols-2">
                {data?.map((item, index) =>
                  item.attributes.products.data.map((shipping_from) => (
                    <div className="flex gap-2" key={shipping_from.id}>
                      <input
                        type="checkbox"
                        value={shipping_from.id}
                        id={shipping_from.id}
                        className="accent-blue-700"
                      />
                      <label htmlFor={shipping_from.id}>
                        {shipping_from.attributes.shipping_from}
                      </label>
                    </div>
                  ))
                )}
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="Cat-right flex-[3] flex flex-col gap-5">
          <div className="slide h-[150px]">
            <Carousel
              data={data_img}
              time={2000}
              width="100%"
              height="150px"
              // captionStyle={captionStyle}
              radius="10px"
              slideNumber={true}
              // slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="gray"
              slideImageFit="cover"
              // button img
              thumbnails={false}
              thumbnailWidth="100px"
              style={
                {
                  // textAlign: "center",
                  // maxWidth: "850px",
                  // maxHeight: "500px",
                  // margin: "40px auto",
                }
              }
            />
          </div>
          <div className="product">
            {/* <List /> */}
            <List
              catId={catId}
              maxprice={maxprice}
              sort={sort}
              SubCat={selectedSubCat}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
