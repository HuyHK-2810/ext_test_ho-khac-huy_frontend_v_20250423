import React, { useState } from 'react';
import ProgressImageCard from '../../components/ProgressImageCard';
import LineChart from '../../components/LineChart';
import HexMenu from '../../components/HexMenu';
import MealHistory from '../../components/MealHistory';


const MyPage = () => {


  return (
    <div className="flex h-full flex-1 flex-col justify-start pb-16 gap-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        <div className="w-full md:col-span-5">
          <ProgressImageCard imageUrl="/static/img/d01.jpg"
            size={181} />
        </div>

        <div className="w-full md:col-span-7 bg-dark-600">
          <LineChart />
        </div>
      </div>

      <MealHistory /></div>
  );
};

export default MyPage;
