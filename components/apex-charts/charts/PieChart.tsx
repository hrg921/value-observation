import React from 'react';
import ReactApexChart from 'react-apexcharts';

import { useChartId } from './useChartId';

type Props = {
  series: number[];
};

export const PieChart: React.FC<Props> = ({ series }) => {
  const chartId = useChartId();
  const options = {
    chart: {
      width: "100%",
      type: "pie"
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"]
  };

  return (
    <div id={chartId}>
      <ReactApexChart options={options} series={series} type="pie" />
    </div>
  );
};

export default PieChart;
