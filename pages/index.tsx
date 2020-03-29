import Link from 'next/link';

import { CountDown } from '../components/CountDown';

const IndexPage = () => (
  <div>
    <h1>GeonHo Tony Han Value Observation</h1>
    <h2>Observe all the values around GeonHo Tony Han</h2>
    <CountDown date={new Date("2021-01-01")} /> <br />
    <Link href="/incomes">Incomes</Link> <br />
    <Link href="/investments">Investments</Link> <br />
    <Link href="/reads">Reads</Link>
  </div>
);

export default IndexPage;
