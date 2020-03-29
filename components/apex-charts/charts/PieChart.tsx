import React from 'react';
import ReactApexChart from 'react-apexcharts';

import { useChartId } from './useChartId';

type Props = {
  labels: string[];
  series: number[];
};

export const PieChart: React.FC<Props> = ({ labels, series }) => {
  const chartId = useChartId();
  const options = {
    labels,
    chart: {
      width: "100%",
      type: "pie"
    }
  };

  return (
    <div id={chartId}>
      <ReactApexChart options={options} series={series} type="pie" />
    </div>
  );
};

export default PieChart;
