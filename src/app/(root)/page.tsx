import Chart from '@/components/Chart';
import ProductCard from '@/components/ProductCard';
import Transactions from '@/components/Transactions';
import TransactionsCard from '@/components/TransactionsCard';
import UsersCard from '@/components/UsersCard';
import { fetchStats } from '@/lib/data';
import { currentYear } from '@/lib/utils';

export default async function Home() {
  const data = await fetchStats(currentYear);
  return (
    <>
      <div className="mb-2 flex flex-col justify-between gap-4 sm:flex-row">
        <UsersCard />
        <ProductCard />
        <TransactionsCard />
      </div>
      <Transactions />
      <Chart data={data} />
    </>
  );
}
