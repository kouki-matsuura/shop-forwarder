'use client';
import { useEffect, useState } from 'react';
import MapPresenter from '../presenter/mapPresenter';
import { useTextSearch } from '../hooks/useTextSearch';
import googleMapReact from 'google-map-react';

/*
TODO:
1. useStateをまとめる
2. 一つのハンドラーでstateを更新する

3. 検索の中心となる緯度・経度はAPIから取得　＝＞　「新宿駅」などから緯度経度を取得
4. 地図から地点を検索
*/

export const MapContainer = () => {
  const [latLng, setLatLng] = useState({
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

  const { getPlaces, getLatLng, getAddress } = useTextSearch();

  const handleApiLoaded = ({ map, maps }: { map: any; maps: any }) => {
    new maps.Marker({
      map,
      position: latLng,
    });
  };

  const handleGetInfos = async () => {
    const response = getPlaces({
      key: process.env.NEXT_PUBLIC_MAP_API_KEY || '',
      query: searchForm.keyword,
      location: searchForm.location,
      radius: searchForm.radius,
      minprice: searchForm.minPrice,
      maxprice: searchForm.maxPrice,
    });
    setInfos(response);
  };

  useEffect(() => {
    const response = getAddress({
      key: process.env.NEXT_PUBLIC_MAP_API_KEY || '',
      lat: latLng.lat,
      lng: latLng.lng,
    });
    console.log('geocode,response:', response);
  }, [getAddress, latLng]);

  const args = {
    latLng,
    setLatLng,
    searchForm,
    setSearchForm,
    handleApiLoaded,
    handleGetInfos,
  };

  return <MapPresenter {...args} />;
};
