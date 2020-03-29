import { DynamicLineChart } from '../components/apex-charts/dynamics/DynamicLineChart';
import {
  averageClass101IncomeAmount,
  maxClass101IncomeAmount,
  minClass101IncomeAmount,
  totalClass101IncomeAmount,
} from '../datas/class101IncomeData';

const IncomePage = () => (
  <div>
    <h1>Income Charts</h1>
    <DynamicLineChart />
    <p>최소: {minClass101IncomeAmount.toLocaleString()}₩</p>
    <p>최대: {maxClass101IncomeAmount.toLocaleString()}₩</p>
    <p>평균: {averageClass101IncomeAmount.toLocaleString()}₩</p>
    <p>총: {totalClass101IncomeAmount.toLocaleString()}₩</p>
  </div>
);

export default IncomePage;
