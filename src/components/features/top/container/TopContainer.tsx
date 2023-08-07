'use client';
import { useEffect, useState } from 'react';
import { useGeoCoder } from '../hooks/useGeoCoder';
import { useReverseGeoCoder } from '../hooks/useReverseGeoCoder';
import { useTextSearch } from '../hooks/useTextSearch';
import { MapContainer } from './MapContainer';
import { SearchContainer } from './SearchContainer';
import { useSearchState } from '../actions';
import { useSWRConfig } from 'swr';

export const TopContainer = () => {
  const [latLng, setLatLng] = useState<{
    lat: number;
    lng: number;
  }>({
    lat: 35.6905,
    lng: 139.6995,
  });

  const { search, setSearch } = useSearchState();
  const { mutate } = useSWRConfig();

  const {
    fetchPlaces,
    data: placesData,
    isLoading: fetchPlaceProcessing,
    error: fetchPlaceError,
  } = useTextSearch();

  const {
    data: geoCodeData,
    isLoading: geoCodeLoading,
    error: fetchGeoCodeError,
  } = useGeoCoder();

  const handleReverseGeoCode = () => {};

  const handleGetInfos = async (form: any) => {
    const radius = RADIUS_MAP[form.radius as keyof typeof RADIUS_MAP];
    setSearch({
      query: form.query,
      address: form.center,
      location: geoCodeData,
      radius: radius,
      minprice: 1,
      maxprice: 4,
    });

    //mutate('/api/geoCoder');
    // const response = await fetchPlaces({
    //   key: process.env.NEXT_PUBLIC_MAP_API_KEY || '',
    //   query: 'ラーメン',
    //   location: geoCodeData,
    //   radius: radius,
    //   minprice: 1,
    //   maxprice: 3,
    // });
  };

  if (fetchPlaceError) {
    console.log('fetchPlaceError:', fetchPlaceError);
    return <></>;
  }
  if (fetchGeoCodeError) {
    console.log('fetchGeoCodeError:', fetchGeoCodeError);
  }

  // TODO: ここでローディングを表示する
  if (fetchPlaceProcessing || geoCodeLoading) {
    return <>ローディング中...</>;
  }
  console.log('gaocodeDAta:', geoCodeData);
  return (
    <>
      <MapContainer
        latLng={latLng}
        setLatLng={setLatLng}
        handleReverseGeoCode={handleReverseGeoCode}
      />
      <SearchContainer handleGetInfos={handleGetInfos} />
    </>
  );
};

const RADIUS_MAP = {
  1: 300,
  2: 500,
  3: 1000,
  4: 2000,
  5: 3000,
  6: 5000,
} as const;
