import React from 'react';
import ReactApexChart from 'react-apexcharts';

import { ChartData } from '../interface';
import { useChartId } from './useChartId';

type Props = {
  formatter?: (value: number) => string;
  series: [
    {
      name: string;
      data: ChartData;
    }
  ];
  title?: string;
};

export const LineChart: React.FC<Props> = ({ formatter, series, title }) => {
  const chartId = useChartId();
  const options = {
    chart: {
      height: 350,
      id: chartId,
      type: "line",
      zoom: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },
    title: {
      text: title,
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
        formatter
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
