import React from "react";

const ImageWithText = ({
  imageUrl,
  text,
  className = "",
  textClassName = "",
}) => {
  return (
    <div>

      <div className={`relative overflow-hidden shadow-lg min-h-[234px] h-[234px] ${className}`} >
        <img
          src={imageUrl}
          alt="Image with text"
          className="w-full h-full object-cover"
        />

        <div
          className={`absolute bottom-0 left-0 bg-primary-300 text-white p-2 text-sm font-inter font-normal leading-18 tracking-0.15 ${textClassName}`}
        >
          {text}
        </div>
      </div>
    </div>

  );
};

export default ImageWithText;
