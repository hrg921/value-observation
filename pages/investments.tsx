import styled from 'styled-components';

import { DynamicPieChart } from '../components/apex-charts/dynamics/DynamicPieChart';

const InvestmentsPage = () => {
  return (
    <PieChartContainer>
      <DynamicPieChart
        labels={["삼성전자우", "삼성전자", "카카오", "ETH", "BTC", "ATOM"]}
        series={[86050, 130950, 280000, 827845, 149656, 25500]}
      />
    </PieChartContainer>
  );
};

export default InvestmentsPage;

const PieChartContainer = styled.div`
  width: 50%;
`;
