import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; // Keep this import

function LineChart({ chartData, multiAxis }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Added to improve responsiveness
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto1: {
        type: "linear",
        display: true, // Fixed 'true' as boolean instead of string
        position: "left",
        ticks: {
          callback: function (value) {
            return "$" + value.toLocaleString(); // Ensure dollar sign formatting
          },
        },
      },
      crypto2: {
        type: "linear",
        display: true, // Fixed 'true' as boolean instead of string
        position: "right",
        ticks: {
          callback: function (value) {
            return "$" + value.toLocaleString(); // Ensure dollar sign formatting
          },
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;
