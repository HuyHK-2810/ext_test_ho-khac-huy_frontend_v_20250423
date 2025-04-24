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
import { useChartData } from "../hooks/useChartData";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BodyRecord = () => {
  const { data, isLoading, isError } = useChartData();
  const [filterValue, setFilterValue] = useState("");  // Bộ lọc giá trị
  
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
            size: 8,
            weight: '300',
            lineHeight: '12px',
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
        display: true
      },
      datalabels: {
        display: false,
      },
      title: {
        display: true,
        text: 'Chart Title', // Tên biểu đồ
        position: 'top',     // Đặt tên biểu đồ ở góc trên
        align: 'end',        // Căn phải
        font: {
          size: 16,
          weight: 'bold',
          color: '#FFF',
        },
        padding: {
          top: 10,
          right: 20,
        }
      }
    },
    layout: {
      padding: {
        left: 53,
        right: 98,
        top: 12,
        bottom: 18
      }
    },
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
    // Cập nhật chartData hoặc các giá trị liên quan đến filter ở đây
    // Ví dụ: filter lại dữ liệu của biểu đồ
  };

  return (
    <div className="relative w-full md:col-span-7 bg-dark-600 h-[304px]">
      <Line data={chartData} options={options} plugins={[ChartDataLabels]} />
      
      {/* Hiển thị ngày kế bên tên biểu đồ */}
      <div className="absolute top-0 right-0 text-white p-2">
        <p>{new Date().toLocaleDateString()}</p> {/* Hiển thị ngày hiện tại */}
      </div>

      {/* Bộ lọc ở dưới */}
      <div className="mt-4 p-4">
        <label className="text-white mr-2">Filter:</label>
        <select
          className="p-2 bg-gray-700 text-white rounded"
          value={filterValue}
          onChange={handleFilterChange}
        >
          <option value="">Select Filter</option>
          <option value="option1">Filter Option 1</option>
          <option value="option2">Filter Option 2</option>
          <option value="option3">Filter Option 3</option>
        </select>
      </div>
    </div>
  );
};

export default BodyRecord;
