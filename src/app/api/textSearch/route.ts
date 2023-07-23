import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get('query');
  const location = url.searchParams.get('location');
  const radius = url.searchParams.get('radius');
  const minprice = url.searchParams.get('minprice');
  const maxprice = url.searchParams.get('maxprice');
  const key = url.searchParams.get('key');
  const requestUrl = `
        https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&language=ja&location=${location}&radius=${radius}&minprice=${minprice}&maxprice=${maxprice}&key=${key}`;
  const response = await fetch(requestUrl, {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
  });
  const result = await response.json();
  return NextResponse.json(result);
}
