import React from 'react';
import ReactApexChart from 'react-apexcharts';

import { useChartId } from './useChartId';

type Props = {
  labels: string[];
  series: number[];
  tooltip?: {
    valueFormatter: (val: number) => string;
  };
};

export const PieChart: React.FC<Props> = ({ labels, series, tooltip }) => {
  const chartId = useChartId();

  const options = {
    labels,
    chart: {
      width: "100%",
      type: "pie"
    },
    tooltip: {
      y: {
        formatter: tooltip?.valueFormatter
      }
    }
  };

  return (
    <div id={chartId}>
      <ReactApexChart options={options} series={series} type="pie" />
    </div>
  );
};

export default PieChart;
