import React from "react";
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

// Đăng ký các thành phần của Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const { data, isLoading, isError } = useChartData();
  if (isLoading) return <div className="text-white text-center">Loading chart data...</div>;
  if (isError) return <div className="text-red-500 text-center">Failed to load data</div>;

  const chartData = {
    labels: data.labels,
    datasets: data.datasets,
  };

  const options =  {
    responsive: true,
    maintainAspectRatio: false,  // Tắt chế độ giữ tỷ lệ khung hình mặc định
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: '#777777',  // Tùy chỉnh màu sắc của đường dọc
          lineWidth: 1,  // Điều chỉnh độ dày của đường
          display: true  // Tắt các cột dọc
        },
        ticks: {
        display: true,  // Hiển thị nhãn trục X
        color: '#FFF', // Màu sắc của nhãn trục X
       font: {
          size: 8,      // Kích thước font chữ
          weight: '300', // Định dạng chữ đậm
          lineHeight: '12px', // Chiều cao dòng
        },
      },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false  // Tắt các cột ngang
        },
        ticks: {
          display: false  // Tắt nhãn của trục Y
        }
      }
    },
    plugins: {
      legend: {
        display: false  // Tắt hiển thị legend
      },
      datalabels: {
        display: false,  // Bật hiển thị giá trị trong các cột
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

  return <Line data={chartData} options={options} plugins={[ChartDataLabels]} />;
};

export default LineChart;
