import React from "react";

const HexCard = ({ label, handleFilterChange, svgContent = "/static/svg/icon/icon_knife.svg", size = "136px" }) => {
  return (
    <button
      onClick={handleFilterChange}
      className={`hex-card relative cursor-pointer overflow-hidden rounded-md`}
      style={{ width: size, height: size }}
    >
      <img
        src="/static/svg/icon/icon_Hex.svg" // đường dẫn từ thư mục public
        alt="Hexagon Background"
        className="absolute inset-0 w-full h-full"
      />
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
        <img
          src={svgContent}
          alt="content Icon"
          className="w-14 h-14"
        />
        <div className="font-inter text-xl leading-6 tracking-normal font-medium">{label}</div>
      </div>
    </button>
  );
};

export default HexCard;