import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div>
      <h1 className="h1-bold">Next JS14</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
