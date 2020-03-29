import React from 'react';
import ReactApexChart from 'react-apexcharts';

import { useChartId } from './useChartId';

export const PieChart = () => {
  const chartId = useChartId();
  const series = [44, 55, 13, 43, 22];
  const options = {
    chart: {
      width: 380,
      type: "pie"
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };

  return (
    <div id={chartId}>
      <ReactApexChart options={options} series={series} type="pie" />
    </div>
  );
};

export default PieChart;
