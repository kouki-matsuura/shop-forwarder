'use client';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import MapPresenter from '../presenter/MapPresenter';

type MapContainerProps = {
  latLng: {
    lat: number;
    lng: number;
  };
  setLatLng: Dispatch<
    SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
  handleReverseGeoCode: () => void;
};

export const MapContainer: React.FC<MapContainerProps> = ({
  latLng,
  setLatLng,
  handleReverseGeoCode,
}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY || '',
    id: 'google-map-script',
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds(latLng);
    map.fitBounds(bounds);
    map.setZoom(10);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  if (!isLoaded) return <>読み込み中...</>;

  const args = {
    center: latLng,
    onLoad: onLoad,
    onUnmount: onUnmount,
    setLatLng: setLatLng,
    handleReverseGeoCode: handleReverseGeoCode,
  };
  return <MapPresenter {...args} />;
};
