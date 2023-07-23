import { useState } from 'react';
import {
  GeoCodeRequest,
  PlacesRequest,
  ReverseGeoCodeRequest,
} from '../map.types';
type UseTextSearchResponse = {
  address: string;
  getPlaces: (req: PlacesRequest) => any;
  getLatLng: (req: GeoCodeRequest) => any;
  getAddress: (req: ReverseGeoCodeRequest) => void;
};
export const useTextSearch = (): UseTextSearchResponse => {
  const [address, setAddress] = useState<string>('');
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
    setAddress(result.results[0]);
  };

  return {
    address,
    getPlaces,
    getLatLng,
    getAddress,
  };
};
