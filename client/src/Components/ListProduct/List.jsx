import React from "react";
import UseFetch from "../../Hooks/UseFetch";
import Card from "../Card/Card";

const List = ({ catId, maxprice, sort, SubCat }) => {
  const { data, loading, error } = UseFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${SubCat.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&sort=price:${sort}&[filters][price][$lte]=${maxprice}`
  );
  return (
    <div className=" flex gap-4 flex-wrap">
      {loading
        ? "is Loading ..."
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
