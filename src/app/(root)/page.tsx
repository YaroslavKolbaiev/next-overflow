import Card from '@/components/Card';
import Chart from '@/components/Chart';
import Transactions from '@/components/Transactions';

export default function Home() {
  return (
    <div>
      <div className="mb-2 flex justify-between gap-4">
        <Card />
        <Card />
        <Card />
      </div>
      <Transactions />
      <Chart />
    </div>
  );
}
