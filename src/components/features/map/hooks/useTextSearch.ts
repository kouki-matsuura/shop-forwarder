import { useState } from 'react';
import {
  GeoCodeRequest,
  PlacesRequest,
  ReverseGeoCodeRequest,
} from '../map.types';
type UseTextSearchResponse = {
  getPlaces: (req: PlacesRequest) => any;
  getLatLng: (req: GeoCodeRequest) => any;
  getAddress: (req: ReverseGeoCodeRequest) => any;
};
export const useTextSearch = (): UseTextSearchResponse => {
  const getPlaces = async (req: PlacesRequest) => {
    const response = await fetch(
      `/api/textSearch?query=${req.query}&language=ja&location=${req.location}&radius=${req.radius}&minprice=${req.minprice}&maxprice=${req.maxprice}&key=${req.key}`,
    );
    const result = await response.json();
    console.log('RESULT:', result);
    return result;
  };

  const getLatLng = async (req: GeoCodeRequest) => {
    const response = await fetch(
      `/api/geoCoder?address=${req.address}&key=${req.key}`,
    );
    const result = await response.json();
    console.log('GEO:', result);
    return result;
  };

  const getAddress = async (req: ReverseGeoCodeRequest) => {
    const latlng = `${req.lat},${req.lng}`;
    const response = await fetch(
      `/api/reverseGeoCoder?latlng=${latlng}&key=${req.key}`,
    );
    const result = await response.json();
    console.log('ADDRESS:', result.results[0]);
    return result.results[0];
  };

  return {
    getPlaces,
    getLatLng,
    getAddress,
  };
};
