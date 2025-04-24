import React from 'react';
import { Link } from 'react-scroll';
import RecordButton from '../components/RecordButton';
import BodyRecord from '../components/BodyRecord';


const MyRecordPage = () => {
  return (
    <div className="relative flex h-full flex-1 flex-col justify-start pt-14 pb-16 gap-6 lg:gap-14 px-4 md:px-20 lg:px-40">
      <RecordButton />
      <div className="w-full md:col-span-7 bg-dark-600 h-[304px]">
        <BodyRecord />
      </div>
      <Link
        to="top"
        smooth={true} duration={500}
        className="content flex flex-col justify-center items-center top-[95%] lg:top-[80%] right-0 lg:right-[4%] cursor-pointer"
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

export default MyRecordPage;
