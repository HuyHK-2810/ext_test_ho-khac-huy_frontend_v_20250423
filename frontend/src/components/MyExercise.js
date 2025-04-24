import React, { useMemo } from "react";

import { Element } from 'react-scroll';
import { formatDate } from "../lib/utils";
import { useExerciseData } from "../hooks/useExerciseData";


const MyExercise = () => {
  const { data } = useExerciseData();

  const renderItems = useMemo(() => {
    return data?.data?.map((item, index) => (
      <div key={item.text + index} className="flex justify-start items-start w-full text-white p-1 gap-[3px] border-b border-[#777777] ">
        <div className="font-hiragino font-light text-5 leading-7 tracking-0.01 text-light text-left w-[13px] h-[7px] mt-[7px] ">●</div>
        <div className="flex flex-col justify-start items-start w-full gap-2 ">
          <div className="flex justify-between items-center w-full gap-2 ">
            <div className="font-hiragino font-light text-15 leading-22 tracking-0.08 text-light">{item.activity}</div>
            <div className="font-inter font-normal text-lg leading-22 tracking-0.09 text-primary-300">{item.calories}</div>
          </div>
          <div className="font-inter font-normal text-15 leading-18 tracking-0.08 text-primary-300">{item.duration}</div>
        </div>
      </div>
    ));
  }, [data]);

  return (
    <Element name="exercise" className=" w-full p-4 pl-6 bg-dark-600 h-[304px]">
      <div className="flex items-center justify-start">
        <div className=" text-white p-2 font-inter font-normal text-15 leading-18 tracking-0.15 w-24 text-wrap">
          <p>MY EXERCISE</p>
        </div>
        <div className=" left-[120px] text-white p-2">
          <p>{data?.date ?? formatDate(new Date())}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-10 w-full h-[192px] pr-14 overflow-hidden scrollable-container">
        {renderItems}
      </div>
    </Element>
  );
};
export default MyExercise;
