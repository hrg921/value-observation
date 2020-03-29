import React, { useCallback } from 'react';

import { LineChart } from '../components/charts';
import { readTimeLineChartData } from '../datas/readTimeData';

const ReadsPage: React.FC = () => {
  const formatter = useCallback((value: number) => {
    return `${value / 60} hrs`;
  }, []);

  return (
    <LineChart
      formatter={formatter}
      series={[{ name: "Read Time", data: readTimeLineChartData }]}
      title="Read Time Chart"
    ></LineChart>
  );
};

export default ReadsPage;
