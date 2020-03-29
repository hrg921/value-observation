import { LineChart } from '../components/charts';
import {
  averageClass101IncomeAmount,
  class101IncomeChartData,
  maxClass101IncomeAmount,
  minClass101IncomeAmount,
  totalClass101IncomeAmount,
} from '../datas/class101IncomeData';

const IncomesPage = () => (
  <div>
    <h1>Income Charts</h1>
    <LineChart
      series={[
        { name: "Class101 Income Chart", data: class101IncomeChartData }
      ]}
    />
    <p>최소: {minClass101IncomeAmount.toLocaleString()}₩</p>
    <p>최대: {maxClass101IncomeAmount.toLocaleString()}₩</p>
    <p>평균: {averageClass101IncomeAmount.toLocaleString()}₩</p>
    <p>총: {totalClass101IncomeAmount.toLocaleString()}₩</p>
  </div>
);

export default IncomesPage;
