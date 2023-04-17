import React from 'react';

import Card from '../Card/Card';
import Categoris from '../Categories/Categoris';

import UseFetch from '../../Hooks/UseFetch';
import DailyDeals from '../Daily/DailyDeals';

const FeaturedProduct = ({ type, cat }) => {
  const { data, loading, error } = UseFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  // console.log("DATA categ : ", data);
  // console.log("DATA cat : ", cat);

  return (
    <div
      className={`${
        type === 'normal'
          ? 'featured mt-4 flex w-5/6 m-auto gap-2'
          : 'featured mt-4'
      }`}
    >
      {/* <div className='featured mt-4 flex'> */}
      {type === 'normal' && <DailyDeals />}
      <div className='featured-container w-5/6 m-auto bg-white'>
        <div className=' shadow-sm shadow-black'>
          <div className='featured-P-TOP'>
            <h2 className="font-medium relative uppercase py-2 pl-3 after:absolute after:content-[''] after:w-32 after:h-[1px] after:bg-orange-500 after:left-0 after:bottom-0">
              {type} Products
            </h2>
          </div>
          <div className='featured-P-BTN flex gap-2 items-center justify-center px-4 py-6'>
            {typeof type === 'string' ? (
              <>
                {error
                  ? 'Something wont wrong ! ... '
                  : loading
                  ? 'is Loading'
                  : data?.map((item) => <Card key={item?.id} item={item} />)}
              </>
            ) : (
              <>
                {cat?.map((catg) => (
                  <Categoris key={catg?.id} cat={catg} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
