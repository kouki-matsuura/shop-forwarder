'use client';
import { useEffect, useState } from 'react';
import { useGeoCoder } from '../hooks/useGeoCoder';
import { useReverseGeoCoder } from '../hooks/useReverseGeoCoder';
import { useTextSearch } from '../hooks/useTextSearch';
import { MapContainer } from './MapContainer';
import { SearchContainer } from './SearchContainer';
import { useSearchState } from '../actions';

export const TopContainer = () => {
  const [latLng, setLatLng] = useState<{
    lat: number;
    lng: number;
  }>({
    lat: 35.6905,
    lng: 139.6995,
  });

  const { search, setSearch } = useSearchState();

  const {
    fetchPlaces,
    data: placesData,
    isLoading: fetchPlaceProcessing,
    error: fetchPlaceError,
  } = useTextSearch();

  const {
    fetchGeoCode,
    data: geoCodeData,
    isLoading: geoCodeLoading,
    error: fetchGeoCodeError,
  } = useGeoCoder();
  const {
    fetchReverseGeoCode,
    result: reverseGeoCodeResult,
    processing: fetchReverseGeoCodeProcessing,
    error: fetchReverseGeoCodeError,
  } = useReverseGeoCoder();

  const handleReverseGeoCode = () => {
    fetchReverseGeoCode({
      key: process.env.NEXT_PUBLIC_MAP_API_KEY || '',
      lat: latLng.lat,
      lng: latLng.lng,
    });
    setSearch({
      ...search,
      address: reverseGeoCodeResult,
    });
  };

  const handleGetInfos = async (form: any) => {
    await fetchGeoCode({
      key: process.env.NEXT_PUBLIC_MAP_API_KEY || '',
      address: form.center,
    });
    const radius = RADIUS_MAP[form.radius as keyof typeof RADIUS_MAP];

    setSearch({
      query: form.query,
      address: form.center,
      location: geoCodeData,
      radius: radius,
      minprice: 1,
      maxprice: 4,
    });

    const response = await fetchPlaces({
      key: process.env.NEXT_PUBLIC_MAP_API_KEY || '',
      query: 'ラーメン',
      location: geoCodeData,
      radius: radius,
      minprice: 1,
      maxprice: 3,
    });
    console.log('response:', response);
  };

  if (fetchPlaceError) {
    console.log('fetchPlaceError:', fetchPlaceError);
    return <></>;
  }
  if (fetchGeoCodeError || fetchReverseGeoCodeError) {
    console.log('fetchGeoCodeError:', fetchGeoCodeError);
    console.log('fetchReverseGeoCodeError:', fetchReverseGeoCodeError);
  }

  // TODO: ここでローディングを表示する
  if (fetchPlaceProcessing || geoCodeLoading || fetchReverseGeoCodeProcessing) {
    return <>ローディング中...</>;
  }
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
