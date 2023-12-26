import Card from '@/components/Card';
import Chart from '@/components/Chart';
import Transactions from '@/components/Transactions';
import { fetchStats } from '@/lib/data';
import { currentYear } from '@/lib/utils';

export default async function Home() {
  const data = await fetchStats(currentYear);
  return (
    <>
      <div className="mb-2 flex flex-col justify-between gap-4 sm:flex-row">
        <Card />
        <Card />
        <Card />
      </div>
      <Transactions />
      <Chart data={data} />
    </>
  );
}
