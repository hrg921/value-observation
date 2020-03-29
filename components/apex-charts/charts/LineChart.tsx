import React from 'react';
import ReactApexChart from 'react-apexcharts';

import { ChartData } from '../interface';
import { useChartId } from './useChartId';

type Props = {
  series: [
    {
      name: string;
      data: ChartData;
    }
  ];
};

export const LineChart: React.FC<Props> = ({ series }) => {
  const chartId = useChartId();
  const options = {
    chart: {
      height: 350,
      id: chartId,
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
    <div id={chartId}>
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
