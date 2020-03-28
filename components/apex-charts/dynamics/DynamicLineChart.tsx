import dynamic from 'next/dynamic';

export const DynamicLineChart = dynamic(() => import("../charts/LineChart"), {
  ssr: false
});
