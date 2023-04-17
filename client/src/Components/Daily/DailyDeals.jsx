import React, { useState } from 'react';
import Countdown from 'react-countdown';
import { DailyImages } from '../../Utils/DailyImages';

import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import MoveUpOutlinedIcon from '@mui/icons-material/MoveUpOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Rating } from '@mui/material';

const dailyPic = DailyImages;
const DailyDeals = () => {
  const [ShowItem, setShowItem] = useState(false);

  return (
    <div
      onMouseLeave={() => setShowItem(false)}
      className='w-[260px] flex flex-col justify-between bg-white shadow-sm shadow-black'
    >
      <div className="relative daily-top h-10 flex items-center justify-between p-2 border-b-[1px] border-b-slate-300 after:content-[''] after:absolute after:w-24 after:h-[1px] after:bg-orange-600 after:-bottom-[1px] after:left-0">
        <div className=''>
          <p className='flex items-center '>
            <LocalFireDepartmentTwoToneIcon className='text-orange-500' />
            <span className='capitalize'>daily deals</span>
          </p>
        </div>
        <div className='text-red-600'>
          <Countdown
            className='font-medium text-sm'
            daysInHours
            autoStart
            date={Date.now() + 86400000}
          />
        </div>
      </div>
      <div className='daily-cen flex flex-col flex-1'>
        <div className='daily-title flex items-center justify-center h-16 '>
          <p className='font-semibold hover:text-orange-500 duration-300 cursor-pointer'>
            Daily Title
          </p>
        </div>
        <div className='relative daily-img flex-1'>
          <div className='w-full h-full'>
            <img
              onMouseEnter={() => setShowItem(true)}
              className='w-full h-full object-fill'
              src={dailyPic[0]}
              alt=''
            />
          </div>
          {ShowItem && (
            <div>
              <div className='absolute bottom-10 w-full flex gap-2 items-center justify-center'>
                <AddShoppingCartOutlinedIcon
                  sx={{ fontSize: '30px' }}
                  className='border-[1px] border-orange-500 rounded-full p-1 text-white bg-orange-500 hover:text-orange-500 hover:border-orange-500 hover:bg-white duration-200 cursor-pointer'
                />
                <VisibilityOutlinedIcon
                  sx={{ fontSize: '30px' }}
                  className='border-[1px] border-orange-500 rounded-full p-1 text-white bg-orange-500 hover:text-orange-500 hover:border-orange-500 hover:bg-white duration-200 cursor-pointer'
                />
                <MoveUpOutlinedIcon
                  sx={{ fontSize: '30px' }}
                  className='border-[1px] border-orange-500 rounded-full p-1 text-white bg-orange-500 hover:text-orange-500 hover:border-orange-500 hover:bg-white duration-200 cursor-pointer'
                />
              </div>
              <div className='absolute top-4 right-4 hover:text-orange-500 duration-300 cursor-pointer'>
                <FavoriteBorderOutlinedIcon />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='daily-btn h-16 flex flex-col items-center justify-center'>
        <p>Price : $120</p>
        <Rating
          name='half-rating-read'
          defaultValue={3.5}
          precision={0.5}
          readOnly
          size='small'
        />
      </div>
    </div>
  );
};

export default DailyDeals;
