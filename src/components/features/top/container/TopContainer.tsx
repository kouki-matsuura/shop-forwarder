'use client';
import { useEffect, useState } from 'react';
import { useGeoCoder } from '../hooks/useGeoCoder';
import { useReverseGeoCoder } from '../hooks/useReverseGeoCoder';
import { useTextSearch } from '../hooks/useTextSearch';
import { MapContainer } from './MapContainer';
import { SearchContainer } from './SearchContainer';

export const TopContainer = () => {
  const [latLng, setLatLng] = useState<{
    lat: number;
    lng: number;
  }>({
    lat: 35.6905,
    lng: 139.6995,
  });
  const [searchForm, setSearchForm] = useState({
    address: '',
    keyword: '',
    location: '',
    radius: 100,
    minPrice: 1,
    maxPrice: 4,
  });

  const [infos, setInfos] = useState<any>();

  const {
    fetchPlaces,
    result: placeResult,
    processing: fetchPlaceProcessing,
    error: fetchPlaceError,
  } = useTextSearch();
  const {
    fetchGeoCode,
    result: geoCodeResult,
    processing: fetchGeoCodeProcessing,
    error: fetchGeoCodeError,
  } = useGeoCoder();
  const {
    fetchReverseGeoCode,
    result: reverseGeoCodeResult,
    processing: fetchReverseGeoCodeProcessing,
    error: fetchReverseGeoCodeError,
  } = useReverseGeoCoder();

  // useEffect(() => {
  //   fetchReverseGeoCode({
  //     key: process.env.NEXT_PUBLIC_MAP_API_KEY || '',
  //     lat: latLng.lat,
  //     lng: latLng.lng,
  //   });
  //   setSearchForm({
  //     ...searchForm,
  //     address: reverseGeoCodeResult,
  //   });
  //   if (!fetchReverseGeoCodeProcessing)
  //     console.log('reverseGeoCodeResult:', reverseGeoCodeResult);
  // }, [latLng]);

  const handleGetInfos = async () => {
    const response = fetchPlaces({
      key: process.env.NEXT_PUBLIC_MAP_API_KEY || '',
      query: searchForm.keyword,
      location: searchForm.location,
      radius: searchForm.radius,
      minprice: searchForm.minPrice,
      maxprice: searchForm.maxPrice,
    });
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
  if (
    fetchPlaceProcessing ||
    fetchGeoCodeProcessing ||
    fetchReverseGeoCodeProcessing
  ) {
  }
  return (
    <>
      <MapContainer latLng={latLng} setLatLng={setLatLng} />
      <SearchContainer />
    </>
  );
};
