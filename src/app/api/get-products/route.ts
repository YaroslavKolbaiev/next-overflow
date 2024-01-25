import { fetchProducts } from '@/lib/data';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { search, page } = await request.json();

  const { productsResponse } = await fetchProducts(search, +page);

  if (typeof productsResponse === 'string') {
    return NextResponse.json(productsResponse, { status: 500 });
  }

  return NextResponse.json(productsResponse, { status: 200 });
}
