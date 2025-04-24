import React from "react";

import { Element } from 'react-scroll';
import { formatDate } from "../lib/utils";


const MyExercise = () => {



  return (
    <Element name="exercise" className=" w-full p-4 pl-6 bg-dark-600 h-[304px]">

      <div className="flex items-center justify-start"> 
       <div className=" text-white p-2 font-inter font-normal text-15 leading-18 tracking-0.15 w-24 text-wrap">
        <p>MY EXERCISE</p>
      </div>
        <div className=" left-[120px] text-white p-2">
          <p>{formatDate(new Date())}</p>
        </div>
      </div>
      <div>

      </div>
    </Element>
  );
};

export default MyExercise;
