import React from 'react';
import ReactApexChart from 'react-apexcharts';

import { chartData } from './chartData';

const LineChart: React.FC = () => {
  const series = [
    {
      name: "Class101",
      data: chartData
    }
  ];
  const options = {
    chart: {
      height: 350,
      id: "line-chart",
      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },
    title: {
      text: "Product Trends by Month",
      align: "left"
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    yaxis: {
      labels: {
        formatter: function(value: number) {
          return value.toLocaleString() + "₩";
        }
      }
    }
  };

  return (
    <div id="line-chart">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default LineChart;
