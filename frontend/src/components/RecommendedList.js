import React, { useMemo, useState } from "react";
import ArticleCard from "./ArticleCard";
import ColumnMenu from "./ColumnMenu";
import { useInfiniteColumn } from "../hooks/useColumn";

const RecommendedList = () => {
  const [filterText, setFilterText] = useState('');
  const { columnData, isLoading, loadNextPage, loadNewFilter } = useInfiniteColumn();


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
    return columnData?.map((item, index) => (
      <div key={item.text + index} className="w-full col-span-6 md:col-span-4 lg:col-span-3">
        <ArticleCard imageUrl={item.imageUrl} text={item.text}
          date={item.text}
          title={item.title}
          hashTags={item.hashTags}

        />
      </div>
    ));
  }, [columnData]);

  return (
    <div className="flex flex-col gap-6">
      <ColumnMenu handleFilterChange={handleFilterChange} />
      <div className="flex flex-col justify-start items-center w-full gap-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {renderItems}
        </div>
        <button onClick={() => loadNextPage()} disabled={isLoading} className="w-[296px] h-14 bg-gradient-primary-300-400 text-white px-4 pt-[14px_16px] rounded-md">記録をもっと見る</button>
      </div>
    </div>
  );
};

export default RecommendedList;
