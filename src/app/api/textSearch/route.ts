import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get('query');
  const language = url.searchParams.get('language');
  const location = url.searchParams.get('location');
  const radius = url.searchParams.get('radius');
  const key = url.searchParams.get('key');
  const url2 = `
        https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&language=${language}&location=${location}&radius=${radius}&key=${key}`;
  const response = await fetch(url2, {
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
  });
  const result = await response.json();
  return NextResponse.json(result);
}
