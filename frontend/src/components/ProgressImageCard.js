import React from 'react';
import { useAchievementRate } from '../hooks/useAchievementRate';

const ProgressImageCard = ({ imageUrl, size = 120 }) => {

  const { data } = useAchievementRate();
  const radius = size / 2 - 5;
  const strokeWidth = 5;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - ((data?.progress ?? 0) / 100) * circumference;

  return (
    <div
      className="relative w-full h-80 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* overlay tối mờ */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* chứa vòng tròn và chữ */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <svg
          className="transform -rotate-90"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255,255,255,0.3)"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="white"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute text-center tracking-normal font-normal flex justify-center items-end gap-1">
          <div className="text-lg leading-22">{data?.dateLabel ?? "05/12"}</div>
          <div className="text-25 leading-30">{data?.progress ?? 0}%</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressImageCard;
