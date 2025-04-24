import React from "react";
import { Link } from "react-scroll";

const buttons = [
  { label: "BODY RECORD", jp: "自分のカラダの記録", type: "record", imageUrl: "/static/img/MyRecommend-1.jpg" },
  { label: "MY EXERCISE", jp: "自分の運動の記録", type: "exercise", imageUrl: "/static/img/MyRecommend-2.jpg" },
  { label: "MY DIARY", jp: "自分の日記", type: "diary", imageUrl: "/static/img/MyRecommend-3.jpg" },
]
const RecordButton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full">
      {buttons.map((item, index) =>
        <Link to={item.type}
          key={item.label + index}
          className="relative col-span-6 md:col-span-6 lg:col-span-4 cursor-pointer min-h-72 w-full border-primary-300 border-[24px]">

          <div
            className="absolute inset-0 bg-cover bg-center opacity-100"
            style={{
              backgroundImage: `url('${item.imageUrl}')`,
              filter: "grayscale(100%)",
            }}
          />
          <div className="absolute inset-0 bg-black opacity-25 mix-blend-luminosity"></div>
          <div
            className="content flex flex-col justify-center items-center"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
            }}
          >
            <div className="font-inter font-normal text-25 leading-30 tracking-0.13 text-center text-primary-300 max-w-[240px]">{item.label}</div>
            <div className="font-hiragino text-center font-light text-sm tracking-normal text-light bg-primary-400 py-1 w-40">{item.jp}</div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default RecordButton;