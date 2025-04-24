import React from "react";

const menu = [
  { label: "RECOMMENDED COLUMN", jp: "オススメ", type: "column" },
  { label: "RECOMMENDED DIET", jp: "ダイエット", type: "diet" },
  { label: "RECOMMENDED BEAUTY", jp: "美容", type: "beauty" },
  { label: "RECOMMENDED HEALTH", jp: "健康", type: "health" }
]
const ColumnMenu = ({ handleFilterChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 w-full">
      {menu.map((item, index) =>
        <button
          onClick={() => {
            handleFilterChange(item.type)
          }}
          key={item.label + index} className="col-span-6 md:col-span-6 lg:col-span-3 flex flex-col gap-2 items-center cursor-pointer bg-dark-600 pt-6 pb-[22px] px-2 min-h-36 w-full">
          <div className="font-inter font-normal text-22 leading-27 tracking-0.11 text-center text-primary-300 max-w-[200px]">{item.label}</div>
          <div className="border border-b border-white w-14" />
          <div className="font-hiragino font-normal text-lg leading-26 tracking-normal text-center text-light">{item.jp}</div>
        </button>
      )}
    </div>
  );
};

export default ColumnMenu;