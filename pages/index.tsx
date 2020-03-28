import { DynamicLineChart } from '../components/apex-charts/dynamics/DynamicLineChart';
import Layout from '../components/Layout';
import {
  averageClass101IncomeAmount,
  maxClass101IncomeAmount,
  minClass101IncomeAmount,
  totalClass101IncomeAmount,
} from '../datas/class101IncomeData';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Income Charts</h1>
    <DynamicLineChart />
    <p>최소: {minClass101IncomeAmount.toLocaleString()}₩</p>
    <p>최대: {maxClass101IncomeAmount.toLocaleString()}₩</p>
    <p>평균: {averageClass101IncomeAmount.toLocaleString()}₩</p>
    <p>총: {totalClass101IncomeAmount.toLocaleString()}₩</p>
  </Layout>
);

export default IndexPage;
