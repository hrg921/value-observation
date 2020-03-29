import dynamic from 'next/dynamic';

export const DynamicPieChart = dynamic(() => import("../charts/PieChart"), {
  ssr: false
});
