import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const address = url.searchParams.get('address');
  const key = url.searchParams.get('key');

  const requestUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`;
  const response = await fetch(requestUrl, {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
  });
  const result = await response.json();
  return NextResponse.json(result);
}
