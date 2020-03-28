import { class101IncomeData } from '../../../datas/class101IncomeData';
import { ChartData } from '../interface';

export const chartData: ChartData = class101IncomeData.map(e => ({
  x: e.time.toISOString(),
  y: e.value.amount
}));
