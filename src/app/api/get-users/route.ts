import { fetchUsers } from '@/lib/data';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { search, page } = await request.json();

  const { usersReponse } = await fetchUsers(search, +page);

  if (typeof usersReponse === 'string') {
    return NextResponse.json(usersReponse, { status: 500 });
  }

  return NextResponse.json(usersReponse, { status: 200 });
}
