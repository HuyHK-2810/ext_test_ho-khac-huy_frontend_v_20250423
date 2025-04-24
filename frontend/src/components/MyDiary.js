import React, { useMemo } from "react";

import { Element } from 'react-scroll';
import { useInfiniteHistory } from "../hooks/useHistory";
import { useInfiniteDiary } from "../hooks/useDiary";


const MyDiary = () => {
  const { diaryData, isLoading, loadNextPage } = useInfiniteDiary();
  const renderItems = useMemo(() => {
    return diaryData?.map((item, index) => (
      <div key={item.text + index} className="w-full col-span-6 md:col-span-4 lg:col-span-3 border-2 border-[##707070] p-4 max-h-[231px]">
        <div className="flex flex-col justify-start items-start w-full gap-2 text-dark-500">
          <div className="flex flex-col justify-start items-start w-full gap-0 font-inter text-lg leading-22 tracking-0.09">
            <p >
              2021.05.21
            </p>
            <p >
              23:25
            </p>
          </div>

          <div className="flex flex-col justify-start items-start w-full font-hiragino text-xs leading-17 tracking-0.06 gap-2">
            <p className=" text-left font-inter text-15 leading-18 tracking-0.15">私の日記の記録が一部表示されます。</p>
            <p className=" text-left font-inter text-15 leading-18 tracking-0.15 max-h-[132px] overflow-hidden text-ellipsis line-clamp-3">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…</p>

          </div>
        </div>
      </div>
    ));
  }, [diaryData]);

  return (
    <Element name="diary" className=" w-full mt-14">
      <div className="font-inter text-22 leading-27 tracking-0.11 text-dark-500">MY DIARY</div>
      <div className="flex flex-col justify-start items-center w-full gap-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {renderItems}
        </div>
        <button onClick={() => loadNextPage()} disabled={isLoading} className="w-[296px] h-14 bg-gradient-primary-300-400 text-white px-4 pt-[14px_16px] rounded-md">記録をもっと見る</button>
      </div>

    </Element>
  );
};

export default MyDiary;
