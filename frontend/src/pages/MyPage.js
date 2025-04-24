import React from 'react';
import ProgressImageCard from '../components/ProgressImageCard';
import LineChart from '../components/LineChart';
import { Link} from 'react-scroll';
import MealHistory from '../components/MealHistory';

const MyPage = () => {

  return (
    <div className="relative flex h-full flex-1 flex-col justify-start pb-16 gap-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        <div className="w-full md:col-span-5">
          <ProgressImageCard imageUrl="/static/img/d01.jpg"
            size={181} />
        </div>
        <div className="w-full md:col-span-7 bg-dark-600">
          <LineChart />
        </div>
      </div>
      <MealHistory />
      <Link
       to="top"
       smooth={true} duration={500}
        className="content flex flex-col justify-center items-center top-[95%] lg:top-[80%] right-0 lg:right-[5%] cursor-pointer"
        style={{
          position: "fixed",
          transform: "translate(-50%, -50%)",
          color: "#fff",
        }}
      >
        <img
          src="/static/svg/icon/component_scroll.svg" 
          alt="scroll to top"
          className="w-12 h-12"
        />
      </Link>
    </div>
  );
};

export default MyPage;
