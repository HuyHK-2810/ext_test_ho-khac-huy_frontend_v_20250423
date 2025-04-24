import React, { useCallback, useMemo, useState } from "react";
import ImageWithText from "./ImageWithText";
import { useInfiniteHistory } from "../hooks/useHistory";
import HexMenu from "./HexMenu";

const history = [
  { text: "05.21.Morning", imageUrl: "/static/img/m01.jpg" },
  { text: "05.21.Lunch", imageUrl: "/static/img/l03.jpg" },
  { text: "05.21.Dinner", imageUrl: "/static/img/d01.jpg" },
  { text: "05.21.Snack", imageUrl: "/static/img/l01.jpg" },
  { text: "05.20 Morning", imageUrl: "/static/img/m01.jpg" },
  { text: "05.20 Lunch", imageUrl: "/static/img/l02.jpg" },
  { text: "05.20.Dinner", imageUrl: "/static/img/d02.jpg" },
  { text: "05.20.Snack", imageUrl: "/static/img/s01.jpg" },
]

const MealHistory = () => {
  const [filterText, setFilterText] = useState('');
  const { historyData, isLoading, loadNextPage, loadNewFilter } = useInfiniteHistory();


  const handleFilterChange = (value) => {
    if (value === filterText) {
      setFilterText("");
      loadNewFilter("");
      return;
    }
    setFilterText(value);
    loadNewFilter(value);
  };

  const renderItems = useMemo(() => {
    return historyData?.map((item, index) => (
      <div key={item.text + index} className="w-full col-span-6 md:col-span-4 lg:col-span-3">
        <ImageWithText imageUrl={item.imageUrl} text={item.text} />
      </div>
    ));
  }, [historyData]);

  return (
    <div className="flex flex-col gap-6">
      <HexMenu handleFilterChange={handleFilterChange} />
      <div className="flex flex-col justify-start items-center w-full gap-6">
        <div className="grid grid-cols-1 md:grid-cols-12 px-10 md:px-20 lg:px-40 gap-2">
          {renderItems}
        </div>
        <button onClick={() => loadNextPage()} disabled={isLoading} className="w-[296px] h-14 bg-gradient-primary-300-400 text-white px-4 pt-[14px_16px] rounded-md">記録をもっと見る</button>
      </div>
    </div>
  );
};

export default MealHistory;
