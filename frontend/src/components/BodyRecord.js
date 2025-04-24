import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Element } from 'react-scroll';
import { cn } from "../lib/utils";
import { useGetFilterBodyRecord } from "../hooks/useBodyRecordData";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BodyRecord = () => {
  const { data, isLoading, isError, loadNewFilter } = useGetFilterBodyRecord();
  const [filterValue, setFilterValue] = useState("day");

  if (isLoading) return <div className="text-white text-center">Loading chart data...</div>;
  if (isError) return <div className="text-red-500 text-center">Failed to load data</div>;

  const chartData = {
    labels: data.labels,
    datasets: data.datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: '#777777',
          lineWidth: 1,
          display: true
        },
        ticks: {
          display: true,
          color: '#FFF',
          font: {
            size: 12,
            weight: '400',
            lineHeight: '15px',
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        display: false,
      },

    },
    layout: {
      padding: {
        left: 51,
        right: 50,
        top: 54,
        bottom: 49
      }
    },
  };

  const handleFilterChange = (value) => {
    setFilterValue(value);
    loadNewFilter(value);
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  return (
    <Element name="record" className="relative w-full md:col-span-7 bg-dark-600 h-[304px]">
      <Line data={chartData} options={options} plugins={[ChartDataLabels]} />

      <div className="absolute top-4 left-6 text-white p-2 font-inter font-normal text-15 leading-18 tracking-0.15 w-24 text-wrap">
        <p>BODY RECORD</p>
      </div>
      <div className="absolute top-4 left-[120px] text-white p-2">
        <p>{formatDate(new Date())}</p>
      </div>
      <div className="absolute bottom-4 left-8 font-hiragino flex gap-4 justify-center items-center">
        {filterOption.map((option) => (<button
          key={option.value}
          className={cn(`py-2 px-10 rounded-[11px] h-6 text-15 leading-22 font-light tracking-0.08 flex justify-center items-center`, {
            "bg-primary-300 text-white hover:bg-white hover:text-primary-300": filterValue === option.value,
            "bg-white text-primary-300 hover:bg-primary-300 hover:text-white": filterValue !== option.value,
          })}
          onClick={() => handleFilterChange(option.value)}
        >
          {option.label}
        </button>))}
      </div>
    </Element>
  );
};

const filterOption = [{
  value: "day",
  label: "日"
},
{
  value: "week",
  label: "週"
},
{
  value: "moonth",
  label: "月"
},
{
  value: "year",
  label: "年"
}]
export default BodyRecord;
