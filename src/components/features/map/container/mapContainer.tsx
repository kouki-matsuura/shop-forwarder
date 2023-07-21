'use client';
import { useEffect, useState } from 'react';
import MapPresenter from '../presenter/mapPresenter';
import { useTextSearch } from '../hooks/useTextSearch';
import googleMapReact from 'google-map-react';

export const MapContainer = () => {
  const [defaultLatLng, setDefaultLatLng] = useState({
    lat: 35.6905,
    lng: 139.6995,
  });
  const [keyword, setKeyword] = useState('レストラン');
  const [language, setLanguage] = useState('ja');
  const [location, setLocation] = useState(
    `${defaultLatLng.lat},${defaultLatLng.lng}`,
  );
  const [radius, setRadius] = useState(100);
  const [infos, setInfos] = useState<any>();

  const { getInfos } = useTextSearch();

  const handleApiLoaded = ({ map, maps }: { map: any; maps: any }) => {
    new maps.Marker({
      map,
      position: defaultLatLng,
    });
  };

  const handleGetInfos = async () => {
    const response = await getInfos({
      key: process.env.NEXT_PUBLIC_MAP_API_KEY || '',
      language: language,
      query: keyword,
      location: location,
      radius: radius,
    });
    setInfos(response);
  };

  useEffect(() => {
    handleGetInfos();
  }, []);

  const args = {
    defaultLatLng,
    handleApiLoaded,
    handleGetInfos,
  };

  return <MapPresenter {...args} />;
};
