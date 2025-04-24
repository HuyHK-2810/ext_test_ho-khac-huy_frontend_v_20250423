import React from "react";

const ArticleCard = ({
  imageUrl,
  date = "2021.05.17   23:25",
  title = "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
  hashTags = ["#魚", "#健康", "#食事"],
  className = "",
  textClassName = "",
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className={`relative overflow-hidden shadow-lg min-h-[234px] h-[234px] ${className}`} >
        <img
          src={imageUrl}
          alt="Image with text"
          className="w-full h-full object-cover"
        />

        <div
          className={`absolute bottom-0 left-0 bg-primary-300 text-white p-2 text-sm font-inter font-normal leading-18 tracking-0.15 ${textClassName}`}
        >
          {date}
        </div>
      </div>
      <div className="flex flex-col gap-0">
        <div className="font-hiragino text-15 leading-22 tracking-0.08 font-light text-dark-500">{title}</div>
        <div className="flex flex-wrap gap-1">
          {hashTags.map((tag, index) => (
            <span
              key={index}
              className="font-hiragino text-primary-400 py-1 text-xs font-light leading-22 tracking-0.06"
            >
              {tag}
            </span>
          ))}
        </div></div>

    </div>

  );
};

export default ArticleCard;
