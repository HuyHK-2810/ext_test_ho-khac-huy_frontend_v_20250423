import React from "react";
import HexCard from "./HexCard";

const menu = [
  { label: "Morning", url: "/Morning", svgContent: "/static/svg/icon/icon_knife.svg" },
  { label: "Lunch", url: "/Lunch", svgContent: "/static/svg/icon/icon_knife.svg" },
  { label: "Dinner", url: "/Dinner", svgContent: "/static/svg/icon/icon_knife.svg" },
  { label: "Snack", url: "/Snack", svgContent: "/static/svg/icon/icon_cup.svg" }
]
const HexMenu = ({ handleFilterChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-16">
      {menu.map((item, index) =>
        <HexCard key={item.label + index}
          label={item.label}
          url={item.url}
          svgContent={item.svgContent}
          handleFilterChange={() => {
            handleFilterChange(item.label)
          }}

        />
      )}
    </div>
  );
};

export default HexMenu;