import ProductCard from '@/components/ProductCard';
import Transactions from '@/components/Transactions';
import TransactionsCard from '@/components/TransactionsCard';
import UsersByCountryChart from '@/components/UsersByCountry';
import UsersCard from '@/components/UsersCard';
import { fetchUsersByCountry } from '@/lib/data';

export default async function Home() {
  const users = await fetchUsersByCountry();
  return (
    <>
      <div className="mb-2 flex flex-col justify-between gap-4 sm:flex-row">
        <UsersCard />
        <ProductCard />
        <TransactionsCard />
      </div>
      <div className="grid h-full grid-cols-5 grid-rows-2 gap-2 xl:grid-rows-none">
        <Transactions />
        <UsersByCountryChart users={users} />
      </div>
    </>
  );
}
