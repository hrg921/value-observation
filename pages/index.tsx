import Link from 'next/link';

const IndexPage = () => (
  <div>
    <h1>GeonHo Tony Han Value Observation</h1>
    <h2>Observe all the values around GeonHo Tony Han</h2>
    <Link href="/incomes">Incomes</Link> <br />
    <Link href="/investments">Investments</Link> <br />
    <Link href="/reads">Reads</Link>
  </div>
);

export default IndexPage;
